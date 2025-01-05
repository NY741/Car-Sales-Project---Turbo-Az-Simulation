// FUNCTION PREPARE CAR
function prepareCar(car, block) {
  // Image Part
  const link = document.createElement("a");
  link.className = "main__car-link";
  link.dataset.id = car.id;
  link.href = "#";
  const carBlock = document.createElement("div");
  carBlock.className = "main__car";
  if (car.isSold) carBlock.classList.add("sold-car");
  const carImageBlock = document.createElement("div");
  carImageBlock.className = "main__img";
  const carImage = document.createElement("img");
  carImage.src = car.imageLink;
  carImage.alt = car.brand + " " + car.model;
  carImageBlock.append(carImage);

  // Description Part
  const description = document.createElement("div");
  description.className = "main__description";
  const price = document.createElement("p");
  price.className = "main__price";
  price.innerText = car.amount + "  " + car.currency;
  const name = document.createElement("p");
  name.className = "main__name";
  name.innerText = car.brand + " " + car.model;
  const base = document.createElement("p");
  base.className = "main__base";
  base.innerText =
    car.year +
    ", " +
    car.engineVolume.toFixed(1) +
    " L, " +
    car.mileage +
    " KM";

  // Date Part
  const reportDate = new Date(car.date);
  const today = new Date();
  const diff = today - reportDate;
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const address = document.createElement("p");
  address.className = "main__address";
  let dayIndex = diffInDays == 0 ? "Today" : diffInDays + " days ago";
  address.innerText = car.city + ", " + dayIndex;
  description.append(price, name, base, address);
  carBlock.append(carImageBlock, description);

  // Icons Part
  const favoriteSign = document.createElement("img");
  favoriteSign.className = "main__favorite-sign sign";
  if (car.isFavorite) {
    favoriteSign.src = "./assets/images/sign-heart-red.png";
    favoriteSign.alt = "Favoritlərdən çıxart";
  } else {
    favoriteSign.src = "./assets/images/sign-heart-simple.png";
    favoriteSign.alt = "Elanı favorit et";
  }
  favoriteSign.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(car, this);
    favorites.push(car);
  });
  carBlock.append(favoriteSign);
  addBadge(car, carBlock);
  link.append(carBlock);
  block.append(link);

  link.addEventListener("click", function (e) {
    e.preventDefault();
    displayCar(this);
  });
}

// FUNCTION ADD BADGE
function addBadge(car, carBlock) {
  const types = ["new", "barter", "credit", "premium"];
  for (let type of types) {
    if (car[`is${capitalize(type)}`]) {
      const badge = document.createElement("img");
      badge.className = `main__${type}-sign sign`;
      badge.src = `./assets/images/badges/badge-${type}.png`;
      badge.alt = badgeDescriptions[`${type}`];
      carBlock.append(badge);
    }
  }
}

// FUNCTION POP UP ADD CAR FORM +
function popUpAddCarForm() {
  backdrop.classList.remove("hidden");
  addBlock.classList.remove("hidden");
}

// FUNCTION CLOSE ADD CAR BLOCK +
function closeAddBlock() {
  backdrop.classList.add("hidden");
  addBlock.classList.add("hidden");
}

// FUNCTION DISPLAY CAR
function displayCar(link) {
  let car = cars.find((car) => car.id == link.dataset.id);
  displayCarBlock.classList.remove("hidden");
  backdrop.classList.remove("hidden");
  displayCarTitle.innerText =
    car.brand +
    " " +
    car.model +
    ", " +
    car.year +
    ", " +
    car.engineVolume +
    " L, " +
    car.horsePower +
    " HP, " +
    car.mileage +
    " KM";
  const carImage = document.createElement("img");
  carImage.src = car.imageLink;
  carImage.alt = car.brand + " " + car.model;
  displayCarImage.prepend(carImage);

  const firstTableDatas = displayCarTable1.querySelectorAll(
    "tr > td:nth-of-type(2)"
  );
  const secondTableDatas = displayCarTable2.querySelectorAll(
    "tr > td:nth-of-type(2)"
  );

  fillTableDatas(car, firstTableDatas);
  fillTableDatas(car, secondTableDatas);

  buyCarBtn.addEventListener("click", function (e) {
    buyCar(link, car);
  });

  // FUNCTION BUY CAR
  function buyCar(link, car) {
    closeDisplayCarBlock();
    car.isSold = true;
    link.querySelector(".main__car").classList.add("sold-car");
  }
  if (car) return;
}

// FUNCTION CLOSE DISPLAY CAR BLOCK
function closeDisplayCarBlock() {
  displayCarImage.innerHTML = "";
  displayCarImage.append(buyCarBtn);
  displayCarImage.append(closeCarBtn);
  displayCarBlock.classList.add("hidden");
  backdrop.classList.add("hidden");
  buyCarBtn.removeEventListener("click", function (e) {
    buyCar(link, car);
  });
}

// FUNCTION TOGGLE MORE OPTIONS +
function toggleMoreOptions() {
  const extendedOptions = document.getElementsByClassName("extended-option");
  showMoreBtn.classList.toggle("active");
  showMoreBtn.innerText = showMoreBtn.classList.contains("active")
    ? "Hide more search options"
    : "Show more search options";
  // for (let option of extendedOptions) {
  //   option.classList.toggle("hidden");
  // }
  Array.from(extendedOptions).forEach((option) =>
    option.classList.toggle("hidden")
  );
}

// FUNCTION TOGGLE FAVORITE +
function toggleFavorite(car, sign) {
  if (car.isFavorite) {
    car.isFavorite = false;
    sign.src = "./assets/images/sign-heart-simple.png";
  } else {
    car.isFavorite = true;
    sign.src = "./assets/images/sign-heart-red.png";
  }
}

// FUNCTION CHECK MIN MAX FIELDS +
function checkMinMaxFields() {
  for (let field of minMaxFields) {
    let min = +field[0].value;
    let max = +field[1].value;
    if (min && max && min > max) {
      alert(`Min values can't be set higher than Max values`);
      return false;
    }
  }
  return true;
}

// FUNCTION GET OPTIONS +
function getOptions(array, type) {
  let allOptions = new Set();
  for (let car of array) {
    const option = car[type];
    allOptions.add(option);
  }
  allOptions = Array.from(allOptions).sort();
  return allOptions;
}

// FUNCTION SET OPTIONS +
function setOptions(options, select) {
  options.forEach((opt) => {
    const option = document.createElement("option");
    option.innerText = capitalize(opt);
    option.value = opt.toLowerCase();
    select.append(option);
  });
}

// FUNCTION GET AND SET OPTIONS
function getSetOptions() {
  options = [
    [allBrands, brand, "brand"],
    [allCities, city, "city"],
    [allColors, color, "color"],
    [allCurrencies, currency, "currency"],
    [allBodies, body, "body"],
    [allFuelTypes, fuel, "fuel"],
    [allDriveTypes, drive, "drive"],
    [allGearTypes, gear, "gear"],
  ];

  options.forEach((option) => {
    option[0] = getOptions(cars, option[2]);
    setOptions(option[0], option[1]);
  });
}

// FUNCTION SET MODEL CHOICE +
function setModelChoice(brandSelect, modelSelect) {
  modelSelect.setAttribute("disabled", "true");
  modelSelect.innerHTML = "";
  const option = document.createElement("option");
  option.innerText = brandSelect == brand ? "All models" : "Select car model";
  option.value = "all";
  option.selected = "true";
  modelSelect.append(option);

  if (brandSelect.value != "all") {
    modelSelect.removeAttribute("disabled");
    let models = new Set();
    for (let car of cars) {
      if (car.brand.toLowerCase() == brandSelect.value) models.add(car.model);
    }
    models = Array.from(models).sort();

    for (let carModel of models) {
      const option = document.createElement("option");
      option.value = carModel;
      option.innerText = carModel;
      modelSelect.append(option);
    }
  }
}

// FUNCTION GET CHECKED CONDITION +
function getCheckedCondition() {
  for (let cond of conditions) {
    if (!cond.checked) {
      if (cond.classList.contains("main-element")) {
        cond.classList.remove("main-element");
        cond.removeAttribute("checked");
      }
    } else if (cond.checked) {
      if (!cond.classList.contains("main-element")) {
        cond.classList.add("main-element");
        cond.setAttribute("checked", "true");
      }
      condition = cond;
    }
  }
}

// FUNCTION SET CURRENCY CHOICE +
function setCurrChoice() {
  const firstCurrOption = currency.querySelector("option");
  if (
    (minPriceAm.value || maxPriceAm.value) &&
    firstCurrOption.value == "all"
  ) {
    firstCurrOption.remove(); // removing 'all models' option
    currency.querySelector("option").selected = "true";
  } else if (minPriceAm.value == "" && maxPriceAm.value == "") {
    const optionAllCurr = document.createElement("option");
    optionAllCurr.innerText = "All prices";
    optionAllCurr.value = "all";
    optionAllCurr.selected = "true";
    currency.prepend(optionAllCurr);
  }
}

// SET COLOR OPTIONS +
function setColorOptions() {
  const colorOptions = document
    .getElementById("color")
    .querySelectorAll("option");
  Array.from(colorOptions).forEach((option) => {
    if (option.value == "black" || option.value == "wet asphalt") {
      option.classList.add("white-text");
    } else option.style.color = "#000";
    option.style.backgroundColor = option.value;
    if (option.value == "wet asphalt")
      option.style.backgroundColor = "#22223f ";
  });
}

// FUNCTION CHECK SORTED TYPE +
function checkSortedType(direction) {
  const sortButtons = sortForm.getElementsByClassName("sort-button");
  Array.from(sortButtons).forEach((button) => {
    if (button.classList.contains("chosen-sort")) {
      let directText =
        direction == "ascending"
          ? "from lowest to highest"
          : "from highest to lowest";
      if (button.id == "sort-name" && direction == "ascending")
        directText = "from A to Z";
      if (button.id == "sort-name" && direction == "descending")
        directText = "from Z to A";
      button.title = `Cars are sorted by ${capitalize(
        button.dataset.sort
      )} ${directText}`;
    } else button.title = "";
  });
}

// FUNCTION SORT BY DATE +
function sortByDate(array, direction) {
  array.sort((a, b) => {
    if (direction == "ascending") {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
      sortDateBtn.innerHTML = "Report Date <small>(to lowest)</small>";
      sortDateType = "descending";
    } else if (direction == "descending") {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      sortDateBtn.innerHTML = "Report Date <small>(to highest)</small>";
      sortDateType = "ascending";
    }
  });
  sortDateBtn.className = "button sort-button chosen-sort";
  sortNameBtn.className =
    sortPriceBtn.className =
    sortYearBtn.className =
      "button sort-button";
  checkSortedType(direction);
  carsBlock.innerHTML = "";
  showCars(array, carsBlock);
}

// FUNCTION SORT BY NAME +
function sortByName(array, direction) {
  array.sort((a, b) => {
    if (direction == "ascending") {
      if (a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;
      if (a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;
      sortNameBtn.innerHTML = "Car Name <small>(Z-A)</small>";
      sortNameType = "descending";
    } else if (direction == "descending") {
      if (a.brand.toLowerCase() < b.brand.toLowerCase()) return 1;
      if (a.brand.toLowerCase() > b.brand.toLowerCase()) return -1;
      sortNameBtn.innerHTML = "Car Name <small>(A-Z)</small>";
      sortNameType = "ascending";
    }
  });
  sortNameBtn.className = "button sort-button chosen-sort";
  sortDateBtn.className =
    sortPriceBtn.className =
    sortYearBtn.className =
      "button sort-button";
  checkSortedType(direction);
  carsBlock.innerHTML = "";
  showCars(array, carsBlock);
}

// FUNCTION SORT BY PRICE +
function sortByPrice(array, direction) {
  let sign;
  array.sort((a, b) => {
    if (direction == "ascending") {
      sign = 1;
      sortPriceType = "descending";
      sortPriceBtn.innerHTML = "Car Price <small>(to lowest)</small>";
    } else if (direction == "descending") {
      sign = -1;
      sortPriceType = "ascending";
      sortPriceBtn.innerHTML = "Car Price <small>(to highest)</small>";
    }
    if (a.currency == "USD" && b.currency == "USD")
      return sign * (a.amount * convertUsdToAzn - b.amount * convertUsdToAzn);
    if (a.currency == "EUR" && b.currency == "EUR")
      return sign * (a.amount * convertEurToAzn - b.amount * convertEurToAzn);
    if (a.currency == "EUR" && b.currency == "USD")
      return sign * (a.amount * convertEurToAzn - b.amount * convertUsdToAzn);
    if (a.currency == "USD" && b.currency == "EUR")
      return sign * (a.amount * convertUsdToAzn - b.amount * convertEurToAzn);
    if (a.currency == "AZN" && b.currency == "USD")
      return sign * (a.amount - b.amount * convertUsdToAzn);
    if (a.currency == "AZN" && b.currency == "EUR")
      return sign * (a.amount - b.amount * convertEurToAzn);
    if (a.currency == "USD" && b.currency == "AZN")
      return sign * (a.amount * convertUsdToAzn - b.amount);
    if (a.currency == "EUR" && b.currency == "AZN")
      return sign * (a.amount * convertEurToAzn - b.amount);
    else return sign * (a.amount - b.amount);
  });
  sortPriceBtn.className = "button sort-button chosen-sort";
  sortDateBtn.className =
    sortNameBtn.className =
    sortYearBtn.className =
      "button sort-button";
  checkSortedType(direction);
  carsBlock.innerHTML = "";
  showCars(array, carsBlock);
}

// FUNCTION SORT BY YEAR +
function sortByYear(array, direction) {
  if (direction == "ascending") {
    array.sort((a, b) => a.year - b.year);
    sortYearType = "descending";
    sortYearBtn.innerHTML = "Car Year <small>(to lowest)</small>";
  } else if (direction == "descending") {
    array.sort((a, b) => b.year - a.year);
    sortYearType = "ascending";
    sortYearBtn.innerHTML = "Car Year <small>(to highest)</small>";
  }
  sortYearBtn.className = "button sort-button chosen-sort";
  sortDateBtn.className =
    sortNameBtn.className =
    sortPriceBtn.className =
      "button sort-button";
  checkSortedType(direction);
  carsBlock.innerHTML = "";
  showCars(array, carsBlock);
}

// FUNCTION NORMALIZE SORT BUTTONS
function normalizeSortButtons() {
  sortNameBtn.className =
    sortPriceBtn.className =
    sortYearBtn.className =
      "button sort-button";
}

// FUNCTION CAMEL CASE
function camelCase(name) {
  if (name.includes("-")) {
    name = name.split("-");
    name[1] = name[1].charAt(0).toUpperCase() + name[1].slice(1);
    name = name.join("");
  }
  return name;
}

// FUNCTION CAPITALIZE
function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// FUNCTION FILL TABLE DATAS
function fillTableDatas(car, tableDatas) {
  for (let td of tableDatas) {
    let tr = td.parentNode.dataset.type;
    tr = camelCase(tr);
    td.innerText = car[tr];
    if (td.innerText == "true") td.innerText = "Yes";
    else if (td.innerText == "false") td.innerText = "No";
  }
}

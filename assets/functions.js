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
  
  // FUNCTION CLOSE DISPLAY CAR BLOCK
  function closeDisplayCarBlock() {
    displayCarImage.innerHTML = "";
    displayCarImage.append(buyCarBtn);
    displayCarImage.append(closeCarBtn);
    displayCarBlock.classList.add("hidden");
    backdrop.classList.add("hidden");
  }
  
  // FUNCTION TOGGLE MORE OPTIONS +
  function toggleMoreOptions() {
    const extendedOptions = document.getElementsByClassName("extended-option");
    showMoreBtn.classList.toggle("active");
    if (showMoreBtn.classList.contains("active"))
      showMoreBtn.innerText = "Hide more search options";
    else {
      showMoreBtn.innerText = "Show more search options";
    }
    for (let option of extendedOptions) {
      option.classList.toggle("hidden");
    }
  }
  
  // FUNCTION TOGGLE FAVORITE +
  function toggleFavorite(car, sign) {
    console.log(car, sign);
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
  
  // FUNCTION GET BRANDS +
  function getBrands(array) {
    allBrands = new Set();
    for (let item of array) {
      const carName = item.brand;
      allBrands.add(carName);
    }
    allBrands = Array.from(allBrands).sort();
    for (let carName of allBrands) {
      const option = document.createElement("option");
      option.innerText = carName;
      option.value = carName.toLowerCase();
      brand.append(option);
    }
  }
  
  // FUNCTION SET MODEL CHOICE +
  function setModelChoice() {
    model.setAttribute("disabled", "true");
    model.innerHTML = "";
    const option = document.createElement("option");
    option.innerText = "All models";
    option.value = "all";
    option.selected = "true";
    model.append(option);
  
    if (brand.value != "all") {
      model.removeAttribute("disabled");
      let models = new Set();
      for (let car of cars) {
        if (car.brand.toLowerCase() == brand.value) models.add(car.model);
      }
      models = Array.from(models).sort();
  
      for (let carModel of models) {
        const option = document.createElement("option");
        option.value = carModel;
        option.innerText = carModel;
        model.append(option);
      }
    }
  }
  
  // FUNCTION GET CHECKED CONDITION +
  function getCheckedCondition() {
    for (let cond of conditions) {
      if (!cond.checked) {
        // console.log("Un-Checked condition", cond);
        if (cond.classList.contains("main-element")) {
          cond.classList.remove("main-element");
          cond.removeAttribute("checked");
        }
      } else if (cond.checked) {
        // console.log("Checked condition", cond);
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
      // applied for 'wet asphalt' color only / because this color does not have according 'text' value
      if (option.value == "wet asphalt")
        option.style.backgroundColor = "#22223f ";
    });
  }
  
  // FUNCTION SORT BY DATE +
  function sortByDate(array, direction) {
    debugger;
    array.sort((a, b) => {
      if (direction == "ascending") {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        sortDateBtn.innerText = "Report Date (to oldest)";
        sortDateType = "descending";
      } else if (direction == "descending") {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        sortDateBtn.innerText = "Report Date (to newest)";
        sortDateType = "ascending";
      }
    });
    sortDateBtn.className = "button sort-button chosen-sort";
    sortNameBtn.className =
      sortPriceBtn.className =
      sortYearBtn.className =
        "button sort-button";
    carsBlock.innerHTML = "";
    showCars(array, carsBlock);
  }
  
  // FUNCTION SORT BY NAME +
  function sortByName(array, direction) {
    array.sort((a, b) => {
      if (direction == "ascending") {
        if (a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;
        if (a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;
        sortNameBtn.innerText = "Car Model (Z-A)";
        sortNameType = "descending";
      } else if (direction == "descending") {
        if (a.brand.toLowerCase() < b.brand.toLowerCase()) return 1;
        if (a.brand.toLowerCase() > b.brand.toLowerCase()) return -1;
        sortNameBtn.innerText = "Car Model (A-Z)";
        sortNameType = "ascending";
      }
    });
    sortNameBtn.className = "button sort-button chosen-sort";
    sortDateBtn.className =
      sortPriceBtn.className =
      sortYearBtn.className =
        "button sort-button";
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
        sortPriceBtn.innerText = "Car Price (to lowest)";
      } else if (direction == "descending") {
        sign = -1;
        sortPriceType = "ascending";
        sortPriceBtn.innerText = "Car Price (to highest)";
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
    carsBlock.innerHTML = "";
    showCars(array, carsBlock);
  }
  
  // FUNCTION SORT BY YEAR +
  function sortByYear(array, direction) {
    if (direction == "ascending") {
      array.sort((a, b) => a.year - b.year);
      sortYearType = "descending";
      sortYearBtn.innerText = "Car Year (to lowest)";
    } else if (direction == "descending") {
      array.sort((a, b) => b.year - a.year);
      sortYearType = "ascending";
      sortYearBtn.innerText = "Car Year (to highest)";
    }
    sortYearBtn.className = "button sort-button chosen-sort";
    sortDateBtn.className =
      sortNameBtn.className =
      sortPriceBtn.className =
        "button sort-button";
    carsBlock.innerHTML = "";
    showCars(array, carsBlock);
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
  
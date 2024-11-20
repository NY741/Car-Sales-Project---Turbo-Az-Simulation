launchApp();

// EVENT LISTENERS
addCarBtn.addEventListener("click", popUpAddCarForm);
closeAddBlockBtn.addEventListener("click", closeAddBlock);
addFormSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const addBrand = document.getElementById("add-brand");
  const addModel = document.getElementById("add-model");
  const addColor = document.getElementById("add-color");
  const addYear = document.getElementById("add-year");
  const addMileage = document.getElementById("add-mileage");
  const addBody = document.getElementById("add-body");
  const addAmount = document.getElementById("add-amount");
  const addCurrency = document.getElementById("add-currency");
  const addEngineVolume = document.getElementById("add-engine-volume");
  const addHorsePower = document.getElementById("add-horse-power");
  const addFuel = document.getElementById("add-fuel");
  const addGearType = document.getElementById("add-gear-type");
  const addDrive = document.getElementById("add-drive");
  const addSeatNum = document.getElementById("add-seat-num");
  const addOwner = document.getElementById("add-owner");
  const addCity = document.getElementById("add-city");
  const addMobileNumber = document.getElementById("add-mobile-number");
  const addIsNew = document.getElementById("add-is-new");
  const addIsBarter = document.getElementById("add-is-barter");
  const addIsCrashed = document.getElementById("add-is-crashed");
  const addIsCredit = document.getElementById("add-is-credit");
  const addIsPremium = document.getElementById("add-is-premium");
  const addImage = document.getElementById("add-image");
  addCar(
    addBrand.value,
    addModel.value,
    addColor.value,
    addYear.value,
    addMileage.value,
    addBody.value,
    addAmount.value,
    addCurrency.value,
    addEngineVolume.value,
    addHorsePower.value,
    addFuel.value,
    addGearType.value,
    addDrive.value,
    addSeatNum.value,
    addOwner.value,
    addCity.value,
    addMobileNumber.value,
    addIsNew.checked,
    addIsBarter.checked,
    addIsCrashed.checked,
    addIsCredit.checked,
    addIsPremium.checked,
    addImage.value
  );
});
displayCarCloseBtn.addEventListener("click", closeDisplayCarBlock);
closeCarBtn.addEventListener("click", closeDisplayCarBlock);
brand.addEventListener("change", setModelChoice);
minPriceAm.addEventListener("change", setCurrChoice);
maxPriceAm.addEventListener("change", setCurrChoice);
showMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  toggleMoreOptions();
});
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!checkMinMaxFields()) {
    return;
  }
  searchCars(
    brand.value,
    model.value,
    condition.value,
    city.value,
    minPriceAm.value,
    maxPriceAm.value,
    currency.value,
    saleType.value,
    body.value,
    minYear.value,
    maxYear.value,
    color.value,
    fuel.value,
    drive.value,
    gearType.value,
    minEngineVolume.value / 1000,
    maxEngineVolume.value / 1000,
    minHorsePower.value,
    maxHorsePower.value,
    minMileage.value,
    maxMileage.value
  );
});
sortDateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sortByDate(sortedCars, sortDateType);
});
sortNameBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sortByName(sortedCars, sortNameType);
});
sortPriceBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sortByPrice(sortedCars, sortPriceType);
});
sortYearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sortByYear(sortedCars, sortYearType);
});
for (let cond of conditions) {
  cond.addEventListener("change", getCheckedCondition);
}

// FUNCTION ADD CAR
function addCar(
  addBrand,
  addModel,
  addColor,
  addYear,
  addMileage,
  addBody,
  addAmount,
  addCurrency,
  addEngineVolume,
  addHorsePower,
  addFuel,
  addGearType,
  addDrive,
  addSeatNum,
  addOwner,
  addCity,
  addMobileNumber,
  addIsNew,
  addIsBarter,
  addIsCrashed,
  addIsCredit,
  addIsPremium,
  addImage
) {
  const date = new Date();
  let year = date.getFullYear();
  let month = +date.getMonth() + 1;
  let day = +date.getDate();
  if (month.toString().length == 1) month = "0" + month;
  if (day.toString().length == 1) day = "0" + day;
  const addDate = `${year}-${month}-${day} `;
  const newCar = new Car(
    capitalize(addBrand),
    capitalize(addModel),
    addColor,
    +addYear,
    +addMileage,
    addBody,
    +addAmount,
    addCurrency,
    +addEngineVolume / 1000,
    +addHorsePower,
    addFuel,
    addGearType,
    addDrive,
    +addSeatNum,
    addDate,
    capitalize(addOwner),
    capitalize(addCity),
    addMobileNumber,
    addIsNew,
    addIsBarter,
    addIsCrashed,
    addIsCredit,
    addIsPremium,
    false,
    "./assets/images/mercedes_c250.jpg"
  );

  console.dir(addImage);
  cars.push(newCar);
  carsBlock.innerHTML = "";
  premiumCarsBlock.innerHTML = "";
  showCars(cars, carsBlock);
  showCars(cars, premiumCarsBlock);
  closeAddBlock();
}

// FUNCTION SEARCH CARS
function searchCars(
  brand,
  model,
  condition,
  city,
  minPriceAm,
  maxPriceAm,
  currency,
  sale,
  body,
  minYear,
  maxYear,
  color,
  fuel,
  drive,
  gearType,
  minEngineVolume,
  maxEngineVolume,
  minHorsePower,
  maxHorsePower,
  minMileage,
  maxMileage
) {
  // sortDateBtn.className =
  sortNameBtn.className =
    sortPriceBtn.className =
    sortYearBtn.className =
      "button sort-button";
  sortedCars = cars;
  const mainElements = document.querySelectorAll("#search-form .main-element");
  // Sort only favorites
  if (favorite.checked) sortedCars = sortedCars.filter((car) => car.isFavorite);
  // Sort only not crashed
  if (notCrashed.checked)
    sortedCars = sortedCars.filter((car) => !car.isCrashed);
  for (let element of mainElements) {
    let name = element.name;
    let value = element.value;
    name = camelCase(name);
    if (name == "seatNum" && value == "") value = "all";
    if (value !== "all") {
      sortedCars = sortedCars.filter((car) => {
        if (name == "favorite") return car.isFavorite; // favorite
        if (name == "condition") {
          // condition
          if (value == "new") return car.isNew;
          if (value == "old") return !car.isNew;
        }
        if (name == "sale") {
          // sale
          if (value == "barter") return car.isBarter;
          if (value == "credit") return car.isCredit;
        }
        if (name == "currency") {
          // currency
          let minAmount = +minPriceAm;
          let maxAmount = +maxPriceAm;
          if (minPriceAm == "") minAmount = 0;
          if (maxPriceAm == "") maxAmount = Infinity;
          if (conversion.checked) {
            if (currency == "AZN") {
              if (car.currency == "USD") {
                minAmount /= convertUsdToAzn;
                maxAmount /= convertUsdToAzn;
              }
              if (car.currency == "EUR") {
                minAmount /= convertEurToAzn;
                maxAmount /= convertEurToAzn;
              }
            } else if (currency == "EUR") {
              if (car.currency == "USD") {
                minAmount = (minAmount / convertUsdToAzn) * convertEurToAzn;
                maxAmount = (maxAmount / convertUsdToAzn) * convertEurToAzn;
              }
              if (car.currency == "AZN") {
                minAmount = minAmount * convertEurToAzn;
                maxAmount = maxAmount * convertEurToAzn;
              }
            } else if (currency == "USD") {
              if (car.currency == "EUR") {
                minAmount = (minAmount / convertUsdToAzn) * convertEurToAzn;
                maxAmount = (maxAmount / convertUsdToAzn) * convertEurToAzn;
              }
              if (car.currency == "AZN") {
                minAmount = minAmount * convertUsdToAzn;
                maxAmount = maxAmount * convertUsdToAzn;
              }
            }
            return car.amount >= minAmount && car.amount <= maxAmount;
          }
          return (
            car.currency == value &&
            car.amount >= minAmount &&
            car.amount <= maxAmount
          );
        }

        if (!isNaN(car[name])) return car[name] == value;
        else return car[name].toLowerCase() == value.toLowerCase();
      });
    }
  }

  // for (let i = 0; i < minMaxFields.length; i++) {
  //   if (i === 0) continue;
  //   if (!minMaxFields[i][0].value) minMaxFields[i][0] = 0;
  //   if (!minMaxFields[i][1].value) minMaxFields[i][1] = Infinity;
  //   sortedCars = sortedCars.filter((car) => {
  //     console.log(car[triggers[i]]);
  //     return (
  //       car[triggers[i]] >= +minMaxFields[i][0] &&
  //       car[triggers[i]] <= +minMaxFields[i][1]
  //     );
  //   });
  // }

  // Sort between Min Year and Max Year
  sortedCars = sortedCars.filter((car) => {
    if (minYear == "") minYear = 0;
    if (maxYear == "") maxYear = Infinity;
    return car.year >= +minYear && car.year <= +maxYear;
  });
  // Sort between Min Engine Volume and Max Engine Volume
  sortedCars = sortedCars.filter((car) => {
    if (minEngineVolume == "") minEngineVolume = 0;
    if (maxEngineVolume == "") maxEngineVolume = Infinity;
    return (
      car.engineVolume >= +minEngineVolume &&
      car.engineVolume <= +maxEngineVolume
    );
  });
  // Sort between Min Horse Power and Max Horse Power
  sortedCars = sortedCars.filter((car) => {
    if (minHorsePower == "") minHorsePower = 0;
    if (maxHorsePower == "") maxHorsePower = Infinity;
    return car.horsePower >= +minHorsePower && car.horsePower <= +maxHorsePower;
  });
  // Sort between Min Mileage and Max Mileage
  sortedCars = sortedCars.filter((car) => {
    if (minMileage == "") minMileage = 0;
    if (maxMileage == "") maxMileage = Infinity;
    return car.mileage >= +minMileage && car.mileage <= +maxMileage;
  });

  carsBlock.innerHTML = "";
  showCars(sortedCars, carsBlock);
}

// FUNCTION SHOW CARS
function showCars(cars, block) {
  if (block == premiumCarsBlock)
    cars = cars.filter((car) => {
      return car.isPremium;
    });

  //   if (isInitialRendering) { // change this code !!!
  //     sortByDate(sortedCars, "ascending");
  //     isInitialRendering = false;
  //   }

  for (let car of cars) {
    // Image Part
    const link = document.createElement("a");
    link.className = "main__car-link";
    link.title = car.id;
    link.href = "#"; // required to change link address in the future
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
      console;
      favoriteSign.src = "./assets/images/sign-heart-red.png";
      favoriteSign.alt = "Favoritlərdən çıxart";
    } else {
      favoriteSign.src = "./assets/images/sign-heart-simple.png";
      favoriteSign.alt = "Elanı favorit et";
    }
    carBlock.append(favoriteSign);
    if (car.isNew) {
      const newSign = document.createElement("img");
      newSign.className = "main__new-sign sign";
      newSign.src = "./assets/images/sign-new.png";
      newSign.alt = "Avtomobil yenidir";
      carBlock.append(newSign);
    }
    if (car.isPremium) {
      const premiumSign = document.createElement("img");
      premiumSign.className = "main__crown-sign sign";
      premiumSign.src = "./assets/images/sign-crown.png";
      premiumSign.alt = "Premium (VIP) elandır";
      carBlock.append(premiumSign);
    }
    if (car.isBarter) {
      const barterSign = document.createElement("img");
      barterSign.className = "main__barter-sign sign";
      barterSign.src = "./assets/images/sign-refresh.png";
      barterSign.alt = "Avtomobili barter etmək mümkündür";
      carBlock.append(barterSign);
    }
    if (car.isCredit) {
      const creditSign = document.createElement("img");
      creditSign.className = "main__credit-sign sign";
      creditSign.src = "./assets/images/sign-credit.png";
      creditSign.alt = "Avtomobili kredit ilə almaq mümkündür";
      carBlock.append(creditSign);
    }
    link.append(carBlock);
    block.append(link);
    favoriteSign.addEventListener("click", function (e) {
      e.preventDefault();
      toggleFavorite(car, this);
      favorites.push(car);
    });

    link.addEventListener("click", function (e) {
      e.preventDefault();
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

      if (car) return;
    });
  }

  const cards = document.querySelectorAll(".main__car-link");

  // addCarsDisplayFunction(cars);
  // for (let card of cards) {
  //   const cardDesc = card.querySelector(".main__description");
  //   cardDesc.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     displayCarBlock.classList.remove("hidden");
  //     backdrop.classList.remove("hidden");
  //     const id = card.title;
  //     const chosenCar = cars.find((car) => car.id == id);

  //     buyCarBtn.addEventListener("click", function (e) {
  //       e.preventDefault();
  //       buyCar(id);
  //     });

  //     console.log(chosenCar);
  //     displayCarTitle.innerText =
  //       chosenCar.brand +
  //       " " +
  //       chosenCar.model +
  //       ", " +
  //       chosenCar.year +
  //       ", " +
  //       chosenCar.engineVolume +
  //       " L, " +
  //       chosenCar.horsePower +
  //       " HP, " +
  //       chosenCar.mileage +
  //       " KM";
  //     const carImage = document.createElement("img");
  //     carImage.src = chosenCar.imageLink;
  //     carImage.alt = chosenCar.brand + " " + chosenCar.model;
  //     displayCarImage.prepend(carImage);

  //     const firstTableDatas = displayCarTable1.querySelectorAll(
  //       "tr > td:nth-of-type(2)"
  //     );
  //     const secondTableDatas = displayCarTable2.querySelectorAll(
  //       "tr > td:nth-of-type(2)"
  //     );

  //     fillTableDatas(firstTableDatas);
  //     fillTableDatas(secondTableDatas);

  //     if (chosenCar) return;

  // //     // FUNCTION FILL TABLE DATAS
  //     function fillTableDatas(tableDatas) {
  //       for (let td of tableDatas) {
  //         let tr = td.parentNode.dataset.type;
  //         tr = camelCase(tr);
  //         td.innerText = chosenCar[tr];
  //         if (td.innerText == "true") td.innerText = "Yes";
  //         else if (td.innerText == "false") td.innerText = "No";
  //       }
  //     }

  //     // FUNCTION BUY CAR - CHANGE THIS CODE !!!
  //     function buyCar(id) {
  //       const boughtCar = cars.find((car) => car.id == id);
  //       boughtCar.isSold = true;
  //       closeDisplayCarBlock();

  //       // premiumCarsBlock.innerHTML = "";
  //       carsBlock.innerHTML = "";
  //       // showCars(cars, premiumCarsBlock);
  //       showCars(cars, carsBlock);
  //     }
  //   });
  // }
}

// FUNCTION DISPLAY CAR REPORT
// function addCarsDisplayFunction(cars) {
//   for (let car of cars) {
//     const cardDesc = card.querySelector(".main__description");
//     cardDesc.addEventListener("click", function (e) {
//       e.preventDefault();
//       displayCarBlock.classList.remove("hidden");
//       backdrop.classList.remove("hidden");
//       const id = card.title;
//       const chosenCar = cars.find((car) => car.id == id);

//       buyCarBtn.addEventListener("click", function (e) {
//         e.preventDefault();
//         buyCar(id);
//       });
//     });
//   }
// }

// FUNCTION LAUNCH APP
function launchApp() {
  setColorOptions();
  getBrands(cars);
  showCars(cars, carsBlock);
  showCars(cars, premiumCarsBlock);
}

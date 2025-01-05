launchApp();

// EVENT LISTENERS
addCarBtn.addEventListener("click", popUpAddCarForm);
closeAddBlockBtn.addEventListener("click", closeAddBlock);
document
  .getElementById("add-car__form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    addCar(this);
  });
displayCarCloseBtn.addEventListener("click", closeDisplayCarBlock);
closeCarBtn.addEventListener("click", closeDisplayCarBlock);
// brand.addEventListener("change", setModelChoice);
brand.addEventListener("change", function (e) {
  e.preventDefault();
  setModelChoice(this, model);
});
addBrand.addEventListener("change", function (e) {
  e.preventDefault();
  setModelChoice(this, addModel);
});

minPriceAm.addEventListener("input", setCurrChoice);
maxPriceAm.addEventListener("input", setCurrChoice);
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
    gear.value,
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
function addCar(addForm) {
  const date = new Date();
  let year = date.getFullYear();
  let month = +date.getMonth() + 1;
  let day = +date.getDate();
  if (month.toString().length == 1) month = "0" + month;
  if (day.toString().length == 1) day = "0" + day;
  const addDate = `${year}-${month}-${day} `;

  let reader = new FileReader();
  reader.addEventListener("load", () => {
    console.log(reader.result);
    addImgDisplay.src = reader.result;
    addImgDisplay.classList.remove("hidden");
    const newCar = new Car({
      brand: capitalize(addForm.brand.value),
      model: capitalize(addForm.model.value),
      color: addForm.color.value,
      year: +addForm.year.value,
      mileage: +addForm.mileage.value,
      body: addForm.body.value,
      amount: +addForm.amount.value,
      currency: addForm.currency.value,
      engineVolume: addForm["engine-volume"].value / 1000,
      horsePower: +addForm["horse-power"].value,
      fuel: addForm.fuel.value,
      gear: addForm.gear.value,
      drive: addForm.drive.value,
      seatNum: +addForm["seat-num"].value,
      date: addDate,
      owner: capitalize(addForm.owner.value),
      city: capitalize(addForm.city.value),
      phone: addForm.phone.value,
      isNew: addForm["is-new"].checked,
      isBarter: addForm["is-barter"].checked,
      isCrashed: addForm["is-crashed"].checked,
      isCredit: addForm["is-credit"].checked,
      isPremium: addForm["is-premium"].checked,
      imageLink: reader.result,
    });

    cars.push(newCar);
    carsBlock.innerHTML = "";
    premiumCarsBlock.innerHTML = "";
    showCars(cars, carsBlock);
    showCars(cars, premiumCarsBlock);
    closeAddBlock();
    addImgDisplay.classList.add("hidden");
  });
  reader.readAsDataURL(addForm.image.files[0]);
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
  gear,
  minEngineVolume,
  maxEngineVolume,
  minHorsePower,
  maxHorsePower,
  minMileage,
  maxMileage
) {
  normalizeSortButtons();
  sortedCars = cars;
  const mainElements = document.querySelectorAll("#search-form .main-element");
  if (favorite.checked) sortedCars = sortedCars.filter((car) => car.isFavorite);
  if (notCrashed.checked)
    sortedCars = sortedCars.filter((car) => !car.isCrashed);
  // console.log(mainElements);

  for (let element of mainElements) {
    let name = element.name;
    let value = element.value;

    name = camelCase(name);

    if (name == "seatNum" && value == "") value = "all";

    if (value !== "all") {
      sortedCars = sortedCars.filter((car) => {
        // if (name == "favorite") return car.isFavorite; // favorite
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
          console.log(minAmount);
          console.log(maxAmount);
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
            }
            if (currency == "EUR") {
              if (car.currency == "USD") {
                minAmount = (minAmount / convertUsdToAzn) * convertEurToAzn;
                maxAmount = (maxAmount / convertUsdToAzn) * convertEurToAzn;
              }
              if (car.currency == "AZN") {
                minAmount = minAmount * convertEurToAzn;
                maxAmount = maxAmount * convertEurToAzn;
              }
            }
            if (currency == "USD") {
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
  //   sortedCars = sortedCars.filter((car) => {
  //     let minField = minMaxFields[i][0].value;
  //     let maxField = minMaxFields[i][1].value;
  //     console.log(minField);
  //     console.log(maxField);
  //     if (!minField) minField == 0;
  //     if (!maxField) maxField == Infinity;
  //     return (
  //       car[`${minMaxTypes[i]}`] >= minField &&
  //       car[`${minMaxTypes[i]}`] >= maxField
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

  for (let car of cars) {
    prepareCar(car, block);
  }
}

// FUNCTION LAUNCH APP
function launchApp() {
  getSetOptions();
  setColorOptions();
  showCars(cars, carsBlock);
  showCars(cars, premiumCarsBlock);
  setTimeout(() => {
    sortByDate(sortedCars, "descending");
    isInitialRendering = false;
  }, 2000);
}

// brand,
// model,
// color,
// year,
// mileage,
// body,
// amount,
// currency,
// engineVolume,
// horsePower,
// fuel,
// gearType,
// drive,
// seatNum,
// date,
// owner,
// city,
// mobileNumber,
// isNew,
// isBarter,
// isCrashed,
// isCredit,
// isPremium,
// isSold,
// imageLink,
// id

// this.brand = brand;
// this.model = model;
// this.color = color;
// this.year = year;
// this.mileage = mileage;
// this.body = body;
// this.amount = amount;
// this.currency = currency;
// this.engineVolume = engineVolume;
// this.horsePower = horsePower;
// this.fuel = fuel;
// this.gearType = gearType;
// this.drive = drive;
// this.seatNum = seatNum;
// this.date = date;
// this.owner = owner;
// this.city = city;
// this.mobileNumber = mobileNumber;
// this.isNew = isNew;
// this.isBarter = isBarter;
// this.isCrashed = isCrashed;
// this.isCredit = isCredit;
// this.isPremium = isPremium;
// this.isSold = isSold;
// this.imageLink = imageLink;
// this.id = id;

// addBrand.value,
// addModel.value,
// addColor.value,
// addYear.value,
// addMileage.value,
// addBody.value,
// addAmount.value,
// addCurrency.value,
// addEngineVolume.value,
// addHorsePower.value,
// addFuel.value,
// addGearType.value,
// addDrive.value,
// addSeatNum.value,
// addOwner.value,
// addCity.value,
// addMobileNumber.value,
// addIsNew.checked,
// addIsBarter.checked,
// addIsCrashed.checked,
// addIsCredit.checked,
// addIsPremium.checked,
// addImage.value
// );

// const addBrand = document.getElementById("add-brand");
// const addModel = document.getElementById("add-model");
// const addColor = document.getElementById("add-color");
// const addYear = document.getElementById("add-year");
// const addMileage = document.getElementById("add-mileage");
// const addBody = document.getElementById("add-body");
// const addAmount = document.getElementById("add-amount");
// const addCurrency = document.getElementById("add-currency");
// const addEngineVolume = document.getElementById("add-engine-volume");
// const addHorsePower = document.getElementById("add-horse-power");
// const addFuel = document.getElementById("add-fuel");
// const addGearType = document.getElementById("add-gear-type");
// const addDrive = document.getElementById("add-drive");
// const addSeatNum = document.getElementById("add-seat-num");
// const addOwner = document.getElementById("add-owner");
// const addCity = document.getElementById("add-city");
// const addMobileNumber = document.getElementById("add-mobile-number");
// const addIsNew = document.getElementById("add-is-new");
// const addIsBarter = document.getElementById("add-is-barter");
// const addIsCrashed = document.getElementById("add-is-crashed");
// const addIsCredit = document.getElementById("add-is-credit");
// const addIsPremium = document.getElementById("add-is-premium");
// const addImage = document.getElementById("add-image");

// // FUNCTION GET BRANDS +
// function getBrands(array) {
//   allBrands = new Set();
//   for (let item of array) {
//     const carName = item.brand;
//     allBrands.add(carName);
//   }
//   allBrands = Array.from(allBrands).sort();
//   for (let carName of allBrands) {
//     const option = document.createElement("option");
//     option.innerText = carName;
//     option.value = carName.toLowerCase();
//     brand.append(option);
//   }
// }

// let allCities = ['Baku', 'Ganja', 'Sumqayit', 'Mingachevir', 'Shaki'];
// let allCurrencies = ['AZN', 'EUR', 'USD']
// let allBodies = ["cabriolet", "coupe", "hatchback", "liftback", "limousine", "pickup", "roadster", "sedan", "suv", "sportscar", "universal"]

// "all">All bodies</option>
// "cabriolet">Cabriolet</option>
// "coupe">Coupe</option>
// "hatchback">Hatchback</option>
// "liftback">Liftback</option>
// "limousine">Limousine</option>
// "pickup">Pickup</option>
// "roadster">Roadster</option>
// "sedan">Sedan</option>
// "suv">SUV</option>
// "sportscar">Sportscar</option>
// "universal">Universal</option>

// const arrCars:string[] = ['Bmv','mirs']

// arrCars.push(3)

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

// // FUNCTION ADD BADGE
// function addBadge(car, carBlock) {
//   if (car.isNew) addNewBadge(car, carBlock);
//   if (car.isBarter) addBarterBadge(car, carBlock);
//   if (car.isCredit) addCreditBadge(car, carBlock);
//   if (car.isPremium) addPremiumBadge(car, carBlock);
// }

// if (car.isNew) addNewBadge(car, carBlock);
// if (car.isBarter) addBarterBadge(car, carBlock);
// if (car.isCredit) addCreditBadge(car, carBlock);
// if (car.isPremium) addPremiumBadge(car, carBlock);

// // FUNCTION ADD NEW BADGE
// function addNewBadge(car, carBlock) {
//   if (car.isNew) {
//     const newSign = document.createElement("img");
//     newSign.className = "main__new-sign sign";
//     newSign.src = "./assets/images/sign-new.png";
//     newSign.alt = "Avtomobil yenidir";
//     carBlock.append(newSign);
//   }
// }

// // FUNCTION ADD BARTER BADGE
// function addBarterBadge(car, carBlock) {
//   if (car.isBarter) {
//     const barterSign = document.createElement("img");
//     barterSign.className = "main__barter-sign sign";
//     barterSign.src = "./assets/images/sign-refresh.png";
//     barterSign.alt = "Avtomobili barter etmək mümkündür";
//     carBlock.append(barterSign);
//   }
// }

// // FUNCTION ADD CREDIT BADGE
// function addCreditBadge(car, carBlock) {
//   if (car.isCredit) {
//     const creditSign = document.createElement("img");
//     creditSign.className = "main__credit-sign sign";
//     creditSign.src = "./assets/images/sign-credit.png";
//     creditSign.alt = "Avtomobili kredit ilə almaq mümkündür";
//     carBlock.append(creditSign);
//   }
// }

// // FUNCTION ADD PREMIUM BADGE
// function addPremiumBadge(car, carBlock) {
//   if (car.isPremium) {
//     const premiumSign = document.createElement("img");
//     premiumSign.className = "main__crown-sign sign";
//     premiumSign.src = "./assets/images/sign-crown.png";
//     premiumSign.alt = "Premium (VIP) elandır";
//     carBlock.append(premiumSign);
//   }
// }

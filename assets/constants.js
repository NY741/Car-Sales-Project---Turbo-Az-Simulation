// Block and Button Elements
const backdrop = document.querySelector(".backdrop");
const addCarBtn = document.getElementById("add-car-button");
const closeAddBlockBtn = document.querySelector(".add-car__close");
const carsBlock = document.querySelector(".main__cars");
const premiumCarsBlock = document.querySelector(".main__premium-cars");
const addBlock = document.querySelector(".add-car");
const addForm = document.getElementById("add-car__form");
const displayCarBlock = document.querySelector(".display-car");
const displayCarTitle = displayCarBlock.querySelector(".display-car__title");
const displayCarContainer = displayCarBlock.querySelector(
  ".display-car__container"
);
const displayCarImage = displayCarContainer.querySelector(
  ".display-car__image"
);
const displayCarTable1 = displayCarContainer.querySelector(
  ".display-car__table.first-table"
);
const displayCarTable2 = displayCarContainer.querySelector(
  ".display-car__table.second-table"
);
const displayCarCloseBtn = displayCarBlock.querySelector(".display-car__close");
const buyCarBtn = document.getElementById("display-car__buy-button");
const closeCarBtn = document.getElementById("display-car__close-button");
const searchForm = document.getElementById("search-form");
const searchFormSubmitBtn = document.getElementById("search-form__submit");
const showMoreBtn = document.getElementById("extended-search");

// Search Form Elements - Single
const brand = document.getElementById("brand");
const model = document.getElementById("model");
const city = document.getElementById("city");
const currency = document.getElementById("currency");
const conversion = document.getElementById("conversion");
const saleType = document.getElementById("sale");
const body = document.getElementById("body");
const fuel = document.getElementById("fuel");
const drive = document.getElementById("drive");
const gear = document.getElementById("gear");
const color = document.getElementById("color");

// Search Form Elements - Double (Min and Max)
const triggers = ["amount", "year", "engineVolume", "horsePower", "mileage"];
const minPriceAm = document.getElementById("price-min");
const maxPriceAm = document.getElementById("price-max");
const minYear = document.getElementById("year-min");
const maxYear = document.getElementById("year-max");
const minEngineVolume = document.getElementById("engine-volume-min");
const maxEngineVolume = document.getElementById("engine-volume-max");
const minHorsePower = document.getElementById("horse-power-min");
const maxHorsePower = document.getElementById("horse-power-max");
const minMileage = document.getElementById("mileage-min");
const maxMileage = document.getElementById("mileage-max");
const seatNum = document.getElementById("seat-num");
const minMaxFields = [
  [minPriceAm, maxPriceAm],
  [minYear, maxYear],
  [minEngineVolume, maxEngineVolume],
  [minHorsePower, maxHorsePower],
  [minMileage, maxMileage],
];

// Search Form Elements - Checkbox and Radio Buttons
const notCrashed = document.getElementById("not-crashed");
const favorite = document.getElementById("favorite");
const conditions = document.getElementsByName("condition");
let condition = conditions[0];
condition.setAttribute("checked", "true");

// Sort Constants and Variables
const sortForm = document.getElementById("sort-form");
const sortDateBtn = document.getElementById("sort-date");
const sortNameBtn = document.getElementById("sort-name");
const sortPriceBtn = document.getElementById("sort-price");
const sortYearBtn = document.getElementById("sort-year");
let sortDateType = "ascending";
let sortNameType = "ascending";
let sortPriceType = "ascending";
let sortYearType = "ascending";
let sortedCars = cars;

// Variables for Options
let allBrands;
let allCities;
let allColors;
let allCurrencies;
let allBodies;
let allFuelTypes;
let allDriveTypes;
let allGearTypes;

// Other Variables
let favorites = [];
let convertUsdToAzn = 1.7;
let convertEurToAzn = 1.85;
let isInitialRendering = true;

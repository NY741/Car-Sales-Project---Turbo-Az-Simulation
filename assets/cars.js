class Car {
  constructor(options) {
    for (let option in options) {
      if (this.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }
  }
  brand = null;
  model = null;
  color = null;
  year = null;
  mileage = null;
  body = null;
  amount = 0;
  currency = null;
  engineVolume = null;
  horsePower = null;
  fuel = null;
  gear = null;
  drive = null;
  seatNum = null;
  date = null;
  owner = null;
  city = null;
  phone = null;
  imageLink = null;
  id = null;
  isNew = false;
  isBarter = false;
  isCrashed = false;
  isCredit = false;
  isPremium = false;
  isSold = false;

  isFavorite = false;
}

const cars = [
  {
    brand: "Porsche",
    model: "Panamera GTS",
    color: "wet asphalt",
    year: 2016,
    mileage: 97000,
    body: "liftback",
    amount: 50000,
    currency: "USD",
    engineVolume: 4.8,
    horsePower: 440,
    fuel: "gas",
    gear: "auto",
    drive: "full",
    seatNum: 5,
    date: "2024-05-12",
    owner: "Ilkin",
    city: "Baku",
    phone: "994509049023",
    isNew: false,
    isBarter: true,
    isCrashed: false,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F05%2F25%2F23%2F22%2F35%2F1cca9c18-e36f-45cf-83ad-d2ce3f13beb7%2F64677_XEKjwmAveF1J7d42VxCbsw.jpg",
    id: "0000001",
  },
  {
    brand: "Hyndai",
    model: "Elantra",
    color: "white",
    year: 2018,
    mileage: 96000,
    body: "sedan",
    amount: 25700,
    currency: "AZN",
    engineVolume: 2.0,
    horsePower: 150,
    fuel: "gas",
    gear: "auto",
    drive: "front",
    seatNum: 5,
    date: "2024-08-18",
    owner: "Elchin",
    city: "Sumqayit",
    phone: "994509251593",
    isNew: false,
    isBarter: false,
    isCrashed: false,
    isCredit: true,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F08%2F13%2F15%2F23%2F39%2F74eb7300-b7a9-45ce-a715-f9fb93d73dca%2F26954_DWgEQQqRrb1W5yDQKFgsVA.jpg",
    id: "0000002",
  },
  {
    brand: "Mercedes",
    model: "E 300",
    color: "wet asphalt",
    year: 2019,
    mileage: 113000,
    body: "sedan",
    amount: 29900,
    currency: "USD",
    engineVolume: 2.0,
    horsePower: 245,
    fuel: "gas",
    gear: "auto",
    drive: "rear",
    seatNum: 5,
    date: "2024-08-24",
    owner: "Yusif",
    city: "Baku",
    phone: "994507895428",
    isNew: false,
    isBarter: true,
    isCrashed: false,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F08%2F21%2F20%2F37%2F09%2Fa9141001-356b-4368-aa5c-10ae820e0bf3%2F76402_Kt6M8xdUQ8mUvNPSzi54jw.jpg",
    id: "0000003",
  },
  {
    brand: "BMW",
    model: "328",
    color: "black",
    year: 2015,
    mileage: 167000,
    body: "sedan",
    amount: 32500,
    currency: "AZN",
    engineVolume: 2.0,
    horsePower: 245,
    fuel: "gas",
    gear: "auto",
    drive: "rear",
    seatNum: 5,
    date: "2024-05-07",
    owner: "Fazil",
    city: "Baku",
    phone: "994504565454",
    isNaN: false,
    isBarter: true,
    isCrashed: false,
    isCredit: true,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F08%2F15%2F17%2F28%2F06%2Ff1e25d60-c319-469e-a43c-a8a752741a7f%2F76402_Kt6M8xdUQ8mUvNPSzi54jw.jpg",
    id: "0000004",
  },
  {
    brand: "Mercedes",
    model: "S 500",
    color: "black",
    year: 2013,
    mileage: 190000,
    body: "sedan",
    amount: 40000,
    currency: "AZN",
    engineVolume: 4.7,
    horsePower: 435,
    fuel: "gas",
    gear: "auto",
    drive: "rear",
    seatNum: 5,
    date: "2024-06-11",
    owner: "Ramin",
    city: "Baku",
    phone: "994508765432",
    isNew: false,
    isBarter: true,
    isCrashed: true,
    isCredit: false,
    isPremium: true,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F01%2F06%2F01%2F18%2F39%2F55456803-56eb-43ab-b6b7-97ab98d0853d%2F3804_4lhcFSQv_RAJ5DwomJLJDg.jpg",
    id: "0000005",
  },
  {
    brand: "BMW",
    model: "430",
    color: "white",
    year: 2021,
    mileage: 21634,
    body: "sedan",
    amount: 38000,
    currency: "USD",
    engineVolume: 2.0,
    horsePower: 255,
    fuel: "gas",
    gear: "auto",
    drive: "rear",
    seatNum: 5,
    date: "2024-03-29",
    owner: "Serxan",
    city: "Baku",
    phone: "994508765432",
    isNew: true,
    isBarter: false,
    isCrashed: false,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F04%2F09%2F21%2F05%2F22%2Fd75265e5-cb43-4f0b-90c5-7eaab15c57b3%2F32444_OikwS_ZIYofkU92pw8zouQ.jpg",
    id: "0000006",
  },
  {
    brand: "Hyndai",
    model: "Santa Fe",
    color: "wet asphalt",
    year: 2015,
    mileage: 282456,
    body: "SUV",
    amount: 31300,
    currency: "AZN",
    engineVolume: 2.0,
    horsePower: 184,
    fuel: "gas",
    gear: "auto",
    drive: "front",
    seatNum: 5,
    date: "2024-02-22",
    owner: "Adil",
    city: "Ganja",
    phone: "994508765432",
    isNew: false,
    isBarter: false,
    isCrashed: true,
    isCredit: true,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F04%2F28%2F16%2F15%2F17%2F6f6382b4-2041-4060-8bb5-5b0b0b7f5516%2F84539__JfXMHDKCtuNHDGJDF_bDA.jpg",
    id: "0000007",
  },
  {
    brand: "Kia",
    model: "Optima",
    color: "blue",
    year: 2014,
    mileage: 163059,
    body: "sedan",
    amount: 22900,
    currency: "AZN",
    engineVolume: 2.0,
    horsePower: 274,
    fuel: "gas",
    gear: "auto",
    drive: "front",
    seatNum: 5,
    date: "2024-01-25",
    owner: "Nicat",
    city: "Baku",
    phone: "994508765432",
    isNaN: false,
    isBarter: true,
    isCrashed: false,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F07%2F10%2F15%2F37%2F23%2Fabb35595-b5b5-4e04-b27d-ba02411b1422%2F64677_XEKjwmAveF1J7d42VxCbsw.jpg",
    id: "0000008",
  },
  {
    brand: "Audi",
    model: "Q7",
    color: "black",
    year: 2014,
    mileage: 56123,
    body: "SUV",
    amount: 26900,
    currency: "USD",
    engineVolume: 3.0,
    horsePower: 333,
    fuel: "gas",
    gear: "auto",
    drive: "full",
    seatNum: 7,
    date: "2024-08-14",
    owner: "Asim",
    city: "Baku",
    phone: "994704955883",
    isNew: false,
    isBarter: true,
    isCrashed: false,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F07%2F29%2F09%2F30%2F09%2F28427b0c-4be4-4213-84ff-b2a010fe83c9%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg",
    id: "0000009",
  },
  {
    brand: "Mercedes",
    model: "C 250",
    color: "wet asphalt",
    year: 2012,
    mileage: 142000,
    body: "sedan",
    amount: 23200,
    currency: "AZN",
    engineVolume: 1.8,
    horsePower: 204,
    fuel: "gas",
    gear: "auto",
    drive: "rear",
    seatNum: 5,
    date: "2024-07-10",
    owner: "Nihad",
    city: "Baku",
    phone: "994508765432",
    isNew: false,
    isBarter: true,
    isCrashed: true,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/full/2024%2F06%2F25%2F15%2F52%2F59%2Fdc0a27c9-8e28-43d1-8783-c1e92ce5c388%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg",
    id: "0000010",
  },
  {
    brand: "Land Rover",
    model: "RR Sport",
    color: "grey",
    year: 2017,
    mileage: 41560,
    body: "SUV",
    amount: 38500,
    currency: "USD",
    engineVolume: 3.0,
    horsePower: 248,
    fuel: "diesel",
    gear: "auto",
    drive: "full",
    seatNum: 5,
    date: "2024-06-15",
    owner: "Aladdin",
    city: "Baku",
    phone: "994508765432",
    isNew: false,
    isBarter: true,
    isCrashed: false,
    isCredit: true,
    isPremium: true,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F07%2F26%2F21%2F34%2F21%2Fa154f12a-324c-4807-aefd-11526b72e337%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg",
    id: "0000011",
  },
  {
    brand: "Ford",
    model: "Fusion",
    color: "white",
    year: 2017,
    mileage: 176000,
    body: "sedan",
    amount: 22500,
    currency: "AZN",
    engineVolume: 1.5,
    horsePower: 181,
    fuel: "gas",
    gear: "auto",
    drive: "front",
    seatNum: 5,
    date: "2024-04-13",
    owner: "Elvin",
    city: "Baku",
    phone: "994555048372",
    isNew: false,
    isBarter: true,
    isCrashed: false,
    isCredit: true,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F06%2F26%2F01%2F19%2F00%2F01f88039-7dbd-4a7f-a8c0-6fb27bba47e7%2F64677_XEKjwmAveF1J7d42VxCbsw.jpg",
    id: "0000012",
  },

  {
    brand: "Renault",
    model: "Megane",
    color: "silver",
    year: 2007,
    mileage: 340000,
    body: "universal",
    amount: 8800,
    currency: "AZN",
    engineVolume: 1.5,
    horsePower: 105,
    fuel: "diesel",
    gear: "manual",
    drive: "front",
    seatNum: 5,
    date: "2024-06-04",
    owner: "Samir",
    city: "Baku",
    phone: "994508765432",
    isNew: false,
    isBarter: false,
    isCrashed: true,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F07%2F14%2F13%2F17%2F25%2F1ac02443-3a71-469a-a081-0916233e7d60%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg",
    id: "0000013",
  },
  {
    brand: "Tesla",
    model: "Model 3",
    color: "wet asphalt",
    year: 2022,
    mileage: 26000,
    body: "liftback",
    amount: 24900,
    currency: "EUR",
    engineVolume: 0.0,
    horsePower: 400,
    fuel: "electro",
    gear: "reductor",
    drive: "rear",
    seatNum: 5,
    date: "2024-08-03",
    owner: "Behram",
    city: "Baku",
    phone: "994556803494",
    isNew: false,
    isBarter: false,
    isCrashed: false,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F08%2F23%2F14%2F17%2F17%2Ff5b85369-319f-404f-a25d-feca1a60e409%2F11375_qXr7-N1ppBcS2a5TEaxWRQ.jpg",
    id: "0000014",
  },
  {
    brand: "Toyota",
    model: "Land Cruiser Prado",
    color: "black",
    year: 2014,
    mileage: 144235,
    body: "SUV",
    amount: 30200,
    currency: "USD",
    engineVolume: 2.7,
    horsePower: 163,
    fuel: "gas",
    gear: "auto",
    drive: "full",
    seatNum: 7,
    date: "2024-04-13",
    owner: "Adil",
    city: "Baku",
    phone: "994508765432",
    isNew: false,
    isBarter: true,
    isCrashed: true,
    isCredit: false,
    isPremium: true,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F07%2F16%2F15%2F49%2F25%2F344e40a7-0dca-4847-88e6-27a0c17ce000%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg",
    id: "0000015",
  },
  {
    brand: "Mercedes",
    model: "E 220d",
    color: "white",
    year: 2014,
    mileage: 194000,
    body: "sedan",
    amount: 21300,
    currency: "USD",
    engineVolume: 2.2,
    horsePower: 170,
    fuel: "diesel",
    gear: "auto",
    drive: "rear",
    seatNum: 5,
    date: "2024-05-18",
    owner: "Muzeffer",
    city: "Sumqayit",
    phone: "994508765432",
    isNew: false,
    isBarter: false,
    isCrashed: true,
    isCredit: true,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F07%2F26%2F13%2F11%2F48%2F992ea701-f2f7-4af4-ab45-a9859feca93e%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg",
    id: "0000016",
  },
  {
    brand: "BMW",
    model: "530",
    color: "black",
    year: 2008,
    mileage: 277000,
    body: "sedan",
    amount: 25900,
    currency: "AZN",
    engineVolume: 3.0,
    horsePower: 272,
    fuel: "gas",
    gear: "auto",
    drive: "rear",
    seatNum: 5,
    date: "2024-08-16",
    owner: "Elnur",
    city: "Baku",
    phone: "994508765432",
    isNew: false,
    isBarter: false,
    isCrashed: true,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F06%2F14%2F18%2F10%2F59%2Fe65e8015-fd42-491f-8faf-80a581d2e0b3%2F12183_ogtQftp0VNM0b8HrfrDIcQ.jpg",
    id: "0000017",
  },
  {
    brand: "Kia",
    model: "Sportage",
    color: "grey",
    year: 2024,
    mileage: 0,
    body: "SUV",
    amount: 57200,
    currency: "AZN",
    engineVolume: 2.0,
    horsePower: 152,
    fuel: "gas",
    gear: "auto",
    drive: "full",
    seatNum: 7,
    date: "2024-07-19",
    owner: "Elshan",
    city: "Mingachevir",
    phone: "994706549384",
    isNew: true,
    isBarter: false,
    isCrashed: false,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F06%2F21%2F15%2F21%2F21%2Fc89063ca-60b5-4916-9d73-1d80febb230a%2F73879_Llsf7HE7T9ZVmMOurKtMGQ.jpg",
    id: "0000018",
  },
  {
    brand: "Hyndai",
    model: "Elantra",
    color: "silver",
    year: 2015,
    mileage: 173000,
    body: "sedan",
    amount: 17800,
    currency: "AZN",
    engineVolume: 1.8,
    horsePower: 150,
    fuel: "gas",
    gear: "auto",
    drive: "front",
    seatNum: 5,
    date: "2024-05-11",
    owner: "Aydin",
    city: "Baku",
    phone: "994508765432",
    isNew: false,
    isBarter: true,
    isCrashed: false,
    isCredit: false,
    isPremium: false,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/full/2024%2F08%2F08%2F23%2F41%2F33%2Fc5d8c041-b01f-4d94-af41-ba1719dc4110%2F11375_qXr7-N1ppBcS2a5TEaxWRQ.jpg",
    id: "0000019",
  },
  {
    brand: "Volkswagen",
    model: "Passat",
    color: "white",
    year: 2013,
    mileage: 117000,
    body: "sedan",
    amount: 23800,
    currency: "AZN",
    engineVolume: 2.0,
    horsePower: 211,
    fuel: "gas",
    gear: "auto",
    drive: "front",
    seatNum: 5,
    date: "2024-05-12",
    owner: "Sahib",
    city: "Ganja",
    phone: "994508765432",
    isNew: false,
    isBarter: true,
    isCrashed: false,
    isCredit: false,
    isPremium: true,
    isSold: false,
    imageLink:
      "https://turbo.azstatic.com/uploads/f460x343/2024%2F05%2F15%2F17%2F45%2F34%2F6bc3bc8c-5161-43e9-8786-e82721f6d49a%2F64677_XEKjwmAveF1J7d42VxCbsw.jpg",
    id: "0000020",
  },
];

cars.forEach((value, index) => {
  cars[index] = new Car(value);
});

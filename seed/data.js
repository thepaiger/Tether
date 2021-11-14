import db from "../db/connection.js";
import Car from "../models/car.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    name: 'Kumi Kanata',
    email: 'kumi@super.gmail.com',
    password_digest: await bcrypt.hash('!Hk273LoftQ7', 11),
    shopping_cart: [
      {
        car: "Aspark Owl",
        car_id: "",
        quantity: "1",
        price: "3196400"
      },
    ]
  })
  await user1.save()

  const user2 = new User({
    name: 'Joe Joeson',
    email: 'mrman@gmail.com',
    password_digest: await bcrypt.hash('Password!?', 11),
    shopping_cart: [
    ]
  })
  await user2.save()

  const user3 = new User({
    name: 'Sasha Romanov',
    email: 'widow@av.com',
    password_digest: await bcrypt.hash('4$ilaujA!', 11),
    shopping_cart: [
      {
        car: "Rimac Nevera",
        car_id: "",
        quantity: "2",
        price: "2400000"
      },
    ]
  })
  await user3.save()




  const cars = [
    {
      make: "Rimac" ,
      model: "Nevera",
      price: "2400000",
      hp: "1,914",
      topSpeed: "258 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Aspark" ,
      model: "Owl",
      price: "3196400",
      hp: "2,012",
      topSpeed: "249 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Aston Martin" ,
      model: "Rapide E",
      price: "330000",
      hp: "602",
      topSpeed: "155 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Audi" ,
      model: "E-Tron Gran Turismo",
      price: "75000",
      hp: "590",
      topSpeed: "149 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Dendrobium" ,
      model: "D1",
      price: "1544520",
      hp: "1,800",
      topSpeed: "200 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Drako Motors" ,
      model: "GTE",
      price: "1250000",
      hp: "1,200",
      topSpeed: "206 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Lotus" ,
      model: "Evija",
      price: "2100000",
      hp: "1,973",
      topSpeed: "217 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Nextev" ,
      model: "Nio Ep9",
      price: "1200000",
      hp: "1,341",
      topSpeed: "195 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Mercedes-Benz" ,
      model: "SLS AMG Electric",
      price: "540000",
      hp: "740",
      topSpeed: "155 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Porche" ,
      model: "918",
      price: "845000",
      hp: "887",
      topSpeed: "214 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Pininfarina" ,
      model: "Battista",
      price: "2500000",
      hp: "1,900",
      topSpeed: "217 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Porsche" ,
      model: "Taycan 4s",
      price: "105000",
      hp: "522",
      topSpeed: "155 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Roland Gumpert" ,
      model: "Nathalie",
      price: "455000",
      hp: "536",
      topSpeed: "186 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },
    {
      make: "Tesla" ,
      model: "Roadster",
      price: "200000",
      hp: "248",
      topSpeed: "250 mph" ,
      info: " ",
      image: " ",
      range: " ",
      connector: " ",
    },


  ]










  // insert products into database
  await Car.insertMany(cars);
  console.log("Created users & cars!");

  // close database connection. done.
  db.close();
};

insertData()
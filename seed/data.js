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
        quantity: 1,
        price: "$3,196,400",
        priceNum: 3196400,
        image: "/images/cars/aspark-owl.png"
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
        quantity: 2,
        price: "$2,400,000",
        priceNum: 2400000,
        image: "/images/cars/rimac-nevera.png"
      },
    ]
  })
  await user3.save()

  const user4 = new User({
    name: 'Jeff Besos',
    email: 'mrmoney@amazon.com',
    password_digest: await bcrypt.hash('89j38fS$$dh34Q', 11),
    shopping_cart: [
      {
        car: "Rimac Nevera",
        car_id: "",
        quantity: 2,
        price: "$2,400,000",
        priceNum: 2400000,
        image: "/images/cars/rimac-nevera.png"
      },
      {
        car: "Lotus Evija",
        car_id: "",
        quantity: 1,
        price: "$2,100,000",
        priceNum: 2100000,
        image: "/images/cars/lotus-evija.png"
      }
    ]
  })
  await user4.save()

  const cars = [
    {
      make: "Rimac" ,
      model: "Nevera",
      price: "$2,400,000",
      priceNum: 2400000,
      hp: "1,914",
      topSpeed: "258 mph" ,
      info: "The Rimac Nevera is an all-electric sports car designed and manufactured by the Croatian automotive manufacturer Rimac Automobili. The first production prototype car was released in August 2021 and will produce 150 vehicles. Each of the Nevera's four wheels is individually driven by surface-mounted magnet motors. Combined, they produce a total of 1914 hp and 2360Nm of torque. A single-stage gearbox links the front and rear wheels. The Nevera has the ability to accelerate from 0-60 mph in 1.85 seconds, making it potentially the fastest-accelerating production car in the world. According to the Rimac Automobili, it will accelerate from 0-100 mph in 4.3 seconds, 0-186 mph in 9.3 seconds, and on to a top speed of 412 km/h or 256 mph. Rimac designed the car to be very durable and can be driven hard. In addition to this, the car is technologically capable of Level 4 of autonomous driving. The car features an entirely new design and does away with the conventional doors, now incorporating butterfly doors instead.",
      image: "/images/cars/rimac-nevera.png",
      range: "650 km (400 mi) ",
      connector: "Type 2 EV Charging Cable",
    },
    {
      make: "Aspark" ,
      model: "Owl",
      price: "$3,196,400",
      priceNum: 3196400,
      hp: "2,012",
      topSpeed: "249 mph",
      info: "The Aspark Owl is an all-electric battery-powered sports car manufactured by Japanese engineering firm Aspark , under development since 2018, with the goal of making the fastest accelerating electric car. It will be built by Manifattura Automobili Torino (MAT) in Italy. Aspark plans a production run of 50 vehicles, with a list price of €2.5 million. The OWL was publicly unveiled in concept form at the 2017 Frankfurt Auto Show, and the production version was unveiled in November 2019 at the Dubai International Motor Show. The OWL has carbon fibre body work built around a carbon fibre monocoque chassis weighing 120 kg (265 lb). A stainless steel support structure is incorporated in the roof to increase the bodywork's strength. Changes to the bodywork from the concept include the addition of wing mirrors, an active rear wing and a redesigned rear glass. The car features double wishbone suspension with hydraulic dampers and torque vectoring for improved handling. Stopping power is handled by a carbon-ceramic braking system with 10-piston front calipers and 4-piston rear calipers. It has been claimed that the OWL can accelerate from 0-97 km/h (60 mph) in 1.69 seconds, 0-100 km/h (62 mph) in 1.9 seconds, 0-299 km/h (186 mph) in 10.6 seconds, and can attain a top speed of 400 km/h (249 mph), which would make it the fastest accelerating production car in the world.",
      image: "/images/cars/aspark-owl.png",
      range: "451 km (280 mi)",
      connector: "Type 2 EV Charging Cable",
    },
    {
      make: "Aston Martin" ,
      model: "Rapide E",
      price: "$330,000",
      priceNum: 330000,
      hp: "602",
      topSpeed: "155 mph" ,
      info: "The Astin Martin RapidE is be powered by a 65 kWh battery supplied by HyperBat Limited; a new joint venture between WAE and Unipart manufacturing group. The battery is capable of 800-volt power transfers. Five thousand six hundred lithium-ion electric cells are fitted in the engine bay along with two electric motors supplied by Integral Powertrain at the rear. Both of the motors will drive the car via an Xtrac transmission featuring a limited-slip differential. A new suspension system will be implemented to better cope with the changes in the drive train.  The two electric motors will have a combined power output of 610 PS (602 hp) and 949 N⋅m (700 lb⋅ft) of torque. The car will have claimed acceleration figures of 0–97 km/h (0–60 mph) in sub-4.0 seconds' time and 80–113 km/h (50–70 mph) in 1.5 seconds, along with a top speed of 249 km/h (155 mph). Maximum performance will be accessible regardless of battery charge. A prototype was tested at the Nurbürgring to ensure that the car delivers linear power despite hard usage. The car has projected range of 322 km (200 mi) (WLTP) and will charge up to 185 miles of range an hour on a 400-volt, 50 kW charger. The car can also be charged on an 800-volt super charging station which increases the charging rate. The RapidE is fitted with low-drag wheels and low-resistance Pirelli P Zero tyres for maximum efficiency. In January 2020, it was reported that the production of the Rapide E had been cancelled.",
      image: "/images/cars/astin-martin-rapide.png",
      range: "321 km (200 mi)",
      connector: "Type 2 EV Charging Cable ",
    },
    {
      make: "Audi" ,
      model: "E-Tron Gran Turismo",
      price: "$75,000",
      priceNum: 75000,
      hp: "590",
      topSpeed: "149 mph" ,
      info: "The 2022 Audi e-tron Gran Turismo is a bold-looking electric car with deep engineering ties to the Porsche Taycan. In fact, the two slinky four-door gran turismos were developed alongside each other and share a cutting-edge 800-volt propulsion architecture that allows faster charging and helps ensure performance stays consistent. Aiding the e-tron GT's dual electric motors, which produce between 522 and 637 horsepower depending upon the model, is an innovative two-speed transmission that enables breathtaking take-offs. The Audi stands out from the Porsche with its more chiseled bodywork and busier front end. Inside, the e-tron is equally elegant and technologically advanced, with a selection of handsome materials and high-tech features. The RS e-tron GT1 is Audi’s new electric flagship model, and can sprint from 0 to 100 km/h (62.14 mph) in 3.3 seconds and reach a top speed of 250 km/h (155.14 mph). Its chassis includes features such as adaptive three-chamber air suspension and an electronic differential lock on the rear axle. A coating of tungsten carbide on the brake pads further enhances the performance of the brake system, while the e-tron sport sound creates a fitting acoustic backdrop for this technological masterpiece. All of these features are also available for the Audi e-tron GT quattro2. A number of options are available for both models, including up to 21-inch wheels, all-wheel steering, Matrix LED headlights with Audi laser light, and seat covers that contain a high percentage of recycled materials.  ",
      image: "/images/cars/audi-etron-gran-turismo.png",
      range: "383 km (238 mi) ",
      connector: "Type 2 EV Charging Cable ",
    },
    {
      make: "Dendrobium" ,
      model: "D1",
      price: "$1,544,520",
      priceNum: 1544520,
      hp: "1,800",
      topSpeed: "200 mph" ,
      info: "The Dendrobrium D-1, the first in an upcoming range of electric road cars from Dendrobium Automotive, will be developed and built in the UK, the newly created company has announced.  A power output of 1800bhp and torque of 1475 lb ft are targeted for the D-1, while the powertrain will be tuned to deliver the project’s two main targets: 200mph and 0-60mph in 2.7sec. A target weight of 1750kg has also been set. A mixture of carbonfibre, advanced composites and alloys have been employed to help keep the car's weight down. Construction is centred on a carbonfibre tub. A concept of the electric supercar, called Vanda Dendrobium, made its debut in March at the Geneva motor show. It is now being lined up for production and is expected to command a seven-figure price tag. Vanda Electrics said it has already received a number of orders. The rear-hinging doors and roof lend the supercar its name; their petal-like shape mimicks the Vanda orchid, Singapore’s national flower. Dendrobium is also an orchid genus.",
      image: "/images/cars/dendrobium-d1.png ",
      range: "400 km (249 mi) ",
      connector: "NEMA 14-50 plug f",
    },
    {
      make: "Drako Motors" ,
      model: "GTE",
      price: "1,250,000",
      priceNum: 1250000,
      hp: "1,200",
      topSpeed: "206 mph" ,
      info: "In 2019, Drako Motors announced its Drako GTE production at The Quail Motorsport. The Drako GTE is an all-electric, quad motor, full-size 4 door sports sedan that seats 4 passengers. The GTE has a claimed top speed of 206 mph (332 km/h) and a 0-60 mph (97 km/h) time of less than 3 seconds.  Drako Motors announced a limited production of 25 Drako GTE vehicles in 2020, with a base price of US$1,250,000. The Drako GTE’s 1,200 hp and 8,800 Nm of combined at-the-wheels torque provide acceleration and a top speed of 206 mph. With a motor at each wheel, the GTE’s agility and handling are adept on any road surface. The quad motors individually manage the traction for each tire independently,  to maximize not just grip, but handling fidelity to the driver’s inputs, delivering unrivaled control and safety on both road and track. The Drako GTE’s battery pack is designed and engineered to deliver a constant 900 kW of power--nearly a megawatt--to its quad motors. The 90-kWh battery pack can supply up to 1,800 amps continuously, and up to 2,200 peak amps. A massive parallel cooling architecture within the battery pack ensures each cell is consistently cooled properly.",
      image: "/images/cars/drako-gte.png",
      range: "402 km (250 mi)",
      connector: "Type 2 EV Charging Cable",
    },
    {
      make: "Lotus" ,
      model: "Evija",
      price: "$2,100,000",
      numPrice: 2100000,
      hp: "1,973",
      topSpeed: "217 mph" ,
      info: "The Lotus Evija (pronounced eh-VIE'-ya) aims to push the boundaries of modern hypercar technology. While many rivals offer hybrid powertrains, this model commits to being fully electric, and it comes with an ultrafast charging setup. Only 130 models of this leading-edge hypercar will be built, each priced at more than $2 million. Evija's muscle-bound electric powertrain is provided by a team of four electric motors, and Lotus claims they generate a total output of 1972 horsepower and 1254 lb-ft of torque. A single-speed automatic transmission governs it all, sending power to all four wheels. The car's light curb weight is designed to optimize handling. The company claims the Evija weighs just over 3700 pounds, making it supposedly the lightest EV hypercar ever to enter production. The Evija can reach a top speed of more than 200 mph, and Lotus expects it to sprint to 62 mph in under three seconds. The car takes just 12 minutes for an 80 percent charge, and a full charge takes a mere 18 minutes. This Lotus hypercar is able to travel up to 250 miles between charges.",
      image: "/images/cars/lotus-evija.png",
      range: "402 km (250 mi)",
      connector: "Type 2 EV Charging Cable",
    },
    {
      make: "Nextev" ,
      model: "Nio Ep9",
      price: "$1,200,000",
      numPrice: 1200000,
      hp: "1,341",
      topSpeed: "195 mph" ,
      info: "The NIO EP9 is a Chinese electric-powered, two-seat sports car manufactured by NIO, assisted by their Formula E racing division. The name EP9 stands for Electric Performance 9. Six EP9s have been sold to NIO investors for £2,500,000 each. NIO has announced that ten additional EP9s will be sold to the general public. However, it is not a road-legal vehicle and none of the 16 production model EP9s was ever registered for road use. The EP9 is purely designed for track use and did not comply with the laws and regulations to be registered in China. None of the 16 production model EP9s was ever exported and registered for road use outside China so far.Each of the EP9's wheels has its own motor and transmission. Each motor has 250 kW (335.25 hp), giving the car a total power output of 1 MW (1,341 hp; 1,360 PS). The EP9 is both all-wheel drive,[2] and individual-wheel drive. The car has an advanced torque vectoring system that can adjust the power output to each wheel. The EP9's battery can last up to 427 km (265 miles) before it needs to be charged. Recharging takes 45 minutes, and battery replacement takes 8 minutes as the batteries need to be removed when recharged. The EP9 can accelerate from 0 to 100 km/h (62 mph) in 2.7 seconds, 200 km/h (124 mph) in 7.1 seconds, and 300 km/h (186 mph) in 15.9 seconds, as demonstrated by Richard Hammond in The Grand Tour. The car can achieve a top speed of 350 km/h (217 mph).",
      image: "/images/cars/nextev-nio.png",
      range: "427 km (265 mi)",
      connector: "427 km (265 mi) ",
    },
    {
      make: "Mercedes-Benz" ,
      model: "SLS AMG Electric",
      price: "$540,000",
      numPrice: 540000,
      hp: "740",
      topSpeed: "155 mph" ,
      info: "The Mercedes-Benz SLS AMG  is a front mid-engine, 2-seater, limited production grand tourer developed by the Mercedes-AMG division of German automotive manufacturer Mercedes-Benz, with the assistance of David Coulthard. The car is the successor to the Mercedes-Benz SLR McLaren and was described by Mercedes-Benz as a spiritual successor to the Mercedes-Benz 300SL Gullwing, mainly because it was inspired by the latter. SLS stands for 'Super Leicht Sport' (Super Light Sport). An electric version of the car, the SLS AMG Electric Drive, was presented at the 2012 Paris Motor Show. Production ended in 2014 with the introduction of the SLS AMG GT Final Edition. The SLS AMG Electric Drive was powered by four electric motors with combined ratings of 552 kW (751 PS; 740 hp) and 1,000 N⋅m (738 lb⋅ft). Each motor can spin up to 13,000 rpm and weighs 45 kg (99 lb). In addition, the transmission allows each motor to selectively drive all 4 wheels. This enables the car to accelerate from a stand still to 100 km/h (62 mph) in 3.9 seconds. The SLS AMG Electric Drive included a liquid-cooled 400 V lithium-ion battery rated to 60 kWh that had a range of 250 km (160 mi) under the combined New European Driving Cycle. The 548 kg (1,208 lb) battery pack is made up of 12 modules, each comprising 72 lithium-ion cells. The system was designed as a collaboration between Mercedes-AMG and Mercedes AMG High Performance Powertrains Ltd.",
      image: "/images/cars/mercedes-benz-sls-amg.png",
      range: "250 km (160 mi) ",
      connector: "Type 2 EV Charging Cable ",
    },
    {
      make: "Porche" ,
      model: "918",
      price: "$845,000",
      numPrice: 845000,
      hp: "887",
      topSpeed: "214 mph" ,
      info: "The Porsche 918 Spyder is a limited-production mid-engine plug-in hybrid sports car manufactured by German automobile manufacturer Porsche.  The 918 Spyder is powered by a naturally aspirated 4.6 L (4,593 cc) V8 engine, developing 447 kW (608 PS; 599 hp) at 8,700 rpm, with two electric motors delivering an additional 210 kW (286 PS; 282 hp) for a combined output of 652 kW (887 PS; 875 hp) and 1,280 N⋅m (944 lbf⋅ft) of torque.  The 918 Spyder's 6.8 kWh lithium-ion battery pack delivers an all-electric range of 19 km (12 mi) under the US Environmental Protection Agency's five-cycle tests.The front 95 kW (129 PS; 127 hp) electric motor directly drives the front axle; an electric clutch decouples the motor when not in use. The total system delivers 652 kW (887 PS; 875 hp) and 1,280 N⋅m (944 lbf⋅ft) of torque.  Porsche provided official performance figures of 0-100 km/h (62 mph) in 2.6 seconds, 0-200 km/h (124 mph) in 7.2 seconds, 0-300 km/h (186 mph) in 19.9 seconds and a top speed of 345 km/h (214 mph).  The 4.6 litre V8 petrol engine can recharge an empty battery on about two litres of fuel.  The supplied Porsche Universal Charger requires seven hours to charge the battery on a typical 110 volt household AC socket or two hours on a dedicated Charging Dock installed with a 240 volt industrial supply. An optional DC Speed Charging Station can restore the battery to full capacity in 25 minutes. ",
      image: "/images/cars/posche-918.png",
      range: "680 km (420 mi)",
      connector: "Type 2 EV Charging Cable",
    },
    {
      make: "Pininfarina" ,
      model: "Battista",
      price: "$2,500,000",
      numPrice: 2500000,
      hp: "1,900",
      topSpeed: "217 mph" ,
      info: "The Battista is powered by a 120 kW⋅h battery pack supplied by Rimac Automobili. The car has four individual motors, each placed at a wheel and they have a combined power output of 1,400 kW and 2,300 N⋅m of torque. The car has a carbon-fibre monocoque chassis with aluminium crash structures at the front and rear. Most of the body panels are also built from the same material resulting in a low mass. The car has 533.4 mm rims in Pirelli P Zero Corsa tyres. The adjustable suspension system of the car will be tuned for maximum road comfort. The car has five driving modes all of which alter the power generated by the powertrain. The car features carbon ceramic brake discs measuring 390 mm at the front and rear and equipped with six piston calipers front and aft. The active rear wing acts as an airbrake to improve stopping power. The interior of the car is customisable according to the customer's specification. A carbon fibre steering wheel is flanked by two large screens on either side, displaying vital data to the driver. The interior is upholstered in leather. The car is claimed by the manufacturer to generate cabin driving sound using acoustics. The battery pack is T-shaped and is placed as such that it lies in the central tunnel and behind the seats. Once fully charged, the battery pack allows the car to have a range of 450 km. The Battista accelerates from 0-100 km/h in under 2 seconds, 0-300 km/h in under 12 seconds, and has a top speed of 350 km/h.  The Battista accelerates from 0-60 mph in 1.8 seconds. ",
      image: "/images/cars/pininfarina-battista.png ",
      range: "650 km (400 mi) ",
      connector: "Type 2 EV Charging Cable",
    },
    {
      make: "Porsche" ,
      model: "Taycan 4s",
      price: "$105,000",
      numPrice: 105000,
      hp: "522",
      topSpeed: "155 mph" ,
      info: "The Porsche Taycan is an all-electric car made by German automobile manufacturer Porsche. The concept version of the Taycan, named the Porsche Mission E, debuted at the 2015 Frankfurt Motor Show.  The Taycan was revealed fully production-ready at the 2019 Frankfurt Motor Show.  As Porsche's first series production electric car,  it is sold in several variants at different performance levels, and may spawn further derivatives in future models.  More than 20,000 Taycans were delivered in 2020, its debut sale year, representing 7.4% of the total Porsche volume. The name 'Taycan' roughly translates from Turkish as 'lively young horse', in reference to the steed of the Stuttgart coat of arms on the Porsche crest.Porsche named the high performance models Turbo and Turbo S despite the absence of a turbocharger, following the tradition set by high performance Porsche derivatives with internal combustion engines.  The EPA lists the Taycan 4S' range at 203 miles with a consumption of 49 kWh/100 miles. However, the car's range depends on how it is driven and what driving mode is selected. There are five driving modes: Sport, Sport Plus, Normal, Range, and Individual. The Range mode maximizes range with lowest power consumption; and Individual lets the driver customise various settings.  Regenerative braking provides up to 265 kW, yielding an acceleration of 0.39 G/-3.83 m/s^2.",
      image: "/images/cars/porsche-taycan.png ",
      range: "341 km (212 mi) ",
      connector: "NEMA 14-50 plug f",
    },
    {
      make: "Roland Gumpert" ,
      model: "Nathalie",
      price: "$455,000",
      priceNum: 455000,
      hp: "536",
      topSpeed: "186 mph" ,
      info: "At Beijing Motor Show 2018, Roland Gumpert presented the prototype of its first model: the 'Nathalie', named after the daughter of the founder. The RG Nathalie is to be produced at 500 copies from the end of 2019 in Germany, then in Shangrao in China and sold at a price of 420,000 Euros. The Nathalie is a two-seater coupe, its line is close to the Nissan GT-R. It receives headlights with LEDs at the front, removable shutters and a light strip joining the rear lights. It is designed on a very light carbon shell which gives it high performance with a maximum speed of 300 km/h (190 mph) and a 0 to 100 km/h (62 mph) in 2.5 seconds. The Nathalie receives four electric motors of 150 kW (200 hp), each placed in the wheels. They develop a combined power of 400 kW (540 hp) transmitted on all four wheels. The Nathalie is equipped with a 15 kW (20 hp) fuel cell which operates on methanol and supplies a 70 kWh (250 MJ) battery. The complex system developed by RG consists of a methanol reformer which, by a catalyzed chemical reaction, divides methanol into carbon dioxide and hydrogen, the latter feeding the fuel cell which produces electricity. The fuel cell system type is indicated by the fuel cell producer as Reformed methanol fuel cell. It also increases its autonomy thanks to the recovery of energy produced during braking. It benefits from a 60-liter tank of methanol and thus a range of 600 km (370 mi) to 1,200 km (750 mi) in 'eco' mode. If renewable methanol (e.g. made of municipal waste or renewable electricity) is used, a carbon-neutral operation is possible.",
      image: "/images/cars/gumpert-nathalie.png",
      range: "600 km (370 mi) ",
      connector: "Type 2 EV Charging Cable",
    },
    {
      make: "Tesla" ,
      model: "Roadster",
      price: "$200,000",
      numPrice: 200000,
      hp: "248",
      topSpeed: "250 mph" ,
      info: "The Tesla Roadster is an upcoming all-electric battery-powered four-seater all-wheel-drive sports car concept in development by Tesla, Inc. Tesla has claimed that it will be capable of 0 to 60 mph (0 to 97 km/h) in 1.9 seconds, which would be quicker than any street legal production car as of the announcement in 2017.  The Roadster is the successor to Tesla's first production car, which was the 2008 Roadster. Tesla CEO Elon Musk has said that Roadster should ship in 2023. Musk said in a tweet that higher-performance trim levels will be available beyond the base specifications, including a SpaceX package which would ‘include ~10 small rocket thrusters arranged seamlessly around the car’ which would supposedly allow for dramatic improvements in 'acceleration, top speed, braking & cornering'. Its claimed 0 to 400 m (0 to 1⁄4 mile) time will be 8.88 seconds, with a top speed above 400 km/h (250 mph). If the production Roadster achieves these performance numbers, it will outperform the supercars of 2019 and would have set new production car records, none of which had done better than 0–100 km/h (0–62 mph) in 2.0 seconds or 8.88 seconds in the 1/4 mile, until the release of the Rimac Nevera in August 2021. Referring to the performance, Musk stated, ‘this is what we are achieving in the prototype’” he also indicated the performance may improve in the production model and that the stated numbers refer to the anticipated base model.",
      image: "/images/cars/tesla-roadster.png ",
      range: "620 km (385 mi)",
      connector: "NEMA 14-50 plug ",
    },
  ]

  // insert products into database
  await Car.insertMany(cars);
  console.log("Created users & cars!");

  // close database connection. done.
  db.close();
};

insertData()
const Nike = [
  "Nike Air Force",
  "Nike Air Jordan",
  "Nike Air Max",
  "Nike Air Yeezy",
  "Nike Air Max 97",
  "Nike Blazers",
  "Nike Grind",
  "Nike Hypervenom",
  "Nike Ordem",
  "Nike Shox",
  "Nike Tiempo",
];
const Adidas = [
  "Adidas Gazelle",
  "Adidas Alphabounce+",
  "Adidas Harden",
  "Adidas OZWEEGO TR",
  "Adidas Energyfalcon",
  "Adidas Kaptir",
  "Adidas Continental 80",
  "Adidas AlphaEdge 4D",
  "Adidas Samba OG",
];
const Puma = [
  "Puma FUSE",
  "Puma ULTRA PRO",
  "Puma Porsche Legacy Speedcat",
  "Puma RS-X",
  "Puma Suede Classic",
  "Puma Sportswear",
  "Puma Speedcat ",
  "Puma Mayze",
];
const Asics = [
  "Asics FUSE",
  "Asics ULTRA PRO",
  "Asics OZWEEGO TR",
  "Asics Energyfalcon",
  "Asics Kaptir",
  "Asics Continental 80",
  "Asics Speedcat ",
  "Asics Mayze",
];
const Reebok = [
  "Reebok Gazelle",
  "Reebok Alphabounce+",
  "Reebok Harden",
  "Reebok OZWEEGO TR",
  "Reebok ULTRA PRO",
  "Reebok Porsche Legacy Speedcat",
  "Reebok RS-X",
  "Reebok Suede Classic",
  "Reebok Sportswear",
  "Reebok Samba OG",
];
const NewBalance = [
  "New Balance 550",
  "New Balance 650",
  "New Balance 237",
  "New Balance 990",
  "New Balance 997H",
];
const Converse = [
  "Converse 70 Vintage Canvas",
  "Converse Taylor All Star Lift Platform",
  "Converse Taylor All Star Classic",
  "Converse Chuck Taylor All Star UCLA Bruins By You",
  "Converse Taylor All Star Move Platform",
];
const Clarks = [
  "Clarks Oxford Lace",
  "Clarks Brogues 70",
  "Clarks Oxford High",
  "Clarks Brogues Classic",
  "Clarks Oxford Classic",
];
const brands = [
  "Nike",
  "Adidas",
  "Puma",
  "Asics",
  "Reebok",
  "NewBalance",
  "Converse",
  "Clarks",
];
const gender = ["Male", "Female"];

const colorOption = [
  ["white", "black", "green", "salmon"],
  ["red", "black", "maroon", "green"],
  ["red", "white", "black", "maroon"],
  ["white", "black", "maroon", "gray"],
];
const size = [40, 41, 42];
const randomGen = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
let db = [
  {
    id: 10,
    title: "Handmade Fresh Tuna",
    price: 363,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1280",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8044",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9487",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 13,
    title: "Tasty Steel Fish",
    price: 234,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4509",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5363",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4875",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 15,
    title: "Licensed Bronze Pants",
    price: 731,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6750",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5384",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=7931",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 19,
    title: "Sleek Wooden Pizza",
    price: 209,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=526",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5003",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1267",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 23,
    title: "Rustic Rubber Bacon",
    price: 534,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6760",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8185",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=7592",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 25,
    title: "Intelligent Metal Mouse",
    price: 185,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8807",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9438",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4437",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 26,
    title: "Elegant Bronze Chips",
    price: 134,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=2152",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6021",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3791",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 28,
    title: "Gorgeous Steel Hat",
    price: 512,
    description: "The Football Is Good For Training And Recreational Purposes",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3539",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9365",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9042",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 40,
    title: "Ergonomic Fresh Tuna",
    price: 685,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1179",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=43",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3384",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 41,
    title: "Modern Soft Sausages",
    price: 366,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9223",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=226",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5690",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 44,
    title: "Gorgeous Soft Soap",
    price: 420,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6342",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8569",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5527",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 48,
    title: "Incredible Metal Tuna",
    price: 876,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5975",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5180",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=248",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 53,
    title: "Unbranded Plastic Chair",
    price: 92,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9957",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=311",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9758",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 57,
    title: "Unbranded Granite Ball",
    price: 400,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4244",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=2134",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6235",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 59,
    title: "Small Fresh Sausages",
    price: 566,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3092",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=835",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3303",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 60,
    title: "Gorgeous Fresh Cheese",
    price: 252,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=7656",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5176",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=961",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 61,
    title: "Bespoke Concrete Chips",
    price: 395,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5569",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3739",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8737",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 64,
    title: "Handmade Cotton Pants",
    price: 417,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=726",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9781",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4225",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 65,
    title: "Ergonomic Steel Tuna",
    price: 212,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=165",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3174",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4746",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 77,
    title: "Elegant Bronze Car",
    price: 594,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9374",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6167",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=7518",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 78,
    title: "Handmade Steel Chicken",
    price: 30,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1309",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=7250",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9991",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 87,
    title: "Handmade Soft Shirt",
    price: 391,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=7022",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5117",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4222",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 89,
    title: "Electronic Cotton Bike",
    price: 4,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4286",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3206",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6169",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 123,
    title: "Luxurious Bronze Table",
    price: 112,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5313",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1608",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5770",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 125,
    title: "Modern Plastic Keyboard",
    price: 968,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1960",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5508",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5924",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 130,
    title: "Handcrafted Concrete Keyboard",
    price: 185,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1753",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9893",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1539",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 131,
    title: "Recycled Rubber Gloves",
    price: 760,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3992",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=2052",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9630",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 135,
    title: "Intelligent Plastic Chair",
    price: 326,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6056",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3570",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9062",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 138,
    title: "Refined Concrete Car",
    price: 370,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5724",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6312",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8434",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 143,
    title: "Incredible Frozen Sausages",
    price: 134,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3422",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1031",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6494",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 148,
    title: "Generic Soft Pizza",
    price: 344,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=951",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4639",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=499",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 151,
    title: "Handcrafted Soft Hat",
    price: 130,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=611",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3389",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6260",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 155,
    title: "Elegant Cotton Tuna",
    price: 411,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1504",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8597",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3436",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 158,
    title: "Luxurious Bronze Tuna",
    price: 412,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5295",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8906",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=7145",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 172,
    title: "Fantastic Granite Mouse",
    price: 769,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8295",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5004",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=7609",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 184,
    title: "Bespoke Frozen Salad",
    price: 307,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=7416",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6676",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=113",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 191,
    title: "Practical Wooden Computer",
    price: 942,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4737",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=3522",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4305",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 192,
    title: "Bespoke Fresh Gloves",
    price: 81,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8410",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1361",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1217",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 193,
    title: "Luxurious Fresh Tuna",
    price: 590,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1532",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=9102",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=7542",
    ],
    creationAt: "2023-04-05T10:33:18.000Z",
    updatedAt: "2023-04-05T10:33:18.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
  {
    id: 237,
    title: "coca cola",
    price: 1,
    description: "coca cola medium",
    images: [
      "https://www.coca-cola.com.pe/content/dam/one/pe/es/productos/Coca-Cola-sabor-original.png",
    ],
    creationAt: "2023-04-05T19:29:31.000Z",
    updatedAt: "2023-04-05T19:29:31.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9823",
      creationAt: "2023-04-05T10:33:18.000Z",
      updatedAt: "2023-04-05T10:33:18.000Z",
    },
  },
];
let newrray = [];
let counter = 0;
db.map((item) => {
  item.id = ++counter;
  item.size = size;
  item.brand = brands[randomGen(0, brands.length - 1)];
  switch (item.brand) {
    case "Nike":
      item.title = Nike[randomGen(0, Nike.length - 1)];
      break;
    case "Puma":
      item.title = Puma[randomGen(0, Puma.length - 1)];
      break;
    case "Adidas":
      item.title = Adidas[randomGen(0, Adidas.length - 1)];
      break;
    case "Asics":
      item.title = Asics[randomGen(0, Asics.length - 1)];
      break;
    case "Reebok":
      item.title = Reebok[randomGen(0, Reebok.length - 1)];
      break;
    case "NewBalance":
      item.title = NewBalance[randomGen(0, NewBalance.length - 1)];
      break;
    case "Converse":
      item.title = Converse[randomGen(0, Converse.length - 1)];
      break;
    case "Clarks":
      item.title = Clarks[randomGen(0, Clarks.length - 1)];
      break;
    default:
      break;
  }
  item.colorOption = colorOption[(0, colorOption.length - 1)];
  item.rating = randomGen(1, 5);
  item.stock = randomGen(2, 10);
  item.sold = randomGen(50, 1800);
  item.demographic = gender[randomGen(0, gender.length - 1)];
  newrray.push(item);
});
console.log(JSON.stringify(newrray));

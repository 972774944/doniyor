import { Products } from "./type";
export interface Product {
  image: string;
  name: string;
  desc: string;
  price: number;
}

export const categories = [
  {
    id: 1,
    name: "un mahsulotlari",
    Image:
      "https://daryo.uz/cache/2022/05/photo_2021-11-22_12-41-32-1280x853.jpg",
    categoriesId: 1,
  },
  {
    id: 2,
    name: "Ichimliklar",
    Image: "https://www.gazeta.uz/media/img/2022/06/fwFygA16549326430717_l.jpg",
    categoriesId: 2,
  },
  {
    id: 3,
    name: "sabzavotlar",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqmQdhISGXE8JW8DPlzOaO9I2oSeymhfhUQ&s",
    categoriesId: 3,
  },
  {
    id: 4,
    name: "mevalar",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-W4wcoGko5yFeEwDQYJIVUGx0AR_CRXh3Q&s",
    categoriesId: 4,
  },
];

export const products: Products = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS23ntUsE_R957Y_FugNX1MX_p31wuXs9O_A&s",
    name: "Yog'",
    desc: "Semichka yog'i",
    price: 18,
    categoriesId: 1,
  },
  {
    id: 11,
    image:
      "https://frankfurt.apollo.olxcdn.com/v1/files/9fy21s9xeoxj1-UZ/image;s=900x900",
    name: "Mo'tabar",
    desc: "Mo'tabar un maxsuloti taomingizni shirin va mazzali qiladi",
    price: 18,
    categoriesId: 1,
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ757EitgtaIdng_S7SLjnCNbLjidgj7Wey-g&s",
    name: "Anor suv",
    desc: "Tabbiy afgoniston suvlari",
    price: 8,
    categoriesId: 2,
  },
  {
    id: 21,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNb1SgJfyU-jew2HG2YjvSrVEZ7rIKylhaw&s",
    name: "Fues Tea",
    desc: "Tabbiy Uzbeksiton choyi",
    price: 8,
    categoriesId: 2,
  },

  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAfBtqA7GekF1EZ0IsW_NSp_RiRZn_7H4Dw&s",
    name: "Sabzi",
    desc: "Sog'lom bolay desengiz sabzavotdan yesangiz",
    price: 12,
    categoriesId: 3,
  },
  {
    id: 3,
    image:
      "https://api.online-bozor.uz/uploads/images/8a818006d7afde69b0696edb",
    name: "Pomidor",
    desc: "O'zbek xaqiqiy dexqon mahsuloti",
    price: 12,
    categoriesId: 3,
  },
  {
    id: 4,
    image: "https://xabar.uz/static/crop/1/7/920__95_1747089670.jpg",
    name: "olma",
    desc: "mazzali dexqon olmasi",
    price: 12,
    categoriesId: 4,
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvEiRJsqfolFXnk7DyjZMhvKbVN4ukk8N_A&s",
    name: "Ananas",
    desc: "Brazilya Ananasi",
    price: 12,
    categoriesId: 4,
  },
];

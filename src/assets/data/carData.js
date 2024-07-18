// import all images from assets/images directory
import img01 from "../all-images/cars-img/interiores.png";
import img02 from "../all-images/cars-img/motor.png";
import img03 from "../all-images/cars-img/detalles.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Interiores",
    rating: 112,
    carName: "Interiores",
    imgUrl: img01,
    price: 50,
    
  },

  {
    id: 2,
    brand: "Lavado de motor",
    rating: 102,
    carName: "Lavado de motor",
    imgUrl: img02,
    price: 50,
   
  },

  {
    id: 3,
    brand: "Pulido y encerado",
    rating: 132,
    carName: "Pulido y encerado",
    imgUrl: img03,
    price: 65,
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    price: 70,
    
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    price: 45,
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    price: 85,
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    price: 50,
 
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    price: 50,
   
  },
];

export default carData;

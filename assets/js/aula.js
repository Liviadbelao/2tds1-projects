/* const names = ["whinds", "freeway", "testes", "maria"];
names.forEach((name) =>{
    console.log(`Hi, ${name}`);
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);


numbers.forEach((number, index) => {
  if(number % 2 == 0){
    console.log(`O número ${number}, está na posição ${index}`);
  } 
}) */

/* 
const cars = [
    {
     marca: "ford",
     modelo: "focus",
},
{
    marca: "BMW",
    modelo: "BMW Z4",
},
{
    marca: "fiat",
    modelo: "palio",
},
{
    marca: "audi",
    modelo: "A3",
},

];

cars.forEach((car) =>{
    console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);
}); */

class Car{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}
class ListCar{
    constructor(){
        this.cars = [];
    }
    addArr(car){
      this.cars.push(car);
    }
}

const list = new ListCar();

function addCar(){
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    if(brand == "" && model == ""){
        document.getElementById("test").innerHTML = "Os campos devem ser preenchidos";
    }else{
   const list2 = new Car(brand, model);
   document.getElementById("brand").value = '';
   document.getElementById("model").value = '';
   list.addArr(list2);
   console.log(list);
   rederCars();
}
}

function rederCars(){
   let result = '';
    list.cars.forEach((car) => {
        result += `<div>
        <p id="resultado">A marca é:${car.marca}- e o modelo é:${car.modelo}</p>
        </div> `;
    });
    document.getElementById("result").innerHTML = result;
    document.getElementById("test").innerHTML = "";
}


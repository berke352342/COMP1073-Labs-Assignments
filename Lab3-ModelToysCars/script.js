function ToyCar (
brand,
model,
year,
color,
price,
scale,
vehicleType,
material,
length,
width,
height,
doorsOpen,
hoodOpen,
trunkOpen,
packaging
 ){

this.brand =  brand;
this.model = model;
this.year = year;
this.color = color;
this.price = price;
this.scale = scale;
this.vehicleType = vehicleType;
this.material = material;
this.length  = length;
this.width = width;
this.height = height;
this.doorsOpen= doorsOpen;
this.hoodOpen = hoodOpen;
this.trunkOpen = trunkOpen;
this.packaging = packaging;

}


 // object instance
const car1 = new ToyCar(
"Plymouth",
"Road Runner Hardtop",
1970,
"Glossy Black",
21.99,
"1/24",
"Muscle Car",
"Diecast Metal",
"8.5 inches",
"3.25 inches",
"2.5 inches",
true,
true,
true,
"Window Box"

);


// html interaction
const button = document.getElementById("showCar");
const info = document.getElementById("carInfo");

button.addEventListener("click", function(){

info.innerHTML =

"Brand: " + car1.brand + "<br>" +
"Model: " + car1.model + "<br>" +
"Year: " + car1.year + "<br>" +
"Color: " + car1.color + "<br>" +
"Price: $" + car1.price + "<br>" +
"Scale: " + car1.scale + "<br>" +
"Vehicle Type: " + car1.vehicleType + "<br>" +
"Material: " + car1.material + "<br>" +
"Length: " + car1.length + "<br>" +
"Width: " + car1.width + "<br>" +
"Height: " + car1.height + "<br>" +
"Doors Open: " + car1.doorsOpen + "<br>" +
"Hood Open: " + car1.hoodOpen + "<br>" +
"Trunk Open: " + car1.trunkOpen + "<br>" +
"Packaging: " + car1.packaging;


});
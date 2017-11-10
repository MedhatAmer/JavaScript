// 1

function sum123() {
    
        console.log("We have an argument of three numbers 1, 5, 4 ");
        var y = 0;
        for (let i = 0; i < arguments.length; i++) {
    
            y += arguments[i];
        }
        console.log("and the sum of this three numbers is = " + y);
    }
    
    var result = sum123(1, 5, 4);

    // 2


var colorCar = function (color) {
    console.log( " an " + color + " car");
}

colorCar("yellow");

//-3


const objectList = { name: 'Mustang', type: '3', color: 'orange' };

function ObjectContent() {

    for (const key of Object.keys(objectList)) {
        console.log(key + ' = ' + objectList[key]);
    }
}
ObjectContent();

//-4

function vehicleType(color, code) {
    if (code === 1) {
        console.log(color + " Car");
    } else if (code === 2) {
        console.log(color + " motorbike");
    } else {
        console.log("Wrong Code !!");
    }
}

vehicleType("red", 1);

// - 5

console.log(3 == 3);


// - 6
var vehicle = function (age) {
    
        if (age == "white", 1, 5) {
            console.log("a white used Car");
    
        } else if (age == "black", 3, 1) {
            
            console.log("a black new caravan");
    
        } else {
            console.log("Wrong Code !!");
        }
        return;
    }
    
    vehicle("white", 1, 5);

    //-7

    var vehicles = ["car", "motorbike", "caravan", "bike"];
    var i;
    
    //-8

    var vehicles = ["car", "motorbike", "caravan", "bike"];
    var i;
    i = 2;
    console.log(vehicles[i]);

    // -9

    vehicle("green", 3, 1);

    //-10

function advertisement() {
    
        for (i = 0; i < vehicles.length; i++) {
    
            console.log("Amazing Joe's Garage, we service " + vehicles[i]);
        }
    
    }
    advertisement();

    // - 11

    vehicles.push("sport cars");
    
    advertisement();

    // - 12

    var emptyObject = {};
    console.log("this is an empty " + typeof emptyObject);
    
    // - 13 , 14

    const myTeachers = [{ name: "Philipp", modules: "HTML and CSS" },
     { name: "Ivana", modules: "HTML and CSS" }, { name: "Jim", modules: "JavaScript" },
      { name: "Unmesh", modules: "Cds" }]
    
      for (i = 0; i < myTeachers.length; i++){
        
            console.log(myTeachers[i]);
        }

        // - 15

        function talk(func) {
            max(func) 
        }
        function max() {
            console.log('Hi, max!');
        }
        talk(max);

        //- 16

    let x = [1,2,3];
    let y = [1,2,3];
    let z = y;
    
    console.log(x.length === y.length); 
    console.log(x.length == y.length);
    console.log(z.length === y.length); 
    console.log(z.length == y.length); 
    console.log(x.length == z.length);
   
    // -17

    let o1 = { foo: 'bar' };
    let o2 = { foo: 'bar' };
    let o3 = o2;

    console.log(o2.length === o3.length); 
    console.log(o3.length === o2.length); 

    // -18

    let bar = 42; 
    typeof typeof bar;
    
    bar = 42; 
    console.log(typeof bar);
    console.log(typeof typeof bar);

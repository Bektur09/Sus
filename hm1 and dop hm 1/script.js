let cat =  {
    name: "Lily",
    age: 5,
    first_children: {
        name: "Bi",
        age: 2
    },
    second_children: {
        name: "Masya",
        age:3,
    }
}

console.log(cat.name);
console.log(cat.age);
console.log(cat.first_children.name);
console.log(cat.first_children.age);
console.log(cat.second_children.name);
console.log(cat.second_children.age);

let cow = {
        name: "Kiki",
        age: 4,
        first_children:{
            name: "Rex",
            age: 1
        },
        second_children: {
            name: "Ru",
            age:2,
        }
    }

console.log(cow.name);
console.log(cow.age);
console.log(cow.first_children.name);
console.log(cow.first_children.age);
console.log(cow.second_children.name);
console.log(cow.second_children.age);

let car = prompt("114 умножить на 5");


if(car > 570) {
    alert("Ошибся")
} else if(car < 570) {
    alert("Ошибся")
} else{
    alert("Верно")
}
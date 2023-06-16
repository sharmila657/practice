let object = {
    name: "sharmila",
    address: "kapan",
    class: 12
}
console.log(object["name"]);
console.log(object["address"]);
for (let shar in object) {
    console.log(shar)
    
    // let val = object.shar;
    let val = object[shar];

    console.log(val)
    
}

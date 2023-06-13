let hello = "this is hello";
debugger
console.log("2:this is first global variable", hello)

function printHello(name) {
    
    // hello = "inside function"
    console.log(name)
    // console.log(hello)
    if (true) {
       var hello = "inside block"
        console.log(hello)
    }
    console.log(hello)
}
printHello("nepal")

console.log(hello)

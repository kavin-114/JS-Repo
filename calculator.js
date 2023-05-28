// Decalring global variable array
var arr = []
// Clearing screen
function clearScreen(){
    arr = []
    console.log(arr);
    document.getElementById("display").value = arr.join('')
}
// Entering "1" in display
function one(){
    var one = document.getElementById("one").value;
    arr.push(one)
    var display = document.getElementById("display").value = arr.join('')
    console.log(display);   
}
// Entering "2" in display
function two(){
    var two = document.getElementById("two").value;
    arr.push(two)
    var display = document.getElementById("display").value = arr.join('')
    console.log(display);   
}
// Entering "3" in display
function three(){
    var three = document.getElementById("three").value;
    arr.push(three)
    var display = document.getElementById("display").value = arr.join('')
    console.log(display);   
}
// Entering "4" in display
function four(){
    var four = document.getElementById("four").value;
    arr.push(four)
    var display = document.getElementById("display").value = arr.join('')
    console.log(display);   
}
// Entering "5" in display
function five(){
    var five = document.getElementById("five").value;
    arr.push(five)
    var display = document.getElementById("display").value = arr.join('')
    console.log(display);   
}
// Entering "6" in display
function six(){
    var six = document.getElementById("six").value;
    arr.push(six)
    var display = document.getElementById("display").value = arr.join('')
    console.log(display);   
}
// Entering "7" in display
function seven(){
    var seven = document.getElementById("seven").value;
    arr.push(seven)
    var display = document.getElementById("display").value = arr.join('')
    console.log(display);   
}
// Entering "8" in display
function eight(){
    var eight = document.getElementById("eight").value;
    arr.push(eight)
    var display = document.getElementById("display").value = arr.join('')
    console.log(display);   
}
// Entering "9" in display
function nine(){
    var nine = document.getElementById("nine").value;
    arr.push(nine)
    var display = document.getElementById("display").value = arr.join('')
    console.log(display);   
}
// Entering "0" in display
function zero(){
    var zero = document.getElementById("zero").value;
    arr.push(zero)
    var display = document.getElementById("display").value = arr.join('')
    console.log(display);   
}
//add method for "+" button
function add(){
    var display = document.getElementById("display").value
    arr.push("+")
    console.log(arr);
    document.getElementById("display").value = arr.join('')
    console.log(display);
}
//substract method for "-" button
function substract(){
    var display = document.getElementById("display").value
    arr.push("-")
    console.log(arr);
    document.getElementById("display").value = arr.join('')
    console.log(display);
}
//division method for "/" button
function division(){
    var display = document.getElementById("display").value
    arr.push("/")
    console.log(arr);
    document.getElementById("display").value = arr.join('')
    console.log(display);
}
//multi method for "*" button
function multi(){
    var display = document.getElementById("display").value
    arr.push("*")
    console.log(arr);
    document.getElementById("display").value = arr.join('')
    console.log(display);
}
//dot method for "." button
function dot(){
    var display = document.getElementById("display").value
    arr.push(".")
    console.log(arr);
    document.getElementById("display").value = arr.join('')
    console.log(display);
}
//equal method for displaying the result
function equal(){
    var display = document.getElementById("display").value
    arr = []
    let result = eval(display)
    console.log(result);
    arr.push(result)
    document.getElementById("display").value = arr
}
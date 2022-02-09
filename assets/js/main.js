// .length / 1.1
let firstName = "Marcel"
let lastName = "Jostes"
console.log(firstName.length)
console.log(lastName.length)
let fullName = "MarcelJostes"
console.log(fullName.length)

// .indexOf() / 1.2
const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."
console.log(txt.indexOf("h"))
console.log(txt.indexOf("Earth"))
console.log(txt.indexOf("Moon"))

// .search() / 1.3
var txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
console.log(txt2.search(";"))
console.log(txt2.search("green"))
console.log(txt2.search("blue"))

// .replace() / 1.7
const text = "Sam is good at codingschool";
console.log(text)
let text2 = text.replace("good", "bad")
console.log(text2)
let text3 = text.replace("Sam", "Susi")
console.log(text3)
let text4 = text.replace("codingschool", "tennis")
console.log(text4)
document.write(text + "<br>")
document.write(text2 + "<br>")
document.write(text3 + "<br>")
document.write(text4 + "<br>")

// .toLowerCase & .toUpperCase / 1.8
const text5 = "Sam is going to codingschool";
let text6 = text5.toUpperCase();
document.write(text6 + "<br>")

let text7 = text5.toLowerCase();
document.write(text7 + "<br>")

let text8 = text5.replace("Sam", "Sam".toUpperCase()).replace("codingschool", "codingschool".toUpperCase());
document.write(text8 + "<br>")

let text9 = text5.replace("Sam", "sam".toLowerCase()).replace("is", "is".toUpperCase()).replace("going", "going".toUpperCase()).replace("to", "to".toUpperCase());
document.write(text9 + "<br>")

const text10 = text5.split(" ");
for (var i = 0; i < text10.length; i++) {
    text10[i] = text10[i].charAt(0).toUpperCase() + text10[i].slice(1);
}
const text11 = text10.join(" ");
console.log(text11)
document.write(text11 + "<br>")
const myForm = document.getElementById("myForm")
var a =	document.getElementById("myName").value;

myForm.addEventListener("submit", (e) => {
e.preventDefault();
alert("+a+" + "	we have received your message. Thank you for reaching out to us");

});

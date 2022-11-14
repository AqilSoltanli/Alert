

let text;
var body = document.body
if (confirm("Press a button!") == true) {
  text = "You pressed OK!";
  body.style.backgroundColor='black'
} else {
  text = "You canceled!";
}
function createForm() {
  let h1Tag = document.createElement("h1");
  h1Tag.innerText = "Jelentkezés";
  let name = document.createElement("input");
  name.type = "text";
  name.placeholder = "Név";
  let email = document.createElement("input");
  email.type = "email";
  email.placeholder = "email cím";
  let box = document.createElement("input");
  box.type = "checkbox";
  let div = document.createElement("div");
  div.innerText = "Elolvastam és elfogadom az Adatkezelési Tájékoztatót";
  let btn = document.createElement("button");
  btn.innerText = "Elküld";
  btn.id = "button";

  document.getElementById("form").append(h1Tag, name, email, box, div, btn);
}

window.addEventListener("load", createForm);

import genSmile from "../assets/14704985_1748000432131857_8641446346689085440_n.jpeg";

const contact = () => {
  var contactDiv = document.createElement("div");
  var form = document.createElement("form");
  var formh1 = document.createElement("h1");
  var formDiv = document.createElement("div");
  var inputEmail = document.createElement("input");
  var inputSub = document.createElement("input");

  formh1.innerText = "SIGN UP FOR SPECIALS";
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "Enter your email");
  inputSub.setAttribute("type", "submit");

  formDiv.appendChild(inputEmail);
  formDiv.appendChild(inputSub);

  form.appendChild(formh1);
  form.appendChild(formDiv);

  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  p1.innerText = "1234 East Los Angeles Avenue";
  p2.innerText = "818-545-4554";

  contactDiv.appendChild(form);
  contactDiv.appendChild(p1);
  contactDiv.appendChild(p2);
  contactDiv.id = "contact-div";
  contactDiv.src = genSmile;

  // Add image to out existing div.
  // const genSmile = new Image();

  // element.appendChild();

  var nav = document.querySelector("nav");
  var foot = document.querySelector("footer");
  var homediv = document.getElementById("home");
  var menuDiv = document.getElementById("menu");

  if (content.contains(homediv)) {
    content.removeChild(homediv);
  }
  if (content.contains(menuDiv)) {
    content.removeChild(menuDiv);
  }

  content.appendChild(nav);
  content.appendChild(contactDiv);
  content.appendChild(foot);
};

export { contact };

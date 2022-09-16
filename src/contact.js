export function contact() {
  const contentDiv = document.querySelector("#content");

  // Remove any existing DOM children, if present
  contentDiv.replaceChildren();

  //DOM for Heading
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to G's";
  heading.classList.add("landing-title");
  contentDiv.appendChild(heading);

  // DOM for phoneImage
  const phoneImage = document.createElement("img");
  phoneImage.classList.add("image");
  phoneImage.src = "../src/assets/phone-classic.svg";
  phoneImage.alt = "Phone Icon";
  contentDiv.appendChild(phoneImage);

  // DOM for p tag for phoneImage
  const para1PhoneImage = document.createElement("p");
  para1PhoneImage.classList.add("contact-copy");
  para1PhoneImage.textContent = "Call us!";
  contentDiv.appendChild(para1PhoneImage);

  // DOM for emailImage
  const email = document.createElement("img");
  email.classList.add("image");
  email.src = "../src/assets/email.svg";
  email.alt = "Email Icon";
  contentDiv.appendChild(email);

  // DOM for p tag for emailImage
  const para2EmailImage = document.createElement("p");
  para2EmailImage.classList.add("contact-copy");
  para2EmailImage.textContent = "Email us at reserve@gs.com";
  contentDiv.appendChild(para2EmailImage);

  // DOM for addressImage
  const topImage = document.createElement("img");
  topImage.classList.add("image");
  topImage.src = "../src/assets/map-marker.svg";
  topImage.alt = "Map Icon";
  contentDiv.appendChild(topImage);

  // DOM for p tag for addressImage
  const para3AddressImage = document.createElement("p");
  para3AddressImage.classList.add("contact-copy");
  para3AddressImage.textContent = "Our address us: !";
  contentDiv.appendChild(para3AddressImage);
}

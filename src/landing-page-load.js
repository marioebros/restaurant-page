export function landingPageLoad() {
  const contentDiv = document.querySelector("#content");

  // Remove any existing DOM children, if present
  contentDiv.replaceChildren();

  //DOM for Heading
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to G's";
  heading.classList.add("landing-title");
  contentDiv.appendChild(heading);

  const mainPic = document.createElement("img");
  mainPic.classList.add("image");
  mainPic.src = "../src/assets/kayleigh-harrington-yhn4okt6ci0-unsplash.jpeg";
  mainPic.alt = "Image of G's Restaurant";
  contentDiv.appendChild(mainPic);

  const para1 = document.createElement("p");
  para1.classList.add("landing-page-copy");
  para1.textContent = "Welcome to G's. We're glad you could make it.";
  contentDiv.appendChild(para1);
}

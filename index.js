const DisplayContainer = document.getElementById("DisplayingContainer");
const heading = document.getElementById("heading");
const HomeElement = document.getElementById("Home");
const AboutElement = document.getElementById("About");

HomeElement.addEventListener("click", function(){
    DisplayContainer.textContent = "";
    const h1El = document.createElement("h1")
    h1El.textContent = "Welcome to Js Home Page"
    DisplayContainer.appendChild(h1El)
})

AboutElement.addEventListener("click", function(){
    DisplayContainer.textContent = "";
    const h1El = document.createElement("h1");
    const h2El = document.createElement("h2");
    h1El.textContent = "Welcome to About Js page";
    h2El.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    DisplayContainer.appendChild(h1El);
    DisplayContainer.appendChild(h2El)
})


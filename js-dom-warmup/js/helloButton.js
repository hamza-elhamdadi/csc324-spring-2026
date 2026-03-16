function sayHello(){
	alert("Hello!");
}

function createButton(){
    // TODO: create a JavaScript DOM Element that represents the following HTML and append it to the <main> element
    
    //              <button class="hello-button" type="button">Say Hello</button>
    const button = document.createElement("button"); // <button></button>
    button.classList.add("alert-button"); // <button class="alert-button"></button>
    button.type = "button"; // <button class="alert-button" type="button"></button>
    button.textContent = "Say Hello";

    button.addEventListener("click", sayHello);

    document.querySelector("main").appendChild(button);

} 


export default createButton;
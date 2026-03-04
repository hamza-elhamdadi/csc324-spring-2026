function growPlant(event) {
    // TODO: Change the source of the image to "./images/tree.png"
    // TODO: Change the motivation text to something else (e.g., "Hooray! You did it!") 
    // TODO: Remove the button from the HTML

    const motivationText = document.querySelector("#motivation");
    motivationText.textContent = "Hooray! You did it!";

    const image = document.querySelector("#plant");
    image.src = "./images/tree.png";

    event.currentTarget.remove();
    
}

function setupButton() {
    // TODO: Add the "pretty-button" class to the button, and remove the paragraph that says to do so.
    // TODO: Add an event listener to the button. Use growPlant as the event handler.
    
    const button = document.querySelector("#grow-plant");
    button.addEventListener("click", growPlant);

    button.classList.add("pretty-button");

    document.querySelector("#remove-this").remove();

}

export default setupButton;
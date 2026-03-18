class AlertButton {
    constructor(containerElement, message){
        this.message = message;

        // console.log(this);

        const HTMLButton = document.createElement("button"); // <button></button>
        HTMLButton.classList.add("alert-button"); // <button class="alert-button"></button>
        HTMLButton.type = "button"; // <button class="alert-button" type="button"></button>
        HTMLButton.textContent = "Alert: " + message;

        this.sendAlert = this.sendAlert.bind(this);
        HTMLButton.addEventListener("click", this.sendAlert);

        containerElement.appendChild(HTMLButton);
    }

    sendAlert(){
        console.log(this);
        alert(this.message);
    }
}

export default AlertButton;


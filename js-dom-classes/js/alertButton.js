class AlertButton {
    constructor(containerElement, message){
        this.message = message;

        const button = document.createElement("button"); // <button></button>
        button.classList.add("alert-button"); // <button class="alert-button"></button>
        button.type = "button"; // <button class="alert-button" type="button"></button>
        button.textContent = "Alert: " + message;

        this.sendAlert = this.sendAlert.bind(this);


        button.addEventListener("click", this.sendAlert);

        containerElement.appendChild(button);
    }

    sendAlert(){
        alert(this.message);
    }
}

export default AlertButton;


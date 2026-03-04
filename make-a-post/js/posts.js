function addPost(post) {
    // TODO: Select the div with the id "post-container"
    // TODO: Make the object "post" a child of the post-container div
    const div = document.createElement("div");
    div.classList.add("post");
    

    const image = document.createElement("img");
    image.classList.add("profile-pic");
    image.src = "images/tree-icon.png";

    div.appendChild(image);


    const paragraph = document.createElement("paragraph");
    paragraph.textContent = post;

    div.appendChild(paragraph);

    document.querySelector("#post-container").appendChild(div);



    
}

function createPost(postText, profilePicImagePath) {
    // TODO: create a post like the example post using the JavaScript DOM.
    // Note: to create an element use document.createElement("tag-name")
    //       to add a class to an element use .classList.add()
    //       to set an attribute (e.g., 'src'), .attribute = "valueToSet"
    //       to make one element a child of another, use parentElement.appendChild(childElement)

}

function postHandler(event){
    // TODO: get the input value and call createPost and addPost above
    event.preventDefault();

    const textInput = document.querySelector("#post-body");

    addPost(textInput.value);

    textInput.value = "";
}

function setup() {
    // TODO: Select the form with id="add-post" and add a "submit" event listener to it.
    //       The event listener should call postHandler above.

    document.querySelector("#add-post").addEventListener("submit", postHandler);
}

export default setup;
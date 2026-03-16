function addPost(post) {
    // TODO: Select the div with the id "post-container"
    // TODO: Make the object "post" a child of the post-container div

    document.querySelector("#post-container").appendChild(post);
}

function createPost(postText, profilePicImagePath) {
    // TODO: create a post like the example post using the JavaScript DOM.
    // Note: to create an element use document.createElement("tag-name")
    //       to add a class to an element use .classList.add()
    //       to set an attribute (e.g., 'src'), .attribute = "valueToSet"
    //       to make one element a child of another, use parentElement.appendChild(childElement)
    const div = document.createElement("div");
    div.classList.add("post");
    

    const image = document.createElement("img");
    image.classList.add("profile-pic");
    image.src = profilePicImagePath;

    div.appendChild(image);


    const paragraph = document.createElement("p");
    paragraph.textContent = postText;

    div.appendChild(paragraph);

    return div;
}

function postHandler(event){
    // TODO: get the input value and call createPost and addPost above

    const textInput = document.querySelector("#post-body");

    const post = createPost(textInput.value, "images/tree-icon.png");
    addPost(post);

    textInput.value = "";

    event.preventDefault();
}

function setup() {
    // TODO: Select the form with id="add-post" and add a "submit" event listener to it.
    //       The event listener should call postHandler above.

    document.querySelector("#add-post").addEventListener("submit", postHandler);
}

export default setup;
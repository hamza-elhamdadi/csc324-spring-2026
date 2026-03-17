class SocialMediaPost {
    constructor(parentElement, postText, profilePicURL){
        // this should have a reference to the parentElement
        // a reference to the postText
        // a reference to the profilePicURL
        this.parentElement = parentElement;
        this.postText = postText;
        this.profilePicURL = profilePicURL;

        // create the post div and add it to the parentElement
        // use this.div
        this.div = document.createElement("div");
        this.div.classList.add("post");

        const image = document.createElement("img");
        image.classList.add("profile-pic");
        image.src = this.profilePicURL;
        this.div.appendChild(image);

        const p = document.createElement('p');
        p.textContent = postText;
        this.div.appendChild(p);

        this.parentElement.appendChild(this.div);

        
    }
}



export default SocialMediaPost;


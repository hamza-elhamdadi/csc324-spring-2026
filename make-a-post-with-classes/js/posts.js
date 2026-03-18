class SocialMediaPost {
    constructor(parentElement, postText, profilePicURL){
        // save parentElement to the object
        this.parentElement = parentElement;
        // save postText to the object
        this.postText = postText;
        // save profilePicURL to the object
        this.profilePicURL = profilePicURL;

        // create the div as an instance variable, give it the class "post"
        this.div = document.createElement("div");
        this.div.classList.add("post");

        // create the profile pic image and add it to the div instance variable
        const image = document.createElement("img");
        image.classList.add("profile-pic");
        image.src = this.profilePicURL;
        this.div.appendChild(image);

        // create the post text paragraph and add it to the div instance variable
        const p = document.createElement('p');
        p.textContent = postText;
        this.div.appendChild(p);

        // add the div to the parent element
        this.parentElement.appendChild(this.div);

    }
}

class App {
    constructor(){
        // set up a reference to the post container in the html
        this.postContainer = document.querySelector("#post-container");
        // set up a reference to the text input
        this.textInput = document.querySelector('#post-body');
        // set up an array variable that will hold the posts 
        this.posts = [];

        this.addPost = this.addPost.bind(this);
        this.sortPosts = this.sortPosts.bind(this);

        document.querySelector("#add-post").addEventListener('submit', this.addPost);
        document.querySelector("#sort").addEventListener("click", this.sortPosts);
    }

    addPost(event){
        // this method should create an instance of a SocialMediaPost class (with the text from the text input)
        // with the parent element of the SocialMediaPost being the post container

        console.log("test");

        const post = new SocialMediaPost(this.postContainer, this.textInput.value, "images/tree-icon.png");
        this.posts.push(post);
        this.textInput.value = "";
        
        event.preventDefault();
    }

    sortPosts(){

        function sortComparator(post1, post2){
            return post1.postText.localeCompare(post2.postText);
        }

        this.posts.sort(sortComparator);
        this.refreshPosts();
        // console.log(this.posts);
    }

    refreshPosts(){
        // iterate through the posts array
        // remove the post and add it back in order to the DOM
        for(const post of this.posts){
            post.div.remove();
            this.postContainer.appendChild(post.div);
        }
    }

}


export default App;


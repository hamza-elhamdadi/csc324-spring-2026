function setParagraphText() {
    // TODO: set the text of the first paragraph
    // TODO: set the text of all of the paragraphs
    // TODO: set the text of the third paragraph

    const firstParagraph = document.querySelector("p");

    firstParagraph.textContent = "We changed this paragraph with JavaScript";
    

    function setSingleParagraph(paragraph){
        paragraph.textContent = "We changed all of the paragraphs";
    }

    const allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach(setSingleParagraph);

    document.querySelector("#third-paragraph").textContent = "Hello"

}

function createNewParagraph() {
    // TODO: create a new paragraph and add it to the <main>

    const paragraph = document.createElement("p");
    paragraph.textContent = "Example";

    document.querySelector("main").appendChild(paragraph);
}

export { setParagraphText, createNewParagraph };


/* Exercise 1 */

// const groupMembers = [
//     {
//         name: "Hamza",
//         favMovies: ["Perfect Days", "I saw the TV Glow", "Annihilation", "Talk to Me", "Everything Everywhere All At Once"]
//     },
//     {
//         name: "Dylan",
//         favMovies: []
//     }
// ]

// for(let i = 0; i < groupMembers.length; i++){
//     if (groupMembers[i].favMovies.length === 0)
//         console.log(`${groupMembers[i].name} doesn't really watch movies.`);
//     else 
//         console.log(`${groupMembers[i].name}'s favorite movies are ${groupMembers[i].favMovies.join(", ")}`);

//     console.log(); // new line
// }

// for(let member of groupMembers){
//     if (member.favMovies.length === 0)
//         console.log(`${member.name} doesn't really watch movies.\n`); // can also use newline character like in Java
//     else 
//         console.log(`${member.name}'s favorite movies are ${member.favMovies.join(", ")}\n`); 
// }

/* Exercise 2 */

const createMember = function(name, favMovies){
    return {
        name: name,
        favMovies, favMovies
    }
}

const groupMembers = [];

groupMembers.push(createMember('Hamza', ['Perfect Days', 'I saw the TV Glow', 'Annihilation', 'Talk to Me', 'Everything Everywhere All At Once']));
groupMembers.push(createMember('Dylan', []));

console.log(groupMembers);

/* Exercise 2 */

const whoLikes = (groupMembers, movie) => {
    const membersWhoLikeMovie = [];

    for(const member of groupMembers){
        if (member.favMovies.includes(movie)) {
            membersWhoLikeMovie.push(member);
        }
    }

    return membersWhoLikeMovie;
}

// test a movie that is in one group member's favMovies array
// should be an array with only Hamza
console.log(whoLikes(groupMembers, 'Perfect Days'));

// test a movie that is in neither group member's favMovies array
// should be an empty array
console.log(whoLikes(groupMembers, 'Moana 2'));

// test a movie that is in multiple group member's favMovies array
for (let member of groupMembers){
    member.favMovies.push('Wake Up Dead Man'); // adding 'Wake Up Dead Man' to both group member's favMovies array
}
// should be a copy of the groupMembers array in this example
console.log(whoLikes(groupMembers, 'Wake Up Dead Man'));
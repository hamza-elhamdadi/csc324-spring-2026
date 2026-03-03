import {getProductReviews} from "./getProductReviews.js";                                       // this imports the function from the "./getProductReview.js" module

const reviews = getProductReviews();                                                              // call that function, which returns an object

/* Exercise 1 */

// reviews.forEach(function(rev) {                                                                   // for each element in the reviews array 
//     console.log(`${rev.user} rated ${rev.product} ${rev.rating}/10 and said "${rev.body}"`)       // print out this statement
// });

/* Exercise 2 Part 1 */

function getProduct(review) {                                                                     // create a callback function that returns
     return review.product;                                                                       // the product property of a review object
}

const products = reviews.map(getProduct);                                                         // map creates a copy of the reviews array 
// console.log(products)                                                                             // with the getProduct function called on each element
                                                                                      
/* Exercise 2 Part 2 */

function isReviewByAsh23(review) {                                                                // create a callback function that returns true 
     return review.user === "ash23";                                                              // if the review's user property is "ash23", and false otherwise
}

const ash23Reviews = reviews.filter(isReviewByAsh23);                                             // if isReviewByAsh23(review) returns true, then
// console.log(ash23Reviews);                                                                        // .filter() will include the review in the returned array


/* Exercise 2 Part 3 */

function isReviewOfHairbrush(review) {                                                            // create a callback function that returns true  
    return review.product === "hairbrush";                                                        // if the review's product property is "hairbrush", and false otherwise
}

const hairbrushReviews = reviews.filter(isReviewOfHairbrush);                                     // if isReviewOfHairbrush(review) returns true, then
// console.log(hairbrushReviews);                                                                    // .filter() will include the review in the returned array

/* Exercise 2 Part 4 */

function addToAccumulator(avgRating, review, _, reviewsArray) {                                   // avgRating is the accumulator, review is the current review object, reviewsArray is the entire array of review objects
    return avgRating + review.rating / reviewsArray.length;                                       // the function returns the next value of the accumulator avgRating
}                                                                                                 

const avgRating = reviews.reduce(addToAccumulator, 0);                                            // .reduce() calls the addToAccumulator callback function on each element of the array
// console.log(avgRating);                                                                           // the return value becomes the next state of the accumulator, the initial value of accumulator is set to 0


/* Exercise 3 Part 1 */

function isFirstOccurrence(element, index, array){                                                // when this function is used on line 55, element is the current product string, index is the index of the current product string in the array, array is the entire array of product strings
    return array.indexOf(element) === index;                                                      // if element is the first occurrence of the product string in the array, return true, otherwise return false
}

const productsNoDuplicates = reviews.map(getProduct).filter(isFirstOccurrence);                   // .map(getProduct) returns the array of product strings (see Exercise 2 Part 1 above)
// console.log(productsNoDuplicates)                                                                 // then .filter(isFirstOccurrence) includes only the first occurrence of the product string 

/* Exercise 3 Part 2 */

function createRatingObjectByProduct(productName){                                                // create a callback function that takes in a productName and returns an object containing the product name and the average rating for that product
    function isReviewOfProduct(review){                                                           // nested callback function that takes in a review object
        return review.product === productName;                                                    // and returns true if review.product is the same as the productName parameter to the outer function (this is a more general version of the function isReviewOfHairbrush in Exercise 2 Part 3)
    }

    return {                                                                                      // return an object where
        name: productName,                                                                        // name key is set to productName
        avgRating: reviews.filter(isReviewOfProduct).reduce(addToAccumulator, 0)                  // avgRating key is set with chaining: .filter(isReviewOfProduct) returns an array of the objects that match productName, .reduce(addToAccumulator) takes the average of the ratings in that filtered array
                                                                                                  // the method chaining here combines Exercise 2 Parts 2 and 3
    }
}

const avgRatingByProduct = productsNoDuplicates.map(createRatingObjectByProduct);                 // map the productsNoDuplicates array to an array of product rating objects using the callback function above.
// console.log(avgRatingByProduct);



/* Exercise 3 Part 3 */

function getAverageRatingsByKey(reviews, key) {
    function getKey(review) {                                                                         // more general version of getProduct
        return review[key];                                                                           // since key is a string, we use [] instead of .   using .key would look for a key called "key" in the object (which doesn't exist)
    }

    const categories = reviews.map(getKey).filter(isFirstOccurrence);                                 // this is like productsNoDuplicates from Exercise 3 Part 1 (calling it categories to be more general)
    
    function createRatingObjectByCategory(category){                                                  // create a callback function that takes in a category and returns an object containing the category name and the average rating for that category
        function isReviewOfCategory(review){                                                          // nested callback function that takes in a review object
            return review[key] === category;                                                          // and returns true if review[key] is the same as the category parameter to the outer function (this is a more general version of the function isReviewOfHairbrush in Exercise 2 Part 3)
        }

        return {                                                                                      // return an object where
            name: category,                                                                           // name key is set to category
            avgRating: reviews.filter(isReviewOfCategory).reduce(addToAccumulator, 0)                 // avgRating key is set with chaining: .filter(isReviewOfCategory) returns an array of the objects that match the category, .reduce(addToAccumulator) takes the average of the ratings in that filtered array
                                                                                                      // the method chaining here combines Exercise 2 Parts 2 and 3
        }
    }

    return categories.map(createRatingObjectByCategory);                                              // map the categories array to an array of rating objects by category using the callback function above.
}

const avgRatingsByProduct2 = getAverageRatingsByKey(reviews, 'product');
console.log(avgRatingsByProduct2);

const avgRatingsByUser = getAverageRatingsByKey(reviews, 'user');
console.log(avgRatingsByUser);
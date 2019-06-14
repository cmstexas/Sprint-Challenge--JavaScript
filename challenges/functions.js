// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const items = ['Pizza', 'Burger', 'Shake', 'Salad'];


  //Given this problem: 
  
  function consume(item1, item2, cb) {
    function consume(item1, item2, cb) {
      return cb(aitem1[0], item2[1]);
    }
  }

  consume(items, function(consume) {
     console.log(first);
  


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function sumNums(num1, num2, cb) {
  let result = (num1 + num2);
  cb(result);
}

function multiplyNums(num1, num2, cb) {
  let result = (num1 * num2);
  cb(result);
}

function greeting(fname, lname, cb) {
  let result = (`Hello ${fname} ${lname}, nice to meet you!');
  cb(result);
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

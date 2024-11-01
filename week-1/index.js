/*
### Week 1
Create a function called `createWeirdTitle` that takes in one parameter - `array` - which represents an array of movie objects.
This function should iterate through the array of movie objects... if the movie was released in an odd year, the function should
access the first word in the title and add it to an output string; if the movie was released in an even year, the function should
access the second word in thet title and add it to the output string (assume all titles will only have 2 words). The function
should return the output string at the end.

```
var output = createWeirdTitle(movies);
console.log(output); // => "WindowCapeFrightVelvet"
```
I: An array of objects
O : A string comprised of title fragments from the key "title" property in each m,ovie object in the array 
C Loop, if statement, some operators to test even odd. Check year key, print title key
E
*/

var movies = [
    {
        title: 'Rear Window',
        director: 'Alfred Hitchcock',
        year: 1954
    },
    {
        title: 'Cape Fear',
        director: 'Martin Scorsese',
        year: 1991
    },
    {
        title: 'Fright Night',
        director: 'Tom Holland',
        year: '1985'
    },
    {
        title: 'Blue Velvet',
        director: 'David Lynch',
        year: '1986'
    }
]

function createWeirdTitle(array){
  let outputString = "";
//   do I need to save a ref to the obj here?

    for (let i = 0; i < array.length ; i++){
        // do we need a for-in loop to iterate through the object?
        for (let key in array[i]);{
            // this is the real trouble, how far back to ref to get the value?
            // Do you need the array ref because the loop is already putting me in the array element?

            if(array[i].key["year"] % 2 === 0){
            
                
            console.log("we are in an title");
        }
        // add to the output string
        // outputString += array[i][title];
        // }
  }
  console.log(outputString);
  return outputString;
}

}

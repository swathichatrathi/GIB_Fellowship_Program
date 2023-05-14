/* Write a js program to print downward triangle star pattern as follows 

*****
****
***
**
*

*/

// code 

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}


//output 

*****
****
***
**
*

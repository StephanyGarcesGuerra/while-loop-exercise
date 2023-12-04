// let x=0
// while (x> 0 && x<= 100) {
//     if (x % 3 == 0) {
//         console.log('Fizz');}
//     if (x % 5 == 0) {
//         console.log("Buzz");}
//     if (x % 3 == 0 && x%5==0){
//         console.log("Fizz Buzz");}
//     else {console.log(x);}
//     x++
//     }
    
   console.log("==== PART 1 Fizz and Buzz ====");
    for (let i = 1; i <= 100; i++) {
//         // console.log(i);
        if ( i % 3 == 0 && i % 5 == 0) {console.log(i && "Fizz and Buzz");}
        else if (i % 3 == 0){console.log( i && "Fizz");}
        else if (i % 5 == 0) {console.log(i &&"Buzz");}
        else {console.log(i);}
    }

    console.log("==== PART 2 Prime Time ====");
    for (let n = 5; n <= 20; n++) {
        let isPrime = true;

        for(let i = 2; i < n; i++){
            if (n % i == 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            console.log(`${n} is a prime number.`);
        }
        
    }
console.log("==== PART 3 Feeling Loopy ====");

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26\n"


let currentCell = 1;
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

// loop over the string
for (let i = 0; i < csv.length; i++) {
    // console.log(csv[i]);
 
    // store each cell in a variable

    if (csv[i] === ","){
        // if is a comma move to next cell
        currentCell++

    } else if (csv[i] === "\n") {
        // if is a \n move to next row
        console.log(cell1, cell2, cell3, cell4);
        currentCell = 1;
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';

    } else {
        if (currentCell === 1) {
            cell1 += csv[i];
        } else if (currentCell === 2) {
            cell2 += csv[i]
        } else if (currentCell === 3) {
            cell3 += csv[i];
        } else if (currentCell === 4) {
            cell4 += csv[i];
        }
    }

}
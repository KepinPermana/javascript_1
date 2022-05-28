/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n){

    if (Math.sqrt(n)) {
        return (n[0] + n[1] + n[2] + n[3]);
        
    }else if (isNaN(n)){
        return"harusnumber";
    }

    // Math.sqrt((n[2] + n[3]) *
    // (n[0] + n[1]) *
    // (n[1] + n[3]) *
    // (n[0] + n[2]));

//  return (n[0] + n[1] + n[2] + n[3])
   
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...
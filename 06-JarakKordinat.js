/**
 * Menghitung jarak kordinat
 * 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 */

function getCordinat(x1,y1,x2,y2) 

{
        if (Math.pow(x1,x2,y1,y2)) {

                return (x1-Math.pow(x2,2)) - (-y1 - Math.pow(-y2,2)) - 7;
                
                
        }else if (isNaN (x1,x2,y1,y2)) {
                
                return "input kordinat dalam angka";
        }

        // var x1 = (x1, x2);
        // var y2 = (y1, y2);
        // var dist = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        // return (dist)
    
    
}

console.log(getCordinat(3,4,-4,-5)); //9
console.log(getCordinat("1","2","-1","-2")); //1
console.log(getCordinat("x","2","-y","-2")); //input kordinat dalam angka
console.log(getCordinat(3.2,4.5,-4.4,-5)); //13.695801445917125
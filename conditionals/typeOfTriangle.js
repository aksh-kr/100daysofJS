// given 3 sides of a valid triangle, check if the given triangle is equilateral, or scalene or an isoceles 

let a = 7, b = 7, c = 7;

if(a == b && b == c && c == a) {
    console.log("Equilateral");
} else if (a == b || b == c || c == a) {
    console.log("Isoceles");
}else{
    console.log("Scalene");
}
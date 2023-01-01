// given 3 sides of a triangle, find if a valid triangle can be formed

let a = 7, b = 10, c = 3;

if(a+b>c && b+c>a && c+a>b){
    console.log("Valid Triangle");
}else{
    console.log("Invalid Triangle")
}

// sum of two sides should be greater than the third side
// console.log("--------------------------------------ans-1-----------------------------------")
// let i;
// let count = 0;
// for(i=0; count<10; i++){
//     if(i % 2 == 0){
//         count++;
//         console.log(i);
//     }
//     i++;
// }

// console.log("--------------------------------------ans-2-----------------------------------")
// let i;
// let sum = 0;
// for(i=1; i<=30; i++){
//     if(i % 3 == 0){
//         sum += i;
//         console.log(sum);
//     }

// }

// console.log("--------------------------------------ans-3-----------------------------------")
// let x;
// for(x=1; x<=50; x++){
//     if(x % 5 == 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(x);
//     }
// }

// console.log("--------------------------------------ans-4-----------------------------------")
// let a;
// for(a=1; a<=10; a++){
//     console.log("4 * " + a + " = "  + 4 * a);
// }

// console.log("--------------------------------------ans-5-----------------------------------")
// let i;
// let product = 1;
// for(i=1; i<=5; i++){
//     product *= i;
//     console.log(product);
// }

// console.log("--------------------------------------ans-6-----------------------------------")
// let num;
// let i;
// for(num=2; num<=50; num++){
//     let isPrime = true;

//     for(i=2; i<num; i++){
//         if(num % i == 0){
//             isPrime = false;
//             break;
//         }
//     }

//     if(isPrime){
//         console.log(num);
//     }
// }

// console.log("--------------------------------------ans-7-----------------------------------")
// let i;
// let arr = [10, 20, 30, 40];
// let arr1 = arr.reverse();
// console.log(arr1);

// console.log("--------------------------------------ans-8-----------------------------------")
// let x;
// for(x=1; x<=100; x++){
//     if(x == 50){
//         continue;
//     }
//     console.log(x);
// }

// console.log("--------------------------------------ans-9-----------------------------------")
// let a;
// let product = 1;
// for(a=1; a<=6; a++){
//     product *= a;
//     console.log(product);
// }

// console.log("--------------------------------------ans-10-----------------------------------")
// let i;
// let j;
// for(i=1; i<=4; i++){
//     let str = " ";
//     for(j=1; j<=i; j++){
//         str += "*";
//     }
//     console.log(str);
// }

// console.log("--------------------------------------ans-11-----------------------------------")
// let num = String (12345);
// let sum = 0;
// for(let i=1; i<=num.length; i++){
//     sum += i;
//     console.log(sum);
// }

// console.log("--------------------------------------ans-12-----------------------------------")
// let flag = false;
// let target = 25;
// for(let i=0; i<(target/2); i++){
//     if(i * i == target){
//         flag = true;
//     }
// }

// if(flag){
//     console.log("Perfect square");
// }
// else{
//     console.log("not a perfect square");

// }

// console.log("--------------------------------------ans-13-----------------------------------")
// let num = String (123);
// let sum = 0;
// for(let i=1; i<=num.length; i++){
//     sum += i;
//     console.log(sum);
// }

// console.log("--------------------------------------ans-14-----------------------------------")
// let i=10;
// while(i <= 100){
//     console.log(i);
//     i += 10;
// }

// console.log("--------------------------------------ans-15-----------------------------------")
// let a=0;
// let b=1;
// console.log(a, b);
// let c=0;
// while(c<50){
//     c = a + b;
//     console.log(c);
//     a=b;
//     b=c;
// }

// console.log("--------------------------------------ans-16-----------------------------------")
// let x=10;
// while(x >= 0){
//     console.log(x);
//     x--;
// }

// console.log("--------------------------------------ans-17-----------------------------------")
// let str = "Hello World";
// let i=0;
// let count=0;
// while(i < str.length){
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//         count++;
//     }
//     i++;
// }
// console.log(count);

// console.log("--------------------------------------ans-18-----------------------------------")
// let i=1;
// while(i < 500){
//     console.log(i);
//     i*=2;
// }
// console.log(i);

// console.log("--------------------------------------ans-19-----------------------------------")
// let a=1;
// do{
//     console.log(a);
//     if(a == 7){
//         break;
//     }
//     a++;
// }while(a<=10)

// console.log("--------------------------------------ans-20-----------------------------------")
// let x=1;
// do{
//     if(x % 2 == 0){
//         console.log(x);
//     }
//     x++;
// }while(x < 20)

// console.log("--------------------------------------ans-21-----------------------------------")
// let i=50;
// do{
//     console.log(i);
//     i -= 2;
// }while(i>=10)

// console.log("--------------------------------------ans-22-----------------------------------")
// let a = 1;
// do{
//     console.log(a);
//     a *= 2;
// }while(a < 1000)
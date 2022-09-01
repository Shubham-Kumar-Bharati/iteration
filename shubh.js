// 1.Find the number of digits
const Find_Digits = (N) => 
{
  let sum=0;
	 while(N!==0){
	   sum=sum+1;
	   N=parseInt(N/10);
	 }
	 return sum;
};


// 2.Find the Fives
const Find_Five = (n) => 
{
 let sum=0;
 while(n!==0){
   if(n%10==5){
     sum=sum+1;
   }
   n=parseInt(n/10);
 }
 return sum;
};


// 3.Find Sum
const findSum = (n) => {
    let sum=0;
    for(let i=2;i<=n;i++){
    if(i%2==0){
      sum=sum+i;
    }
    }
    return sum;
  };


//   4.Find the sum of the digits of a given number
const Number_Sum = (n) => 
{
	let sum=0;
	while(n!==0){
	  sum=sum+(n%10);
	  n=parseInt(n/10);
	}
	return sum;
};



// 5.Print the Odds.
const Print_Odd = (n) => 
{
  console.log('2');
	 for(let i=2;i<=n;i++){
	   if((i%2)!==0){
	     console.log(i);
	   }
	 }
};



// 6.Print the Pattern.
const Print_pattern = (N) => 
{
   let i,j
   for(i=0; i<N; i++) {
     let multiple=""
     for(j=0; j<=i; j++) {
       multiple=multiple+'*'
     }
     console.log(multiple)
   }
};


// 7.Check whether a Number is a prime or not.
const Prime_Check = (n) => 
{
	 let i;
	 for(i=2;i<=(n-1);i++){
	   if(n%i==0){
	     break;
	   }
	 }
	   if(i==n){
	     return "YES"
	   }else{
	     return "NO"
	   }
	 
};


// 8.Print Numbers
const printNumbers = (n) => {
  
    var result=''
    for(let i=1;i<=n;i++){
      result=result+i+' ';
    }
    console.log(result)
    };


// 9.Print the Table
const Print_Table = (N) => 
{
	for (let i=1;i<=10;i++) {
  console.log(N + " * " + i + " = " + N*i);
}
};    
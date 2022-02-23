/*,1 anonymous function & IIFE*/

const arr= [1,2,3,4,5,6,7,8,9];
const odd = arr.filter(number =>{
    return number %2 ! == 0;
} );
//2 Convert all the strings to title caps in a string array//


<script>
function titleCase(str) {
returnstr.toLowerCase().split(' ').map(function(word) {
	return(word.charAt(0).toUpperCase() + word.slice(1));
}).join(' ')};

document.write(titleCase("converting string to titlecase"));
</script>
//Sum of all numbers in an array//


const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum)
//Return all the prime numbers in an array//


var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);

//Return all the palindromes in an array//
{
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++)
    {
        if (str[i] != str[len - 1 - i ])
            return false;
    }
    return true;
}


//Return median of two sorted arrays of the same size//
{
    var i = 0; /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
            if (ar1[i] <= ar2[j])
            {
                m1 = m2; 
                m2 = ar1[i];
                i++;
            }
            else
            {
                m1 = m2; 
                m2 = ar2[j];
                j++;
            }
        }
        //Remove duplicates from an array//
        function removeDuplicates(arr, n)
{
    if (n==0 || n==1)
    return n;
    if (n==0 || n==1)
    return n;
    var j = 0;
    for (var i=0; i<n-1; i++)
    if (arr[i] != arr[i+1])
    temp[j++] = arr[i];
    for (var i=0; i<j; i++)
    arr[i] = temp[i];

return j;
}var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
var n = arr.length;
for (var i=0; i<n; i++)
document.write( arr[i]+" ");
}
//Rotate an array by k times//
function RightRotate(a, n, k)
{for (let i = 0; i < n; i++) {
    if (i < k) {
        document.write(a[n + i - k] + " ");
    }
    else { document.write((a[i - k]) + " ");
}
}
document.write("<br>");
}

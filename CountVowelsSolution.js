//Count Vowels

var str, vowels, result, totalSum, a, aSum, e, eSum, i, iSum, o, oSum, u, uSum;

str = "ripE younG bAnana";
vowels = /[aeiou]/gi;
result = str.match(vowels);
totalSum = result.length;

a = /[a]/gi;
aSum = str.match(a).length;

e = /[e]/gi;
eSum = str.match(e).length;

i = /[i]/gi;
iSum = str.match(i).length;

o = /[o]/gi;
oSum = str.match(o).length;

u = /[u]/gi;
uSum = str.match(u).length;

console.log("Total Vowels: " + totalSum + " [" + "A = " + aSum + "," + " E = " + eSum + "," +" I = " + iSum + "," +" O = " + oSum + "," + " U = " + uSum + "]");
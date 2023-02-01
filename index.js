var hehe = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20];
var kiri = 1;
var perper = ((hehe.length/2) /2 * 3)
for(let i = 0 ; i < perper; i++)
{
  if(i < ((hehe.length / 2)/2)){
		console.log(hehe[i]+ "->" + hehe[((hehe.length / 2) - 1) - i] + "->" + hehe[i])
    if(i == (((hehe.length / 2)/2) -1))
    {
      i = hehe.length / 2;
    }
	}

  if(i > ((hehe.length / 2)/2)){
   console.log(hehe[i] + "->" + hehe[(hehe.length) - kiri] + "->"+hehe[(hehe.length / 2) - kiri])
   kiri++;
  }
}

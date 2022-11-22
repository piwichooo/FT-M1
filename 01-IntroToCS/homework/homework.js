'use strict';

function BinarioADecimal(string) 
{
   let sum = 0;

   for (let i = 0; i < num.length; i++) {
      sum = sum+num[i] * 2 ** (num.length - 1 - i);
   }
   return sum;
}

function DecimalABinario(num) 
{

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

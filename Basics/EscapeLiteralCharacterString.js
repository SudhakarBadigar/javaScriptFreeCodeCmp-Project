/**
 Escape literal characters inside the strings the one written given an error.
var myname="i am a "double Quated" string inside "double quotes"";
*/
var myname="i am a \"double Quoted\" string inside \"double quotes\"";
/* 
  use back slash before double Quotes like \* it will ignore backslash.
*/ 
console.log(myname);

var link = `'<a href="http://www.google.com" target ="_blank">'Google'</a>'`
console.log(link);
/**
    so you can use it in 3 ways
    1.backslash before double quotes like this \"google\"
    2.giving single quote like '<a href="https://www.goole.com" target="_blank">'
    3 backtik from this we can use single and double quote `hi live in "Bangalore" and its a 'good place'` 
 */
    console.log(".................");
    var mystr= "FirstLine\n\t \\SecondLine\nThirdLine"
    console.log(mystr);
    console.log(".......................");
    //string concatination.
    var str="i come first " + "you come second"
    console.log(str);
    console.log("....................... ");
    var out ="Bangalore weather"
    out+= " is sooo good."
    console.log(out);
    console.log(".................");
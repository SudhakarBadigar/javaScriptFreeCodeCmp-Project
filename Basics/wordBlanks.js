function wordBlanks(mynoun,myverb,myadjective,myadverb){
    var result="";
    result= "The" + " " + myadjective + " " +mynoun + " " + myverb +" " + myadverb;
    return result;

}
console.log(wordBlanks("dog","ran","big","quickly"));
console.log((wordBlanks("bangalore","moving","large city","fastly")));
// Questions on string methods


// 1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string

var str1 = "                   sai";
var str2 = "kumar                 ";
var con_strs = str1.concat(str2).trim().toUpperCase();
console.log(con_strs)

// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase

var str3 = "10K CODERS";
var substr3 = str3.slice(4,8).toLowerCase();
console.log("extraced str3 : ",substr3);
var last_index = substr3.slice(-1);
console.log(substr3.indexOf(last_index));




// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 

var char1 = "p";
var str4 = "sai";
var result_str = char1.concat(" ",str4).toUpperCase();
console.log(result_str);
var last_sec_char = result_str.at(-2);
console.log(last_sec_char);


// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase

var str5 = "rahul";
var str6 = "vedanth";
var subStr5 = str5.slice(0,3);
var subStr6 = str6.slice(-3);
var combStrs = subStr5.concat(subStr6);
var resulted_combStrs = combStrs.at(0).toUpperCase().concat(combStrs.slice(1,5)).concat(combStrs.at(-1).toUpperCase());
console.log(resulted_combStrs);



 
// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string

var str7 = "   sai kumar    ";
var otherStr7 = "Reddy"
str7 = str7.trim();
str7 = str7.at(0).toUpperCase()+str7.slice(1,str7.length-1)+str7.at(-1).toUpperCase();
var sepPart = str7.slice(0,3)
var conSepPart = sepPart.concat(" ",otherStr7);
console.log(conSepPart);






// 6."hello there , how are you " find the index of are word in the sentence

var str8 = "hello there , how are you ";
var r = str8.split(" ")
console.log(r)
console.log(r.indexOf("are"))


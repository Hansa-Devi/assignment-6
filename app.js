// chapter 21-25
// Question # 1

var first_name = prompt("Enter first name:");
var last_name = prompt("Enter last name:");
var full_name= first_name+last_name;
alert("Hello"+full_name+"\n Welcome to our Website");

// Question # 2
 var fav_mob_model =prompt("Enter your favourite mobile model name");
 var length_input = fav_mob_model.length;
 document.write("My favourite Phone is :"+fav_mob_model +"<br>Length of String: "+ length_input);

// Question # 3
var Nationality="Pakistani";
var indexOfn=Nationality.indexOf("n");
document.write("String :" +Nationality+"<br>IndexOf n :"+indexOfn);


// Question # 4
var word ="Hello World";
var Last_indexOf_l = word.lastIndexOf("l");
document.write("Word : "+word+"<br>last index of 'l':"+Last_indexOf_l);

// Question # 5
var Nationality="Pakistani";
var char_3 = Nationality.charAt(3);
document.write("String :"+Nationality+"<br> Character At Index 3: "+char_3);

// Question # 6
var first_name = prompt("Enter first name:");
var last_name = prompt("Enter last name:");
var full_name= first_name.concat(last_name);
alert("Hello "+full_name+"\n Welcome to our Website");


// Question # 7
var City_name = "Hyderabad";
 var new_city = City_name.replace("Hyder","Islama");
 document.write("City : "+City_name+"<br>After Replacement : "+new_city);

// Question # 8
var text = "Ali and Sami are best friends.They play  cricket and football together.";
var edit = text.replace(/and/g, "&");
document.write("Pervious Text : "+text+"<br> AfterReplacement : "+edit);

// Question # 9
var string_val = "472";
var number_val = parseInt(string_val,10);
document.write("Value : "+ string_val+"<br>Type : "+typeof (string_val)+"<br> Value :"+number_val+"<br>Type : "+typeof (number_val));

// Question # 10
var text = prompt("Enter value :");
document.write("User input : "+text+"<br>Upper case : "+ text.toUpperCase());

// Question # 11
var text = prompt("Enter value :");
var firstChar = text.slice(0, 1);
var otherChars = text.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedText = firstChar + otherChars;
document.write("User input : "+text+"<br>Title case : "+ cappedText);


// Question # 12 
var num_val = 35.36;
var str_val = num_val.toString();
document.write("Number : "+num_val+"<br> Result : "+str_val);






//Q1
document.write("<h1> Q1 </h1>")
var firstName = prompt ("WRITE THE FIRST NAME  (CHECK YOUR ANSWER IN Q1)")
var lastName = prompt ("WRITE THE LAST NAME (CHECK YOUR ANSWER IN Q1) ")
document.write(firstName + "  " + lastName)

//Q2
document.write("  <h1> Q2 </h1> ")
var mobile = ["sumsung", " ", "  ", "iphone", " ", "vivo",'  ', "relme" , "  ",'iphone14promax', " ",'oppo']
var userMobile = prompt(" WRITE YOUR FAVORITE MOBILE NAME (CHECK YOUR ANSWER IN Q2)")
userMobile = userMobile.toLowerCase()
for (var i = 0; i <= mobile.length; i++){
   if(userMobile === mobile[i]){
        document.write(" <b>your favourite mobile is " + " " + userMobile + " " + "lenght of string  :" + mobile.indexOf(userMobile) + "</b>")
    break;
   }
}

//Q3
document.write("  <h1> Q3 </h1> ")
var country = prompt('WRITE A WORD (CHECK YOUR ANSWER IN Q3) ')
var word = prompt('WRITE A LETTER WHO KNOW YOU INDEX NUM (CHECK YOUR ANSWER IN Q3) ')

document.write(" <b>INDEX OF ("+ "   "  + word +" )IN ( "+country+")IS : "+  "   " +country.indexOf(word) +"<b>")


// Q4
 document.write("  <h1> Q4 </h1> ")
var world = "HELLO WORLD "
 document.write( "string :"  + world + "<br>" )
 document.write( " Last index of (L) is " +world.lastIndexOf("L") )

//Q5
 document.write("  <h1> Q5 </h1> ")
var country1 = "pakistani"
var character = "i"
document.write("string : pakistani <br>  ")
var i = country1.indexOf(character)
 document.write("character at index "+ i+ ":" + country1.slice(i,i+1) + " " )


//Q6
document.write("  <h1> Q6 </h1> ")
var firstName = prompt("write the first name (CHECK YOUR ANSWER IN Q6)")
var lastName = prompt("write the last name (CHECK YOUR ANSWER IN Q6)")
var concat = firstName.concat( " " + lastName)
document.write(concat)

//Q7
document.write("  <h1> Q7 </h1> ")
var city =prompt("apni city ka naam likho (CHECK YOUR ANSWER IN Q7)")
var city1 = prompt("jis say ap apni city replace krna chatay hain us city ka naam likhay (CHECK YOUR ANSWER IN Q7)")
document.write("<b> I AM FROM "+city +" ")
var replace = city.replace(city , city1)
document.write(" <BR> AFTER REPALCEMANT :    I AM FROM "+ replace+" ") 


//Q8
document.write("  <h1> Q8 </h1> ")
var message = ("ali and sami are best friend they play cricket and football together")
document.write("<h3>before replacement : </h3> "+ message+" <br>" )
var replacement = message.replace(/and/g , "&" )
document.write(" <h3>after repalcement : </h3> "+ replacement +"" )

//Q9
document.write("  <h1> Q9 </h1> ")
var string = "456"
document.write(string + "<br>")
document.write(typeof string + "<br>") 
var num = Number(string)
document.write(num + "<br>")
document.write(typeof num)



//Q10
document.write("  <h1> Q10 </h1> ")
var userName = prompt  ("KOI BHI AIK WORD LIKHO JIS KO AP CAPITAL ME CHANGE KERNA CHATAY HAIN (ANSWER IN Q=10 ) ")
 var user = userName.toUpperCase()
document.write(user)

//Q11
 document.write("  <h1> Q11 </h1> ")
var num = "35.87 "
document.write( "before replace <br>"  + num )
var replace = num.replace(".","")
document.write( "<BR>after replace <BR> " + replace)


    

 //Q12
 document.write("  <h1> Q12 </h1> ")
 var bakery = ["pastry" , "cake" ,"apple","cookie" ]
 var ourBakery = prompt('write your order please')
 var flag = "no"
 for (i = 0 ; i<=bakery.length; i++){
    if (ourBakery === bakery[i] ){
    var  flag = "yes"  
    } 
 }
 if(flag == "yes"){
    document.write(ourBakery + " " + "is avaible at index"+ " (" +  bakery.indexOf(ourBakery) + ") " +"in our bakery" )
 
} else if (flag == "no"){
   document.write("we are sorry  (" + " ("+ ourBakery + ") " + ") is not avaible in our bakery ")
    
}


 //Q13
  document.write("  <h1> Q13 </h1> ")
  var university = "university of karachi"
  document.write( "before split "+ " (" + university +") "+"<br>" ) 
  var uni = university.split("")
document.write( "after split " +"(" +uni+ ")") 



 //Q14
 document.write("  <h1> Q14 </h1> ")
 var user = prompt("KOI BHI AIK WORD LIKHO JIS KA AKHRI LETTER AP KO CHAHIYE (ANSWER IN Q14)")
 document.write("User input :" + " ("+ user+") <br>")
 var userLastLetter = user.slice(-1)
 document.write("Last character of input : "+ " ("+userLastLetter+")")

 // //Q17
//   document.write("  <h1> Q17 </h1> ")
// var text = ("the quick brown fox jumps over the lazy doy")
// document.write(text + "<br>")
// var split = text.split("")
// var word = split.indexOf("t,h,e")
// document.write("there are" + word + "occurrence of word 'the'")
//Q12
// document.write("  <h1> Q12 </h1> ")
// var userName = prompt ("APNA NAAM LIKHO LAKIN IS ME  KOI SYMBOL  USE NAHI KRO (ANSWER IN Q12)")
// var special = ["!","@",",",";","$"]
// for (var i = 0 ; i < special.length ; i++ ){
//     if (special[i] !== userName[i][i] ){
//         alert("please enter a valid number")
//         break;
//     }else{
//         alert("thannks")
//         break;
//     }

// }
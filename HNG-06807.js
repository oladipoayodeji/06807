
function Person(name, id, lan, email)
 {
  this.myName = name;
  this.myId = id;
  this.myLanguage = lan;
  this.myEmail = email;
}

var myF = new Person("Oladipo Ayodeji", "HNG-06807", "Javascript", "oanigeria@gmail.com");

console.log(
"Hello World, this is " + myF.myName + " with HNGi7 ID " + myF.myId +  " using " + myF.myLanguage + " for stage 2 task. " + myF.myEmail + "." ); 
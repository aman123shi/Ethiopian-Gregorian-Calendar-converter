var etWeekDays=["አሁድ","ሰኞ","ማክሰኞ","እሮብ","ሀሙስ","አርብ","ቅዳሜ"];
var ameteMihret=2002;
const ameteFida=5500;
var ameteAlem=ameteMihret+ameteFida;
var ameteWengelawi=Math.floor(ameteAlem/4);
var totalAmet=ameteAlem+ameteWengelawi+2;
var dayOfMeskerem1=totalAmet % 7;
var ameteWengelawi=ameteAlem % 4; // if the remainder is 0 zemene yohanis 
var dayTewsak={"sunday":7,"monday":6,"thusday":5,"wednesday":4,"thursday":3,"friday":2,"saturday":8};
var meskerem1="";
//console.log("remainder of meskerem"+dayOfMeskerem1+" amete weng "+ameteAlem/4+" "+ ameteWengelawi);
var medeb = ameteAlem % 19;
var wenber = medeb-1;
if(medeb == 0)
   wenber = 19;
var abekte = wenber * 11;
if(abekte > 30)
    abekte=(wenber * 11) % 30;
var metik = 30-abekte;
var bealMetik,nenewe;
if(metik < 15){
 bealMetik = "tikimit "+metik;
 nenewe="yekatit "+metik;
}else{
    bealMetik = "Meskerem "+metik;
    nenewe="Tir "+metik; 
}
var mebajaHamer = metik +" yeilet tewsak ";//the day of the tewsak was fallen eg friday constant
if(mebajaHamer > 30)
    mebajaHamer = mebajaHamer % 30;
nenewe="Tir "+mebajaHamer;
if(metik > 22 ){
    bealMetik = "Meskerem "+metik;
    mebajaHamer = metik +" yeilet tewsak ";
    nenewe = "yekatit "+mebajaHamer;
}
var TsomMegbiya = nenewe + "abiy tsom tewsak";
if(TsomMegbiya > 30){
    TsomMegbiya = TsomMegbiya % 30;
}
 if(TsomMegbiya < mebajaHamer)
    // and the month will be the next month yekatit 1
var debreZeyit = mebajaHamer + "yedebre zeyit tewsak" ;
if(debreZeyit > 30)
    debreZeyit = debreZeyit % 30;
if(debreZeyit < TsomMegbiya){
    //debrezeyit month will be next month 
}
var hosaina = mebajaHamer + "ye hosina tewsak";
if(hosaina > 30)
hosaina = hosaina % 30;
if(hosaina < debreZeyit){
    //hosina month will be next month 
}
var siklet = mebajaHamer + "ye siklet tewsak";
  if(siklet > 30)
  siklet = siklet % 30;
if(siklet < hosaina){
    //siklet month will be next month
}
var tinsae = mebajaHamer + "ye tinsae tewsak ";
if(tinsae > 30)
    tinsae %=30;
if(tinsae < siklet){
    //tinsae month will be next month
}
switch(dayOfMeskerem1){
    case 0:
        meskerem1=etWeekDays[6];
        break;
    case 1:
        meskerem1=etWeekDays[dayOfMeskerem1-1];
        break;
    case 2:
        meskerem1=etWeekDays[dayOfMeskerem1-1];
        break;
    case 3:
        meskerem1=etWeekDays[dayOfMeskerem1-1];
        break;
    case 4:
        meskerem1=etWeekDays[dayOfMeskerem1-1];
        break;
    case 5:
        meskerem1=etWeekDays[dayOfMeskerem1-1];
        break;
    case 6:
        meskerem1=etWeekDays[dayOfMeskerem1-1];
        break;
}
console.log(meskerem1);
console.log("helom ");


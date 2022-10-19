var grMonths = ["Jan","Feb","Mar","Apr","May","jun","jul","Augest","Sep","Oct","Nov","Dec"];
var ethioMonths=["መስከረም","ጥቅምት"," ህዳር"," ታህሳስ ","ጥር" ,"የካቲት", 
"መጋቢት", "ሚያዝያ"," ግንቦት", "ሰኔ", "ሀምሌ", "ነሀሴ", "ጷጉሜ"];
function grToEt(grd,grm,gry){
var etm,etd,ety;
var isEthioLeap = (ety%4 == 3) ? true:false;
var isGregorianLeap = (gry%4 == 3) ? true:false; 
var ismeskeremJanIn12 =(gry%4 == 3) ? true:false;
console.log("is merkerm september 12 "+ismeskeremJanIn12);

    if((grm >= 1 && grm <=9 && grd < 12 && ismeskeremJanIn12) || grm < 9 ) 
       ety=gry-8;
    else if((grm >= 1 && grm <=9 && grd < 11 && !ismeskeremJanIn12) || grm < 9 ) 
       ety=gry-8;
    else if(grm == 9 && grd == 11 && ismeskeremJanIn12)
           ety=gry-7;
    else if(grm == 9 && grd < 11)
           ety=gry-8;
    else ety=gry-7;
 
    // January month conversion
    if(grm == 1){
       if(isGregorianLeap){
          if(grd < 10){
              etm=4;
              etd=(grd+31)-10
          }else{
              etm=5;
              etd=grd-9;
          }
      }
      else{
        if(grd < 10){
            etm=4;
            etd=(grd+31)-10;
        }else{
            etm=5;
            etd=grd-9;
        }

      }
    }
//Feburary month conversion
else if(grm == 2){
    if(isGregorianLeap){
       if(grd < 10){
           etm=5;
           etd=(grd+31)-9;
       }else{
           etm=6;
           etd=grd-8;
       }
   }
   else{
     if(grd < 8){
         etm=5;
         etd=(grd+31)-9;
     }else{
         etm=6;
         etd=grd-8;
     }

   }
 }
 //march Conversion
 else if(grm == 3){
       if(grd < 10){
           etm=6;
           etd=(grd+29)-8;
       }else{
           etm=7;
           etd=grd-9;
       }
 }
//April month conversion
else if(grm == 4){
    if(grd < 9){
        etm=7;
        etd=(grd+30)-8;
    }else{
        etm=8;
        etd=grd-8;
    }
}
//may month conversion
else if(grm == 5){
    if(grd < 9){
        etm=8;
        etd=(grd+30)-8;
    }else{
        etm=9;
        etd=grd-8;
    }
}
//june ---------------------
else if(grm == 6){
    if(grd < 8){
        etm=9;
        etd=(grd+31)-8;
    }else{
        etm=10;
        etd=grd-7;
    }
}
//JULY ----------------------------------------------
else if(grm == 7){
    if(grd < 8){
        etm=10;
        etd=(grd+30)-7;
    }else{
        etm=11;
        etd=grd-7;
    }
}
// Augest =======================
else if(grm == 8){
    if(grd < 7){
        etm=11;
        etd=(grd+31)-7;
    }else{
        etm=12;
        etd=grd-6;
    }
}
//september ------------------------------
else if(grm == 9){
if(isGregorianLeap){
    console.log("sept method leap");
    
        if(grd < 6){
            etm=12;
            etd=(grd+31)-6;
        }else{
            if(grd<12){
                etm=13;
                etd=(grd+0)-5;  
            }else{
                etm=1;
                etd=grd-11;
            }
        }
    }else{
       if(!isGregorianLeap){
           if(grd < 5){
               etm=12;
               etd =(grd+31)-5;
           }else{
               if(grd < 11){
                   etm=13;
                   etd=grd-5;
               }else{
                etm=1;
                etd=grd-10; 
               }
           }
       }
    }
}

//TODO: october 

// october 
else if(grm == 10){
    if(isGregorianLeap){
       if(grd < 12){
           etm=1;
           etd=(grd+30)-11;
       }else{
           etm=2;
           etd=grd-11;
       }
   }
   else{
     if(grd < 11){
         etm=1;
         etd=(grd+31)-11;
     }else{
         etm=2;
         etd=grd-10;
     }

   }
 }
// November
else if(grm == 11){
    if(isGregorianLeap){
       if(grd < 11){
           etm=2;
           etd=(grd+31)-11;
       }else{
           etm=3;
           etd=grd-10;
       }
   }
   else{
     if(grd < 10){
         etm=2;
         etd=(grd+31)-10;
     }else{
         etm=3;
         etd=grd-9;
     }

   }
 }
//DEcember
else if(grm == 12){
    if(isGregorianLeap){
       if(grd < 11){
           etm=3;
           etd=(grd+30)-10
       }else{
           etm=4;
           etd=grd-10;
       }
   }
   else{
     if(grd < 10){
         etm=3;
         etd=(grd+30)-9
     }else{
         etm=4;
         etd=grd-9;
     }

   }
 }
console.log(etd+"/"+etm+"/"+ety);
return {date:etd,month:etm,year:ety};
}
//Ethiopian month to Gregorian conversion functiom
function EtToGr(etd,etm,ety){
    var gry,grd,grm;
    var isGregoryLeap=((ety-1)%4 == 3)?true:false;
    if((etm <= 4 && etd < 22) || etm < 4)
          gry=ety+7;
    else if((etm <=4 && etd < 22 && isGregoryLeap) || etm <4)
           gry=ety+7;
    else gry=ety+8;
    
     //Meskerem month conversion   
    if(etm == 1){
        if(isGregoryLeap){
            if(etd < 20){
                grm="sept";
                grd=etd+11;
            }else{
                grm="octo";
                grd=(etd-30)+11;
            }
        }else{
            if(etd < 21){
                grm="sept";
                grd=etd+10; 
            }else{
                grm="octo";
                grd=(etd-30)+10;
            }
        }
    }
    //Tikimt month conversion
    else if(etm ==2){
        if(isGregoryLeap){
            if(etd < 21){
                grm="octo";
                grd=(etd)+11;
            }else{
               grm="Nov";
               grd=(etd-30)+10;
            }
        }else{
            if(etd < 22){
                grm="octo";
                grd=(etd)+10; 
            }else{
                grm="nov";
                grd=(etd-30)+9;
            }
        }
    }
    //Hidar Month
    else if(etm ==3){
        if(isGregoryLeap){
            if(etd < 21){
                grm="nov";
                grd=(etd)+10; 
            }else{
                grm="Dec";
                grd=(etd-30)+10;  
            }
        }else{
            if(etd < 22){
                grm="nov";
                grd=(etd)+9;  
            }else{
                grm="Dec";
                grd=(etd-30)+9;  
            }
        }
    }
    //Tahisas month conversion
    else if(etm == 4){
        if(isGregoryLeap){
            if(etd < 22){
                grm="DEc";
                grd=(etd)+10; 
            }else{
                grm="Jan";
                grd=(etd-30)+9;  
            }
        }else{
            if(etd < 23){
                grm="Dec";
                grd=(etd)+9;  
            }else{
                grm="Jan";
                grd=(etd-30)+8;  
            }
        }
    }
    //Tir month conversion
    else if(etm == 5){
        if(isGregoryLeap){
            if(etd < 23){
                grm="Jan";
                grd=(etd)+9; 
            }else{
                grm="Feb";
                grd=(etd-30)+8;  
            }
        }else{
            if(etd < 24){
                grm="Jan";
                grd=(etd)+8;  
            }else{
                grm="Feb";
                grd=(etd-30)+7;  
            }
        } 
    }
    //Yekatit month conversion
    else if(etm == 6){
        if(isGregoryLeap){
            if(etd < 22){
                grm="Feb";
                grd=(etd)+8; 
            }else{
                grm="March";
                grd=(etd-30)+9;  
            }
        }else{
            if(etd < 22){
                grm="Feb";
                grd=(etd)+7;  
            }else{
                grm="March";
                grd=(etd-30)+9;  
            }
        }
    }
    //Megabit month conversion
    else if(etm == 7){
        if(etd < 23){
            grm="March";
            grd=(etd)+9; 
        }else{
            grm="April";
            grd=(etd-30)+8;  
        }
    }
    //Miyaziya
    else if(etm == 8){
        if(etd < 23){
            grm="April";
            grd=(etd)+8; 
        }else{
            grm="may";
            grd=(etd-30)+8;  
        }
    }
    //ginbot 
    else if(etm == 9){
        if(etd < 24){
            grm="May";
            grd=(etd)+8; 
        }else{
            grm="Jun";
            grd=(etd-30)+7;  
        }
    }
    //sene month conversion 
    else if(etm == 10){
        if(etd < 24){
            grm="Jun";
            grd=(etd)+7; 
        }else{
            grm="July";
            grd=(etd-30)+7;  
        }
    }
    // hamle 
    else if(etm == 11){
        if(etd < 25){
            grm="July";
            grd=(etd)+7; 
        }else{
            grm="Augest";
            grd=(etd-30)+6;  
        }
    }
    //Nehase 
    else if(etm == 12){
        if(etd < 26){
            grm="Augest";
            grd=(etd)+6; 
        }else{
            grm="Sept";
            grd=(etd-30)+5;  
        }
    }
    else if(etm == 13){
        grm="sept";
        grd=etd+5
    }
 //   console.log(grd+"/"+grm+"/"+gry);
 return {date:grd,month:grm,year:gry};   
    }
//some proper interface functions for the converter functions     
function gregorianToEthiopian(date){
  // var date=new Date();
    var grd=date.getUTCDate();
    var grm=date.getUTCMonth()+1;
   var gry=date.getUTCFullYear();  
    var etDate=grToEt(grd,grm,gry);
   // console.log(ethioMonths[etDate.month-1]+"  "+etDate.date+" "+etDate.year);
    return {date:etDate.date,month:ethioMonths[etDate.month-1],year:etDate.year};
}
function ethiopianToGregorian(date){
  var etd=date.date;
  var etm=date.month;
  var ety=date.year;
  var grDate=EtToGr(etd,etm,ety);
  return grDate;
}
var d={date:1,month:1,year:2012};

module.exports.ethiopianToGregorian=ethiopianToGregorian;
module.exports.gregorianToEthiopian=gregorianToEthiopian;


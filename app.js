const express=require("express");
const session=require("express-session");
const bodyParser=require("body-parser");
const calendar=require("./ethioCalendar");
const hba=require("express-handlebars").create({defaultLayout:'mainTemplate',
helpers: {
    section:function(name, options){
    if(!this._sections) this._sections = {};
    this._sections[name] = options.fn(this);
    return null;
    }
    }});
const app=express();
app.engine('handlebars',hba.engine);
app.set('view engine','handlebars');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    var date = new Date();
 var grMonths = ["Jan","Feb","Mar","Apr","May","jun","jul","Augest","Sep","Oct","Nov","Dec"];
 var et = calendar.gregorianToEthiopian(date);
 var gr={year:date.getUTCFullYear(),month:grMonths[date.getUTCMonth()],date:date.getUTCDate()};
    res.render("index",{etdate:et,grdate:gr});
});
app.post("/etcalander",(req,res)=>{
    console.log(parseInt(req.body.date));
    
    var d={date:parseInt(req.body.date),month:parseInt(req.body.month),year:parseInt(req.body.year)};
    var date =calendar.ethiopianToGregorian(d);
    console.log(date);
    res.send(date);
});

app.post("/gregcalendar",(req,res)=>{
    var date=calendar.gregorianToEthiopian(new Date(req.body.date));
    res.send(date);
});

app.set('port',process.env.PORT || 3000);
app.listen(app.get('port'),()=>{
    console.log("server stsrted on port  using nodemon "+app.get('port'));
});
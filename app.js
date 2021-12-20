//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const request= require("request");
const https=require("https");
const { response } = require("express");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
});

app.post("/", function(req,res){
const firstName=req.body.fName;
const lastName=req.body.lName;
const email=req.body.email;

var data={
    members:[
        {
            email_address: email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstName,
                LNAME:lastName

            }
        }
    ]
};


const jsonData= JSON.stringify(data);

const url="https://us1.api.mailchimp.com/3.0/lists/TypeYourOwnListId";

const options={
    method:"POST",
    auth:"mohit1:TypeYourOwnApiKey"
}

if(response.statusCode === 200){
    res.sendFile(__dirname +"/success.html");
} 
else {
    res.sendFile(__dirname+"/failure.html");
}

const request = https.request(url, options, function(response){
response.on("data",function(data){
    console.log(JSON.parse(data));
});


});


request.write(jsonData);
request.end();


});



app.listen(process.env.PORT || 3000,function(){
    console.log("Server Started on port 3000");
});


// f94eccd30817fc5aa3a416f8c92c0b28-us1

// 696ea570e3

// auth:"mohit1:43ace290ba0e090374e65d06cd84cf54-us1"


// auth:"angela1:f94eccd30817fc5aa3a416f8c92c0b28-us1"

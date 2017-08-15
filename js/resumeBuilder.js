/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  name : "Abdullah"
  ,role : "Web developer"
  ,contacts :{
        mobile: "05xxxxxxxx"
        ,email: "abdullahzeer27@gmail.com"
        ,github: "https://github.com/AbdullahZeer"
        ,twitter: "@abdullahzeer27"
        ,location: "Riyadh"
      }

    ,welcomeMessage: "Hello World!!!"
    ,skills: ['java' , 'sql' , 'html' , 'CSS', 'JavaScript' ,'C']
    ,biopic: "images/bio-img.jpg"
    ,display: function(){
      var name = HTMLheaderName.replace("%data%" ,bio.name);
      var role = HTMLheaderRole.replace("%data%" ,bio.role);
      $("#header").append(name);
      $("#header").append(role);

      var mobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
      var email =  HTMLemail.replace('%data%' , bio.contacts.email);
      var github = HTMLgithub.replace('%data%' , bio.contacts.github);
      var twitter = thereIsTwitter(bio.contacts.twitter);
      var location = HTMLlocation.replace('%data%' , bio.contacts.location);
      $("#topContacts").append(mobile,email,github,twitter,location);

      var biopic = HTMLbioPic.replace('%data%',bio.biopic);
      $("#header").append(biopic);
      }
}

function thereIsTwitter(string) {

  if(string === "")
  return ""
  else {
    return HTMLtwitter.replace('%data%' , bio.contacts.twitter);
  }

  }

console.log(bio.contacts.mobile);
console.log(bio.contacts.email);
console.log(bio.contacts.github);
console.log(thereIsTwitter(bio.contacts.twitter));
console.log(bio.contacts.location);
bio.display();

var education = {
  schools: [{name: "Al-Fahad high school"
   ,location: "riyadh al olaya"
   ,degree: ["high school"]
   ,data:"1/5/2013"
   ,url:""
 }
  ]
    ,onlineCourses:[
      { title: "Web Development Diploma"
      ,school: "shaw academy"
      ,dates: "9/25/2016"
      ,url: "http://www.shawacademy.com/" }
     ]

     ,display: function(){

     }
   }
    var work = {
    jobs: [{employer: "KSU"
    ,title: "Web developer"
    ,location: "riyadh king khalid street"
    ,dates: "in progress"
    ,description: "makeing awsome websites :D" }]
    ,display: function(){

      }
  }

  var projects = {
    projects:[{title:"AI_Project"
         ,dates:"3/25/2017"
         ,description: "making robot with simple AI"
         ,images: ["http://via.placeholder.com/350x350","http://via.placeholder.com/200x150"]}
       ]
   ,display: function(){

   }

  }

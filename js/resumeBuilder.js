/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  name : "Abdullah"
  ,role : "Web developer"
      ,contacts {
        ,mobile: "05xxxxxxxx"
        ,email: "abdullahzeer27@gmail.com"
        ,github: "https://github.com/AbdullahZeer"
        ,twitter: ""
        ,location: "riyadh Al-yasmin"
      }

    ,welcomeMessage: "Hello World!!!"
    ,skills: ['java' , 'sql' , 'html' , 'CSS', 'JavaScript' ,'C']
    ,biopic: "http://via.placeholder.com/150x150"
    ,display: function(){
      HTMLheaderName.replace("%data%" ,"bio.name");
      HTMLheaderRole.replace("%data%" ,"bio.role");
      $("#main").append(HTMLheaderName);
      $("#main").append(HTMLheaderRole);

      function thereIsTwitter(string) {

        if(string === "")
        return "";
        else {
          return "\t twitter: " + string;
        }
      }
      var myContacts = "mobile: " + bio.contacts.mobile "\t email: " + bio.contacts.email +
      "\t github: " + bio.contacts.github + "\t "  + thereIsTwitter(bio.contacts.twitter) + "\t location: " + bio.contacts.location ;

      HTMLcontactGeneric.replace("%contact%" , myContacts);

      }
}

var education = {
  schools: [{name: "Al-Fahad high school"
   ,location: "riyadh al olaya"
   ,degree: ["high school"]
   ,data:"1/5/2013"
   ,url:""
  ]
    ,onlineCourses:[
      { title: "Web Development Diploma"
      ,school: "shaw academy"
      ,dates: "9/25/2016"
      ,url: "http://www.shawacademy.com/" }
     ]

     ,display: function(){

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
   display: function(){

   }

  }

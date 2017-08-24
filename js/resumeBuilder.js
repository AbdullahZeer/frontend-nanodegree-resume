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
      var welcome = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
      $("#header").append(welcome);
      $("#header").append(HTMLskillsStart);

      bio.skills.forEach(function(skill){
        var s = HTMLskills.replace("%data%",skill);
        $("#skills").append(s);
      });

      }
}

function thereIsTwitter(string) {

  if(string === "")
  return ""
  else {
    return HTMLtwitter.replace('%data%' , bio.contacts.twitter);
  }

  }


bio.display();

var education = {
  schools: [{name: "King saud university"
   ,location: "Riyadh"
   ,degree: "BA"
   ,majors: ["CS"]
   ,dates:"1/5/2013"
   ,url:""
 }
  ]
    ,onlineCourses:[
      { title: "Web Development Diploma"
      ,school: "shaw academy"
      ,dates: "9/25/2016"
      ,url: "http://www.shawacademy.com" }
     ]

     ,display: function(){

       education.schools.forEach(function(school){
         $("#education").append(HTMLschoolStart);

         var sName = HTMLschoolName.replace("%data%" , school.name);
         if(school.url !== "")
         sName = sName.replace("#",school.url);
         var degree = HTMLschoolDegree.replace("%data%" , school.degree);
         $(".education-entry").last().append(sName + "" + degree);

         var sDate = HTMLschoolDates.replace("%data%" , school.dates);
         $(".education-entry").last().append(sDate);
         var sLocation = HTMLschoolLocation.replace("%data%" , school.location);
         $(".education-entry").last().append(sLocation);

         school.majors.forEach(function(majorString){
           var major = HTMLschoolMajor.replace("%data%" , majorString);
           $(".education-entry").last().append(major);
         });

       });

       if(education.onlineCourses.length > 0){
          $(".education-entry").last().append(HTMLonlineClasses);

         education.onlineCourses.forEach(function(course){
         var cTitle = HTMLonlineTitle.replace("%data%" , course.title);
         var cSchool = HTMLonlineSchool.replace("%data%" , course.school);
         $(".education-entry").last().append(cTitle + "" + cSchool);

         var cDate = HTMLonlineDates.replace("%data%" , course.dates);
         $(".education-entry").last().append(cDate);
         var cUrl = HTMLonlineURL.replace("%data%",course.url);
         $(".education-entry").last().append(cUrl);
         });
       }
     }
   }

   education.display();

    var work = {
    jobs: [{employer: "KSU"
    ,title: "Web developer"
    ,location: "Riyadh"
    ,dates: "in progress"
    ,description: "making awsome websites :D" }]
    ,display: function(){


      work.jobs.forEach(function(job){
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%",job.employer);
        var title = HTMLworkTitle.replace("%data%",job.title);
        $(".work-entry").last().append(employer + "" + title);
        var date = HTMLworkDates.replace("%data%",job.dates);
        $(".work-entry").last().append(date);
        var workL = HTMLworkLocation.replace("%data%",job.location);
        $(".work-entry").last().append(workL);
        var des = HTMLworkDescription.replace("%data%",job.description);
        $(".work-entry").last().append(des);
      });
      }
  }

  work.display();

  var projectsObj = {
    projects:[{title:"AI Project"
         ,dates:"3/25/2017"
         ,description: "making robot with simple AI"
         ,images: ["http://via.placeholder.com/200x200","http://via.placeholder.com/200x200"]}
       ]
   ,display: function(){

     projectsObj.projects.forEach(function(project){
       $("#projects").append(HTMLprojectStart);
       var pTitle = HTMLprojectTitle.replace("%data%",project.title);
       $(".project-entry").last().append(pTitle);
       var pDate = HTMLprojectDates.replace("%data%", project.dates);
       $(".project-entry").last().append(pDate);
       var pDes = HTMLprojectDescription.replace("%data%" , project.description);
       $(".project-entry").last().append(pDes);

       project.images.forEach(function(imgLink){
         var img = HTMLprojectImage.replace("%data%" , imgLink);
         $(".project-entry").last().append(img);
       });
     });
   }

  }

  projectsObj.display();

$("#mapDiv").append(googleMap);
initializeMap();



  var topContacts = $("#topContacts").clone().children();
  $("#footerContacts").append(topContacts);

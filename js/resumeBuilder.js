// 
// Name: Chris Fenton
// Description: Interactive Resume - Project2 - Udacity
// Description: This is a resume I plan to use to help in my job search upon completion of Nanodegree
// program @ Udacity.  
// Last Update - 4/7/16
// 


// Object 1 - Bio
var bio = {
"name" : "Chris Fenton",
"role" : "Software Quality Engineer",
"contacts": {
	"mobile" : "607-744-6068",
	"email" : "chrisfenton10@gmail.com",
	"github": "https://github.com/cfenton180", 
	"location": "Washington, D.C."
	},  
"welcomeMessage" : "Welcome to my page!",
"skills" : ["Integration & Test", "Test Automation", "Software Quality", "Defect Management", "Technical Leadership"],
"biopic" : "http://s21.postimg.org/wafaxafev/thats_me2.jpg"
};

// Function to read in contents of "Bio" object, replace placeholders in helper.js, and append formatted data to index.html 
bio.display = function () {

	var formatName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formatName);

	var formatRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formatRole);

	var formatMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formatMobile);
	$("#footerContacts").append(formatMobile);

	var formatEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formatEmail);
	$("#footerContacts").append(formatEmail);

	var formatGit = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formatGit);
	$("#footerContacts").append(formatGit);

	var formatLoc = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formatLoc);
	$("#footerContacts").append(formatLoc);

	var formatPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formatPic);

	var formatMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formatMsg);

	$("#header").append(HTMLskillsStart);

	for(var skill in bio.skills) {

		if(bio.skills.length > 0) {
			
			var formatSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formatSkill);
		}
	}
};

bio.display();  // Function call   

// Object 2 - Education
var education = {
"schools": [
	{
		"name": "SUNY Empire State College",
		"location": "Saratoga Springs, NY",
		"degree": "B.S. Science, Math, & Technology",
		"majors": ["Information Technology"],
		"dates": "May 2011",
		"url": "http://www.esc.edu"
		},
	{
		"name": "SUNY Broome Community College",
		"location": "Binghamton, NY",
		"degree": "A.A.S. Computer Technology",
		"majors": ["Computer Forensics", "Network Security"],
		"dates": "May 2008",
		}],
"onlineCourses": [
	{
		"title": "Intro to HTML & CSS",
		"school": "Udacity",
		"date": "February 2016",
		"url": "http://www.udacity.com"
		},
	{
		"title": "Intro to JavaScript",
		"school": "Udacity",
		"date": "March/April 2016",
		"url": "http://www.udacity.com"
		},
	{
		"title": "How to Use Git & Github",
		"school": "Udacity",
		"date": "March/April 2016",
		"url": "http://www.udacity.com"
	}]
};

// Function to read in contents of "Education" object, replace placeholders in helper.js, and append formatted data to index.html 
education.display = function () {

		$("#education").append(HTMLschoolStart);

		for(var school in education.schools) {
		
		if (education.schools.length > 0) {

		var formatSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formatSchoolName);

		var formatSchoolDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formatSchoolDeg);

		var formatSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formatSchoolDate);

		var formatSchoolLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formatSchoolLoc);	

		}
	}

	$(".education-entry:last").append(HTMLonlineClasses);	


	for(var onlineCourse in education.onlineCourses) {

		if (education.schools.length > 0) {

		var formatOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		$(".education-entry:last").append(formatOnlineTitle);	

		var formatOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		$(".education-entry:last").append(formatOnlineSchool);	

		var formatOnlineDates = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].date);
		$(".education-entry:last").append(formatOnlineDates);	

		var formatURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formatURL);	

		}
	}
};

education.display();  // Function call

// Object 3 - Work
var work = {
"jobs": [
	{
		"employer": "Lockheed Martin",
		"title": "Software Quality Engineer Stf",
		"location": "Washington, D.C.",
		"dates": "In Progress",
		"description": "Led efforts to improve software quality on multiple task orders within the NISC III program.  Spearheaded the application of AGILE methodologies on multiple projects.  Applied multiple test approaches to mitigate risk prior to product deployment."
		},
	{
		"employer": "Lockheed Martin",
		"title": "Systems Engineer Sr",
		"location": "Owego, NY",
		"dates": "April 2014 - April 2015",
		"description": "Executed systems integration and test activities on key DoD aerospace programs.  Analyzed requirements and developed robust test cases for flight management, navigation, and weapons sub-systems."
		}]
};

// Function to read in contents of "Work" object, replace placeholders in helper.js, and append formatted data to index.html 
work.display = function () {
	

	for(var job in work.jobs) {

		if (work.jobs.length > 0) {

			$("#workExperience").append(HTMLworkStart);

			var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var EmployerWithTitle = formatEmployer + formatTitle;
			$(".work-entry:last").append(EmployerWithTitle);

			var formatDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formatDates);

			var formatLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formatLoc);

			var formatDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formatDesc);
		}
	}
};

work.display(); // Function call


// Object 4 - Projects
var projects = {
"projects": [
	{
		"title": "My Portolio Webpage",
		"dates": "February 2015",
		"description": "My first project with Udacity was a clean and responsive portfolio site.  The page provides links to the work I've completed during my nanodegree.  Below is a screenshot of the homepage.",
		"images": ["http://s27.postimg.org/vuotv6x83/my_Portfolio.png"],
		},
	{
		"title": "Sample Project 2",
		"dates": "TBD",
		"description": "Here's where I'll put information on future projects.",
		"images": ["http://lorempixel.com/320/198/nightlife"],
		}]
};

// Function to read in contents of "Projects" object, replace placeholders in helper.js, and append formatted data to index.html 

projects.display = function () {
	for (var project in projects.projects) {
		
		if (projects.projects.length > 0) {

		$("#projects").append(HTMLprojectStart);

		var formatTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formatTitle);

		var formatDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formatDate);

		var formatDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formatDesc);

		var formatImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formatImage);

		}
	}
};

projects.display(); //Function call

// Function which takes name from bio object, splits it into 2 separate strings, and converts the 2nd string to upper case upon
// button selection.  
function inName (splitName) {

  splitName = bio.name.split(" ");
  splitName[1] = splitName[1].toUpperCase();
  splitName[0] = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();

  return splitName[0] + " " + splitName[1];

}

// Append button to execute inName function.  
$("#main").append(internationalizeButton);

// Append Google Map to resume.  
$("#mapDiv").append(googleMap);
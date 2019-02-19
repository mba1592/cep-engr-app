//create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
function myFunc(about) {
 about.firstName = "Megan";
 about.lastName = "Adams";
 about.jobTitle = "Resolutions Specialist";
 about.homeOffice = "Penn Field";
 about.tellMeMore = "I have been working at HomeAway in customer service since December 2017 and transferred over to the Resolutions Department in fall of 2018. In my spare time I love watching scary movies, listening to true crime podcasts and music, and making art.";
};

var fields = {};

myFunc(fields);

// using jQuery and the object above, display the information as the appropriate button is clicked

$(document).ready(function() {

	 $("#firstName").click(function() {
			 alert(fields.firstName);
	});

	 $("#lastName").click(function() {
			 alert(fields.lastName);
	});

	 $("#jobTitle").click(function() {
			 alert(fields.jobTitle);
	 });

	 $("#homeOffice").click(function() {
			 alert(fields.homeOffice);
	 });
	 $("#tellMeMore").click(function() {
	 		alert(fields.tellMeMore);
	 });
});

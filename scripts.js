var sites = [
	{name: "Moodle", url: "http://moodle.com", 
	 desc: "Course management system with reports, assignments, chat, forums, lessons, quizzes, wiki",
		users: "teachers",
		needs: "to manage their classroom",
		contexts: "from school computers"
	}, 
	{name: "Socratic", url: "http://socratic.org/",
		desc: "resource for high school and higher-ed students to ask and answer questions.",
		users: "high school and higher-ed students",
		needs: "help solving their homework",
		contexts: "from whereever students do their homework"
	},
	{name: "Apprentus", url: "http://www.apprentus.com/",
		desc: "Tool for students to find local teachers for specific subjects.",
		users: "students in middle school and up and teachers",
		needs: "help connect students and high-quality teachers",
		contexts: "while students are unhappy with their current quality of education"
	}
]

var currentSite;
var currentQuestion = 1;

$(document).ready( function() {

	displayNewSite();
	$("#newsite").click(displayNewSite);
	$("#next").click(function() { displayQuestion(1); } );
	$("#prev").click(function() { displayQuestion(-1); });
	$("#submit").click(submitResults);

	$("#q2").hide();
	$("#q3").hide();
	$("#submit").hide();
	$("#next").show();

});


function displayNewSite(){
	do {
		var newTemp = Math.floor((Math.random() * sites.length));
	} while(sites[newTemp] == currentSite);
	currentSite = sites[newTemp];
	$("#siteFrame").css("height", "70%");
	// $(window).height() - $(".header").height()
	$("#siteFrame").attr("src", currentSite.url);
	$(".siteDesc").html(currentSite.desc);
	$(".siteName").html(currentSite.name);
	$(".siteUsers").html(currentSite.users);
	$(".siteUserNeeds").html(currentSite.needs);
	$(".siteUserContexts").html(currentSite.contexts);

	$("textarea").value = "";
	if (currentQuestion != 1) {
		displayQuestion(0);
	}
}

function displayQuestion(direction){

		$("#q"+currentQuestion).fadeOut(500);

		if(direction==0) {
			currentQuestion = 1;
		} else {
			currentQuestion += direction;
		}
		$("#q"+currentQuestion).delay(500).fadeIn(500);
		if(currentQuestion==3) {
			$("#next").fadeOut(500);
			$("#prev").fadeIn(500);
			$("#submit").delay(500).fadeIn(500);
		} else if (currentQuestion==1) {
			$("#next").fadeIn(500);
			$("#prev").fadeOut(500);
			$("#submit").hide();

		} else if (currentQuestion==2){
			$("#prev").fadeIn(500);
			$("#next").delay(500).fadeIn(500);
			$("#submit").fadeOut(500);
		}
	

}

function submitResults(){
	$("#submit").hide();
	alert("Congrats! Submitted!");
	displayNewSite();
}
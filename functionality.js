

function loadFunction(){

	let responses = [
		"thank you so much for the absolute banger of a course, for making learning gui fun! i learned a lot of things that i'll be keeping with me. i hope you enjoy your time in the mountains and safe skiing!!",
		"april",
		"Hi Dr. Steichen! I really learned a lot from you this entire semester and I feel like Programming GUIs is one of the few CS classes that I really felt like I learned something. Thank you so much for being such a great professor and having such an interesting and fun class! :)", 
		"Marlon Aquino",
		"Hi Professor! Thank you so much for being such a patient and caring educator. You may not realize it, but it really helps a lot of us out, especially people like me with a lot on their plates. I realize we have not been working together for very long, but even so, you've done a lot to help me, and I hope to be able to do the same!",
		"Shannon Trinh",
		"Hi Professor! Thank you so much for being such an awesome teacher this past semester! I learned a lot from your lectures and appreciate the enthusiasm and energy you have put into each and every class! I hope that you have a fantastic summer! If our paths do not cross again after graduation, I wish you the very best in life because you deserve it (hopefully they cross again lol)",
		"Ronald Tran",
		"Hi Dr. Steichen!! Thank you for all your help and support these past two years :) I’ve learned so much from your GUI class, to having the honor of doing research with you, and now getting to work alongside you for sheCodes! You have helped me become a better student and person, and with your help I’ve become more confident in my abilities. I’m excited to see how sheCodes and research will continue into next year!",
		"Patriz",
		"Hi Dr. Steichen, it's been a blast being in this class. Thank you for taking the time to explain everything so clearly and for really caring about your students! We appreciate you!",
		"Tera E.",
		"Thank you for being such a knowledgeable, pure, and kind soul. Never change Ben Steichen! (PS: shout out to the country Luxembourg) ",
		"Mora Labisi",
		"Hello Dr. Steichen, thank you so much for everything you taught me in GUI Design. I will treasure the many lessons I've learned as I see user interfaces with a new critical eye. I hope you and your family stay safe during these times. Thank you again!",
		"Diana Choi",
		"Thank you Dr. Steichen! You've contributed so much to this school and to my own personal academic goals. I don't know a single student that hasn't enjoyed being in your classes or doing research with you. Stay toasty up there in the mountains, and hope to see you soon :)",
		"Angela Gadon",
		"Thank you for a great semester, have a great summer!",
		"Anonymous",
		"Thank you Dr. Steichen for all your help! We greatly appreciate all that you do to ensure your students succeed :)",
		"Jordyn Sato",
		"Thank you for being the best research professor! Your hard work and dedication to the students have meant so much to us, including me. You have jump started my career, and I owe you so much for it! I hope to see you again before moving to Washington. As you said, we haven't seen each other since last year!",
		"Jesus Leon",
		"Thanks Dr. Ben Steichen! The course I had with you was great & it was fun learning how the web searches works!",
		"Daniel Santana",
		"Dr. Steichen! Thank you so much for an amazing end of the Spring semester! Funny enough, you actually inspired me to dive deeper into web development after I took your course last spring semester (CS 2990) and I've now gone into the web development route because of you. I thoroughly enjoyed your humor from time to time in CS 4990 and CS 2450 and I hope that we can someday cross paths on campus this time! Enjoy skiing!",
		"Samuel Belarmino",
		"Hi Dr. Steichen!  I have definitely learned so much in your classes and you are one of my favorite professors I have had here at school! Thank you for being one of the coolest (and chillest) CS professors, and teaching me topics that truly support my career path. Hope you are staying healthy and safe!",
		"Anonymous",
		"Hi Dr. Steichen! Thank you for being a caring and helpful professor. I have definitely learned a lot of unique topics in your class! I appreciate all the support you give to your students, and I hope you are staying safe!",
		"Catherine Gronkiewicz"
	]

	for(i = 0; i < responses.length; i++){
		var nodeCard = document.createElement("A");
		var nodeLip = document.createElement("DIV");
		var nodeSeal = document.createElement("DIV");
		var nodeP = document.createElement("P");
		var nodeName = document.createElement("H4");

		nodeCard.classList.add("card");
		nodeLip.classList.add("lip");
		nodeSeal.classList.add("seal");
		nodeP.classList.add("small");

		nodeP.innerHTML = responses[i];
		i = i + 1;
		nodeName.innerHTML = responses[i];
		nodeCard.appendChild(nodeLip);
		nodeCard.appendChild(nodeSeal);
		nodeCard.appendChild(nodeP);
		nodeCard.appendChild(nodeName);
		document.getElementsByClassName("container")[0].appendChild(nodeCard);
	}
};
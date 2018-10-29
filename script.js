
const quiz = [
	{
		question: "What is the capital Of Ukraine?",
		answers: [
			{ src: "images/question1/OSLO.jpg", score: 0 },
			{ src: "images/question1/MOSCOW.jpg", score: 0},
			{ src: "images/question1/ODESSA.jpg", score: 0 },
			{ src: "images/question1/KIEV.jpg", score: 10 }
		] 
	}, 
	
	{
		question: "Which country was the Buddha born in?",
		answers: [
			{ src: "images/question2/INDIA.jpg", score: 0 }, 
			{ src: "images/question2/NEPAL.jpg", score: 10 }, 
			{ src: "images/question2/SRILANKA.jpg", score: 0 }, 
			{ src: "images/question2/TOKYO.jpg", score: 0 }
		]
	},
    
    {
		question: "Which food is a product of New York?",
		answers: [
			{ src: "images/question3/BUFFALO.jpg", score: 10 }, 
			{ src: "images/question3/DEEPDISH.jpg", score: 0 }, 
			{ src: "images/question3/PekingDuck.jpg", score: 0 }, 
			{ src: "images/question3/spaghetti.jpg", score: 0 }
		]
	},
	
    {
		question: "Fastest man alive?",
		answers: [
			{ src: "images/question4/ALSAFA.jpg", score: 0 }, 
			{ src: "images/question4/JUSTINGATLIN.jpeg", score: 0 }, 
			{ src: "images/question4/USAINBOLT.jpg", score: 10 }, 
			{ src: "images/question4/YOHAN.jpg", score: 0 }
		]
	},
    
    {
		question: "Tallest building in the world?",
		answers: [
			{ src: "images/question5/BURJ.jpg", score: 10 }, 
			{ src: "images/question5/SEARS.jpg", score: 0 }, 
			{ src: "images/question5/SH.jpg", score: 0 }, 
			{ src: "images/question5/WTC.jpg", score: 0 }
		]
	},    
    
    {
		question: "Longest river in the World?",
		answers: [
			{ src: "images/question6/NILE.jpg", score: 0 }, 
			{ src: "images/question6/AMAZON.jpg", score: 10 }, 
			{ src: "images/question6/CONGORIVER.jpg", score: 0 }, 
			{ src: "images/question6/YELLOW.jpg", score: 0 }
		]
	},
    
    {
		question: "Third largest Country in the world?",
		answers: [
			{ src: "images/question7/USA.jpg", score: 10 }, 
			{ src: "images/question7/INDIA.jpg", score: 0 }, 
			{ src: "images/question7/CHINA.jpg", score: 0 }, 
			{ src: "images/question7/BRAZIL.jpg", score: 0 }
		]
	},
    
    {
		question: "Biggest Desert in the world?",
		answers: [
			{ src: "images/question8/GOBI.jpg", score: 0 }, 
			{ src: "images/question8/SAHARA.jpg", score: 10 }, 
			{ src: "images/question8/NAMIB.jpg", score: 0 }, 
			{ src: "images/question8/THAR.jpg", score: 0 }
		]
	},
    
    {
		question: "Where will the next Olympics be held in 2020?",
		answers: [
			{ src: "images/question9/BEIJING.jpg", score: 0 }, 
			{ src: "images/question9/TOKYO.jpg", score: 10 }, 
			{ src: "images/question9/LA.jpg", score: 0 }, 
			{ src: "images/question9/PARIS.jpg", score: 0 }
		]
	},    
    
    {
		question: "Where will the next FIFA World Cup be Held?",
		answers: [
			{ src: "images/question10/CANADA.jpg", score: 0 }, 
			{ src: "images/question10/SOUTHAFRICA.jpg", score: 0 }, 
			{ src: "images/question10/QATAR.jpg", score: 10 }, 
			{ src: "images/question10/SWEDEN.jpg", score: 0 }
		]
	}
];

// image click to make it react.


const container = document.getElementById('quiz');

// build quiz HTML
for (let i = 0; i < quiz.length; i++) {
	const q = quiz[i];
	
	// create question container 
	const questionDiv = document.createElement('div');
	questionDiv.classList.add('question');
	


	// to add question
	const p = document.createElement('p');
	p.textContent = q.question;
	questionDiv.appendChild(p);
	
	
	// option div
	const options = document.createElement('div');
	options.classList.add('options');
	questionDiv.appendChild(options);
	
	// to add answers
	for (let j = 0; j < q.answers.length; j++) {
		
        const a = q.answers[j];
		const img = new Image();
		
        img.src = a.src;
		options.appendChild(img);
		
		img.onclick = function() {
            //document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
			q.score = a.score;
		};
	}
	// add to container
	container.appendChild(questionDiv);
}



// result

const resultsBtn = document.getElementById('results');
resultsBtn.onclick = function() {
	let score = 0;
	for (let i = 0; i < quiz.length; i++) {
		score += +quiz[i].score || 0;
	}
	const response = document.getElementById('response');
	response.textContent = " You scored: " + score + " %";
};





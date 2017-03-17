// Branches out, starts from first indentation in body, then element(s) inside and then continues
// Can use {} to go further into indentation if it goes on
// Make an array if there is more than one element inside that div/header/etc
// Cannot use html elements inside


// var jsonDataBody = [
// 	{
// 		"header": "h1"

// 	},
// 	{
// 		"div": {
// 			// attriubte class & value aside
// 			"class": "aside clearfix"
// 			// elements that are inside said class go in [] 
// 		}
// 	},
// ];

var simplifiedJson = [
	{
		"journalEntry": "1", 
		"date": "August 15, 2016",
		"title": "Why I Took This Class"
		"p": "I took this class to expand my knowledge in coding and use it in the future. Not to mention that poking behind the internet's curtains is pretty great."
		"img": undefined
	},
	{
		"journalEntry": "2"
		"date": "August 24, 2016"
		"title": "Ux vs UI"
		"p": { "UX stands for User Experience and UI stands for User Interface. UX is about the user and their experience using the site itself as opposed to UI which deals with the over all outlook of the site and how it is fashioned.", " I, also, would like to code all the things. In this venture, I am already enjoying all of the work that is being put into this class. Specifically, I'd like to put a background on this blog someday as well as a navigation so that all of these journals are organized by month." }
		"img": undefined
	},
	/* {
		"journalEntry": "3"
		"date": "September 9, 2016"
		"title": "CSS"
		"p": "Mr.Tan was not joking when he described CSS as black magic. Something mysteriously fixes another and I have no idea how. The fact being that it works, I could not be happier with the outcome. Clearly, I still have a lot to learn about CSS in terms of its inner workings. There are quite a few things that I would like to accomplish, like applying an image background for each article rather than having them separated by borders. While this process is incredibly frustrating, all will come in time. I look forward to finding my comfort zone with CSS. (Where ever that is...)"
		"img": undefined

	 },*/
	{
		"journalEntry": "4"
		"date": "October 3, 2016"
		"title": "DigimonGo"
		"p": "To start, I dished out all the work for html so that the structure would be there. However, going through the CSS portion was not as simple. This was one of the hardest works to deconstruct style wise, considering I had to toy with elements that I had not been properly introduced to until I looked them up on Google."
		"img": undefined
	},
	{
		"journalEntry": "5"
		"date": "October 7, 2016"
		"title": "Responsive Web Design"
		"p": "Responsive Web Design is a website responding to different media platforms based on different dimensions."
		"img": undefined
	},
];


/*
	Create a function named showAll
	Pass one parameter (data)
	
	inside the function
	iterate through data
		for each obj create elements
		create parent div
			'#first' + 'object.id'
		create h1
			append/add inner.HTML object.title to h1
			(Append means attach to specific spots
			Creating an element within another element
			Append will tag onto the last child or parent)
		Repeat for every val
		Append all elements + val


*/
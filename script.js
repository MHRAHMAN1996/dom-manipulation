/* Task 1 */
var heading = document.getElementById('heading')
console.log(heading.innerText)


/* Task 2 using plain JavaScript */
//task 2a 
function addText2(){
	var task2div = document.getElementById('task2a')
	var paragraph = document.createElement('p')
	paragraph.innerText = "Hello World"
	task2div.appendChild(paragraph)
}

	var textBtn = document.getElementById('textBtn2a')
	textBtn.addEventListener('click',addText2)
	
//Task 2b
function changeBGcolor(event){
	var body = document.getElementsByTagName('body')[0]
	if(event.target.innerText == "Red"){
		body.style.backgroundColor = 'red'
	}
	if(event.target.innerText == "Green"){
		body.style.backgroundColor = 'green'
	}		
}

// Taskk 2c
function redirectToGoogle(){
    window.location.assign('https://www.google.com/')
}

/* Task 4 using jQery */

// Task 4a
$('#addTask4').click(function(event){
    var pragraph = $('<p>').text('Hello World')
    $('#Task4a').append(pragraph)
})

// Task 4b
function changeBG (event){
    var color = " even.target.linerText.toLowerCase()";
    $('body').css('backgroundColor',color)
}
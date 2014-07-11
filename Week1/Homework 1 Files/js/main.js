/*
     Name:Shaun Gehrke
     Date:07/09/14
     Class & Section:  WIA-1407
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
//Using onload only once per page!!!!
window.onload = function(){
//creating global function for getting the canvas


	//set up canvas part 1
	var myCanvas1 = document.getElementById("canvasPart1");
	//using modernizer to check if canvas is supported
	if(Modernizr.canvas){
		//set up canvas part 1
		var myCanvas1 = document.getElementById("canvasPart1");
		var ctx = myCanvas1.getContext("2d");
		//setting the style first
		ctx.fillStyle = "blue";
		ctx.strokeStyle = "black";
		//now I will draw my first line with canvas
		ctx.fillRect(0,0,50,100);
		ctx.strokeRect(0, 0, 50, 100);
		
	


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
	//set up canvas part 2

	var myCanvas2 = document.getElementById("canvasPart2");
	
	
		var ctx = myCanvas2.getContext("2d");
		
		//Styles
		ctx.fillStyle = "rgba(255,0,0,.5)";
		ctx.strokeStyle = "black";
		//starting the circle
		ctx.beginPath();
		ctx.arc(50,50, 30, 0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();
	


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
	var myCanvas3 = document.getElementById("canvasPart3");
	
	
		var ctx = myCanvas3.getContext("2d");
		
		//Styles
		ctx.fillStyle = "rgba(255,255,0,.8)";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 5;
		//starting the Star
		ctx.beginPath();
		ctx.moveTo(100,100);
		ctx.lineTo(200,100);
		ctx.lineTo(235,10);
		ctx.lineTo(265,100);
		ctx.lineTo(365,100);
		ctx.lineTo(285,160);
		ctx.lineTo(315,255);
		ctx.lineTo(235,200);
		ctx.lineTo(150,255);
		ctx.lineTo(180,160);
		ctx.lineTo(100,100);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
	

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
	var myCanvas4 = document.getElementById("canvasPart4");
	

		var ctx = myCanvas4.getContext("2d");
		
		//Styles
		ctx.fillStyle = "rgba(255,0,255,.8)";
		ctx.strokeStyle = "black";
		//starting the the Umbrella
		ctx.beginPath();
		ctx.arc(250,150, 125, 1*Math.PI, 2*Math.PI);
		ctx.bezierCurveTo(343.75,100,312.5,150,312.5,150);
		ctx.bezierCurveTo(275,100,250,150,250,150);
		ctx.bezierCurveTo(212.75,100,187.5,150,187.5,150);
		ctx.bezierCurveTo(156.25,100,125,150,125,150);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
	var myCanvas5 = document.getElementById("canvasPart5");
	

		var ctx = myCanvas5.getContext("2d");
		var stringText = "This is text using HTML5 canvas"
		ctx.lineWidth = 4;
		
		//Styles
		ctx.font = "25pt Myriad Pro";
		ctx.fillStyle = "orange";
		ctx.strokeStyle = "black";
		
		
		//starting drawing text
		ctx.strokeText(stringText, 30, 150);
		ctx.fillText(stringText,30,150);//I placed the fill after the stroke and changed the width of the stroke line so you could really see the letters
		

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

	var myCanvas6 = document.getElementById("canvasPart6");
	

		var ctx = myCanvas6.getContext("2d");

		var srcImg = document.getElementById("img1");
		//1. The image exactly as it is. This will be the lowest image.
		ctx.drawImage(srcImg, -305,350);
		
		//2. Shrink the image by 50%. This is the middle image.
		ctx.drawImage(srcImg,-150,20, 1650, 544);
		
		//3. Slice a section of the logo out and draw that onto the canvas. This is the top image.
		ctx.drawImage(srcImg, 2535,165, 175, 200, 5,0, 100,100);
	


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
	var myCanvas7 = document.getElementById("canvasPart7");
	

		var ctx = myCanvas7.getContext("2d");
		//Title rectagle stlye
		ctx.fillStyle = "grey";
		ctx.strokeStyle = "black";
		//Title Rectangle Draw
		ctx.fillRect(canvasPart7.width/2-150, canvasPart7.height/2-150,300,50);
		ctx.strokeRect(canvasPart7.width/2-150, canvasPart7.height/2-150, 300, 50);
		//Title text
		var stringText = "Scared Fish"
		ctx.lineWidth = 3;
		
		//Styles
		ctx.font = "25pt Myriad Pro";
		ctx.fillStyle = "orange";
		ctx.strokeStyle = "black";
		
		
		//starting drawing text
		ctx.strokeText(stringText, 175, 35);
		ctx.fillText(stringText,175,35);		
		//Water style
		ctx.fillStyle = "rgba(0,0,255,.7)";
		ctx.strokeStyle = "black";
		ctx.lineWidth = 5;
		//Begin shape to contain the water
		ctx.beginPath();
		ctx.moveTo(500,100);
		ctx.lineTo(500,300);
		ctx.lineTo(0,300);
		ctx.lineTo(0,100);
		//Start the bezier for the waves
		ctx.bezierCurveTo(50,50,50,50,100,100);
		ctx.bezierCurveTo(150,150,150,150,200,100);
		ctx.bezierCurveTo(250,50,250,50,300,100);
		ctx.bezierCurveTo(350,150,350,150,400,100);
		ctx.bezierCurveTo(450,50,450,50,500,100);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
		//start style for fish
		ctx.fillStyle = "orange";
		
		//start path for fish tail
		ctx.beginPath();
		ctx.moveTo(225, 250);
		ctx.lineTo(200, 275);
		ctx.lineTo(200, 200);
		ctx.lineTo(225, 250);
		ctx.quadraticCurveTo(325,125,350,250);
		ctx.quadraticCurveTo(325,300,225,250);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
		//the fishes eye style
		ctx.fillStyle = "white";
		ctx.lineWidth = 1;
		
		//the fishes eye using a circle
		ctx.beginPath();
		ctx.arc(320,220, 10, 0, 2*Math.PI);
		ctx.moveTo(320,220)
		ctx.arc(320,220, 1, 0, 2*Math.PI);
		//fishy mouth 
		ctx.moveTo(350, 250);
		ctx.quadraticCurveTo(300, 250, 310, 260);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
	} else {
		alert("Your browser is outdated! Please update so you can experience the web the way it was meant to be experienced!")
	};

}
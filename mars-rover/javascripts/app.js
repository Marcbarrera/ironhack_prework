/*Objeto rover*/
var rover={
	direction:"N",
	x:0,
	y:0,
	travelLog:[]
}
/*Funcion que indica la posición del rover*/
function alertPosition(rover){
	if(rover.y<0){
		rover.y=0;
		console.log("you can't go there");
	}
	if (rover.y>9){
		rover.y=9;
		console.log("you can't go there");

	}
	if (rover.x<0){
		rover.x=0;
		console.log("you can't go there");
	}
	if (rover.x>9){
		rover.x=9;
		console.log("you can't go there");
	}
}

/*Función para girar el rover a la izquierda*/

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
  	case "N":
  	rover.direction="W";
  	console.log("Your new direction is W");

  	break;
  	case "W":
  	rover.direction="S";
  	console.log("Your new direction is S");

  	break;
  	case "S":
  	rover.direction="E";
  	console.log("Your new direction is E");

  	break;
  	case "E":
  	rover.direction="N";
  	console.log("Your new direction is N");

  	break;
  }
}
/*Función para girar el rover a la derecha*/

function turnRight(rover){
  console.log("turnRight was called!");
   switch(rover.direction){
  	case "N":
  	rover.direction="E";
  	console.log("Your new direction is E");
  	break;
  	case "W":
  	rover.direction="N";
  	console.log("Your new direction is N");

  	break;
  	case "S":
  	rover.direction="W";
  	console.log("Your new direction is W");

  	break;
  	case "E":
  	rover.direction="S";
  	console.log("Your new direction is S");

  	break;
  }
}
/*Función para mover el rover hacia delante*/

function moveForward(rover){
  console.log("moveForward was called")
  switch(rover.direction){
  	case "N":
  	rover.y-=1;
  	break;
  	case "W":
  	rover.x-=1;
  	break;
  	case "S":
  	rover.y+=1;
  	break;
  	case "E":
  	rover.x+=1;
  	break;
  }
  alertPosition(rover);
  console.log("the position of the rover is: x:"+rover.x+", y:" +rover.y);
  rover.travelLog.push([rover.x, rover.y]);
}


/*Función para mover el rover hacia detrás*/
function moveBackwards(rover){
  console.log("moveBackwards was called")
  switch(rover.direction){
  	case "N":
  	rover.y+=1;
  	break;
  	case "W":
  	rover.x+=1;
  	break;
  	case "S":
  	rover.y-=1;
  	break;
  	case "E":
  	rover.x-=1;
  	break;
  }
  alertPosition(rover);
  console.log("The position of the rover is: x:"+rover.x+", y:" +rover.y);
  rover.travelLog.push([rover.x, rover.y]);
}



var input="RFLBMrflbflfrbbbkf";
var listCommands=input.toLowerCase();
function commands(){
	for(var i=0;i<listCommands.length;i++){
		switch(listCommands[i]){
			case "r":
			turnRight(rover);
			break;
			case "f":
			moveForward(rover);
			break;
			case "l":
			turnLeft(rover);
			break;
			case "b":
			moveBackwards(rover);
			break;
			default:
			console.log("incorrect command");
			break;
		}
	}
}

commands(listCommands);
console.log(rover.travelLog);



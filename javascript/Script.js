//global vairable
var ARRAYVALUE =["1","2","3","4","5","6","7","8","9"],ARRAYKEYVALUE=[],ButtonId=[],colorClass,randomizeArray=[],Arrayvaluekey = new Map(),classes,values
//-----------------------------------------------------------Event function---------------------------------------------------------------

//innitialize() is Event Function which initialize the Dom By using priavte function _initializeButttonValue()
function initialize(){ 
	_initializeButtonValue(ARRAYVALUE);//private function
}

//Restore() is a Event function which reset the value using Dom manipulating function _reinitialize()
function restore(){ 
	var arrayRestore=["1","2","3","4","5","6","7","8","9"];
	_initializeButtonValue(arrayRestore);	//private function
  _restoreColor();
}

//Shuffle() is a Event function which shuffle the value using Dom functon _doShuffle()
function shuffle(){ 
	_doShuffle(ARRAYVALUE);	//private function
	_initializeButtonValue(ARRAYVALUE); // call to _initializeButtonValue  with parameter randomizeArray which is shuffle array.
	_rearrangeColor(ARRAYVALUE);
}

//selectColor() is Event function which select the color we want to assign to element using _selecteddColor()
function selectColor(){ 
	_selectedColor();
}

function assignColor(element){ 
	element.className = colorClass
	ARRAYKEYVALUE.push({classes:colorClass,values:element.value})	
}

// -------------------------------------------------Private Function DOM manipulates-----------------------------------------------------

// Private function which initialize value to the button
function _initializeButtonValue(initialButton){ 
	for(i=0;i<initialButton.length;i++){
		document.getElementById(i+1).setAttribute('value',initialButton[i]);
	}
}

// Shuffle the array.
function _doShuffle(randomizeArray){ 
	counter = randomizeArray.length;
	while (counter > 0) {
		index = Math.floor(Math.random() * counter);
  	counter--;
  	temp = randomizeArray[counter];
  	randomizeArray[counter] = randomizeArray[index];
  	randomizeArray[index] = temp;
  } //while loop
}

// private function to select the color i.e throught radio button
function _selectedColor(){ 
	if(document.getElementById("red").checked){
		colorClass = "redColor"
	}
	else if(document.getElementById("green").checked){
		colorClass = "greenColor"
	}
	else{
		colorClass = "blueColor"
	}
}
 
function _rearrangeColor(randomArray){
	for(i=0;i<randomArray.length;i++){
		var id 
		id = document.getElementById(i+1);
		for(j=0;j<ARRAYKEYVALUE.length;j++){
			if(id.value == ARRAYKEYVALUE[j].values){
				id.className = ARRAYKEYVALUE[j].classes
			}
		}
	}
}


function _restoreColor() {
  for(i=0;i<9;i++){
    var id = document.getElementById(i+1);
    id.style.backgroundColor = "#CBCBCB";
  }
}
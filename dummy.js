var x=[];
var y=[];
function getInput(i){
y.push(i);
document.getElementById("textarea").value=y.join('');

	x.push(y[y.length-1]);



}

var arrayOFOp=document.getElementsByClassName("op");
for(var i=0;i<arrayOFOp.length;i++){
	arrayOFOp[i].addEventListener('click',function(){
		

		document.getElementById("textarea").value="";
		y=[];
	})
}
var addition,muliply,division,subtraction;
function add(){
	x.push('+');
	 addition=1;
}
var index,input1,input2;
var a=[];
function clearAll(){
	x=[];
	a=[];
	addition=division=subtraction=muliply=0;
	document.getElementById("textarea").placeholder="0";

}
function mul(){
	x.push('*');
	 muliply=1;
}
function div(){
	x.push('/');
	 division=1;
}
function sub(){
	x.push('-');
	 subtraction=1;
}
function compute(){
	if(addition==1){

		 index=x.indexOf('+');
		 for(var i=0;i<index;i++){
				 	a.push(x[i]);
		 }
		 var inputString1=a.join('');
		 input1=parseFloat(inputString1);
		 console.log(input1)
		 if(isNaN(input1))
		 	input1=0;
		 a=[];
		 for(var j=index+1;j<x.length;j++){

		 	a.push(x[j]);
		 }
		 var inputString2=a.join('');
		 input2=parseFloat(inputString2);
		 if (isNaN(input2)){
		 	input2=0;
		 }
		console.log("input 1 is "+input1+" input2  string is "+input2);
		 var c=input1+input2;
		 var sum=c.toString();
		 
		document.getElementById("textarea").placeholder=sum;
		
	}
	if(muliply==1){

		 index=x.indexOf('*');
		 for(var i=0;i<index;i++){
				 	a.push(x[i]);
		 }
		 var inputString1=a.join('');
		 input1=parseFloat(inputString1);
		 console.log(input1)
		 if(isNaN(input1))
		 	input1=0;
		 a=[];
		 for(var j=index+1;j<x.length;j++){

		 	a.push(x[j]);
		 }
		 var inputString2=a.join('');
		 input2=parseFloat(inputString2);
		  if (isNaN(input2)){
		 	input2=0;
		 }
		console.log("input 1 is "+input1+" input2  string is "+input2);
		 var c=input1*input2;
		 var prod=c.toString();
		 
		document.getElementById("textarea").placeholder=prod;
	}
	if(division==1){

		 index=x.indexOf('/');
		 for(var i=0;i<index;i++){
				 	a.push(x[i]);
		 }
		 var inputString1=a.join('');
		 input1=parseFloat(inputString1);
		 console.log(input1)
		 if(isNaN(input1))
		 	input1=0;
		 a=[];
		 for(var j=index+1;j<x.length;j++){

		 	a.push(x[j]);
		 }
		 var inputString2=a.join('');
		 input2=parseFloat(inputString2);
		  if (isNaN(input2)){
		 	input2=0;
		 }
		console.log("input 1 is "+input1+" input2  string is "+input2);
		 var c=input1/input2;
		 var divide=c.toString();
		 
		document.getElementById("textarea").placeholder=divide;
	}
	if(subtraction==1){

		 index=x.indexOf('-');
		 for(var i=0;i<index;i++){
				 	a.push(x[i]);
		 }
		 var inputString1=a.join('');
		 input1=parseFloat(inputString1);
		 console.log(input1)
		 if(isNaN(input1))
		 	input1=0;
		 a=[];
		 for(var j=index+1;j<x.length;j++){

		 	a.push(x[j]);
		 }
		 var inputString2=a.join('');
		 input2=parseFloat(inputString2);
		 if(isNaN(input2))
		 	input2=0;
		console.log("input 1 is "+input1+" input2  string is "+input2);
		 var c=input1-input2;
		 var minus=c.toString();
		 
		document.getElementById("textarea").placeholder=minus;
	}
}

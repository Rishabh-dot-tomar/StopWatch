
//variable declaration and initialixzation
let sec=0;
let min=0;
let milisec=0;

//boolean variable to monitor start and stop button
let boolean=0;

//Stopwatch logic function
function logic()
{
	milisec++;
	if(milisec===250)
	{
		milisec=0;
	    sec++;
	    if(sec/60 ===1)
	    {
	    	sec=0;
		    min++;
		    if(min /60 ===1)
		    {
		    	min=0;
			    hour++;
		    }
	    }
    }
let dispmsec=null;
 //digit correction for miliseconds
   if(milisec<10)
   {
   	dispmsec="0"+milisec.toString();
   }
   else
   	dispmsec=milisec;
   
 //digit correction for seconds

   if(sec<10)
   	dispsec="0"+sec.toString();
   else 
   	dispsec=sec;

    
	
	document.getElementById("minutes").innerHTML=min;
	document.getElementById("seconds").innerHTML=dispsec;
	document.getElementById("milisec").innerHTML=dispmsec;
	
}

var timer=null;

//onclick start event
function start(){

	if(boolean==0)
	{
       timer=setInterval(logic,1);
       boolean=1;
	}

}

// on click stop event
function stop(){
	if(boolean==1)
	{
		clearInterval(timer);
		boolean=0;
	}
}

//on click reset event
function reset(){
	clearInterval(timer);
	sec=0;
	milisec=0;
	hour=0;
	min=0;
	document.getElementById("seconds").innerHTML="00";
	document.getElementById("minutes").innerHTML="00";
	document.getElementById("milisec").innerHTML="00";
	boolean=0;
}



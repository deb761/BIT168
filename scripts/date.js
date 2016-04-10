// JavaScript Date Function - edited from W3Schools tutorial by Lauribeth Hull

//Changes the contents of an element with the id="date"
function startTime()
{
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('date').innerHTML=Date().toString().substring(0,15)+ ", " +h+":"+m+":"+s;
	t=setTimeout('startTime()',500);
}



// a function to add a zero in front of numbers<10
function checkTime(i)
{
	if (i<10)
	  {
	  i="0" + i;
	  }
	return i;
}
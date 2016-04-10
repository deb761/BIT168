// JavaScript Document

var loggedIn = false;

function createCookie(name,value,minutes)
{
	"use strict";
	var expires = "";
	if (minutes) 
	{
		var date = new Date();
		date.setTime(date.getTime()+(minutes*60*1000));
		expires = "; expires=" + date.toGMTString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name)
{
	"use strict";
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) === ' ')
		{
			c = c.substring(1, c.length);
		}
		if (c.indexOf(nameEQ) === 0)
		{
			return c.substring(nameEQ.length, c.length);
		}
	}
	return null;
}

function eraseCookie(name)
{
	"use strict";
	createCookie(name, "", -1);
}

if (navigator.cookieEnabled)
{
	var logcookie = readCookie("loggedin");
	if (logcookie)
	{
		if (logcookie === "true")
		{
			loggedIn = true;
		}
	}
}

/* pretend that the user has entered a valid password when an "enter" is pressed */
function login(event)
{
	"use strict";
	var key = event.which || event.keycode; // Use either which or keyCode, depending on browser support
	if (key === 0x000D)
	{
		loggedIn = true;
		updateMemberElements();
		createCookie("loggedin", "true", 10);
	}
}

function logout()
{
	"use strict";
	loggedIn = false;
	eraseCookie ("loggedin");
	updateMemberElements();
}

function updateMemberElements()
{
	"use strict";
	var elements = document.getElementsByClassName("member");
		
	for (var idx = 0; idx < elements.length; idx++)
	{
		var element = elements[idx];
		element.style.display = (loggedIn) ? "block" : "none";
	}
	document.getElementById("login").style.display = (loggedIn) ? "none" : "block";
}


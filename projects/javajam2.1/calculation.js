function Checknum(event)
{
	var num = event.currentTarget;
	if ((num.value.search(/^[0-9]$/))!=0)
	{
		alert ("Invalid");
        return false;
	}
}

function Calculate()
{
	jjreg = document.getElementById("jjreg").value;
	cals = document.getElementById("cals").value;
	cald = document.getElementById("cald").value;
	caps = document.getElementById("caps").value;
	capd = document.getElementById("capd").value;

	document.getElementById("jjreg1").innerHTML = jjreg;
	document.getElementById("jjreg1_result").innerHTML = parseFloat(Math.round((jjreg*2.00))).toFixed(2);
	document.getElementById("cals1").innerHTML = cals;
	document.getElementById("cald1").innerHTML = cald;
	document.getElementById("caps1").innerHTML = caps;
	document.getElementById("capd1").innerHTML = capd;
	document.getElementById("result").innerHTML = parseFloat(Math.round((jjreg*2.00)+(cals*2.00)+(cald*3.00)+(caps*4.75)+(capd*5.75))).toFixed(2);
}
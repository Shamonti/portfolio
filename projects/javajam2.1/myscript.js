function Checkname(event)
{
	var myname = event.currentTarget;
	if ((myname.value.search(/^[a-zA-Z\s]*$/))!=0)
	{
		alert ("Only enter valid characters!");
		myname.focus();
		myname.select();
        return false;
	}
}

function Checkemail(event)
{
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function Checkdate(event) 
{
	var mydate = event.currentTarget;
	var pos = new Date(mydate.value);
	var today = new Date();
	if ( pos <= today)
	{
		alert("Invalid Date!")
		mydate.focus();
		mydate.select();
		return false;
	}
}
var nameNode = document.getElementById("name");
var emailNode = document.getElementById("email");
var dateNode = document.getElementById("date");

nameNode.addEventListener("change", Checkname, false);
emailNode.addEventListener("change", Checkemail, false);
dateNode.addEventListener("change", Checkdate, false);
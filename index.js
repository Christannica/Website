

function password_prompt() {

	    var password = prompt("Please enter the correct password ", ""); //password = javascript
    	    if (password == "javascript") {
    	    var x = confirm("Please confirm you want to enter the webpage!");
        	if (x != 1) {
        	window.close();
        	window.open("https://www.google.com/");
    	    	}
	    }	
    	    if (password != "javascript") {
        	alert("You entered the wrong password! Page will now close!");
        	window.close();
    	    	window.open("about:blank");
        	    

    	    }
}	
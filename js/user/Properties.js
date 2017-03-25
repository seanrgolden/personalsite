var config={
		"protocol" : "http",
		"port" : "5555",
		"domain" : "localhost",
		"project" : "mavenexampl"
}

/*
 * Do not change the code below this point
 * Only change the port number in the config object
 */

function getURI(){
	return config.protocol +"://"+ config.domain +":"+ config.port +"/"+ config.project +"/api/" ;
}
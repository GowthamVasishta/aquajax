/*
 * Aqua ajax framwork
 * version 0.0.0.1
 */

function create_request() {
    var http = false;
    
    try {
        http = new XMLHttpRequest();
    }
    catch(e1) {
        try {
            http = new ActiveXobject("Microsoft.XMLHTTP");
        }
        catch(e2) {
                try {
                    http = new ActiveXobject("Msxml2.XMLHTTP");
                }
                catch(e3){
                    alert("Your browser software does not support AJAX mechanism !");
                }
        }
    }
    
    if(!http){
        return false;
    }   
    
    return http;
}

//assign an xmlhttprequest object
var xmlhttp = create_request();

//for get method
function get_send(url, parameters, output_id) {
    
        xmlhttp.onreadystatechange=function() {
            
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                document.getElementById(output_id).innerHTML=xmlhttp.responseText;
            }
            
        }
        
        //append parameters to the url
        xmlhttp.open("GET",url+"?"+parameters,true);
        xmlhttp.send();
}

// for POST method
function post_send(url, parameters, output_id) {
    
        xmlhttp.onreadystatechange=function() {
            
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                document.getElementById(output_id).innerHTML=xmlhttp.responseText;
            }
            
        }
        
        xmlhttp.open("POST", url, true);
        // set the content type header
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        //send the parameters
        xmlhttp.send(parameters);
}







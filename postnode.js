var http = require('http');
var querystring=require('querystring');
var qs,name,password;
 http.createServer(function(req, res) {  
        var d= '';
        
    req.on('data', function(chunk) {   
                    console.log(chunk);
                    d += chunk;  
                    console.log("Data in String format: "+d);
                    });
    req.on('end', function() {
            
                qs=querystring.parse(d);
                console.log(qs);

                name=qs['name'];
                password=qs['password']
        
                res.write("You have successfully logged in with username " + name + "and check your password " + password);
                res.end(); 
                });
    }).listen(8000);
console.log("Server started running...");
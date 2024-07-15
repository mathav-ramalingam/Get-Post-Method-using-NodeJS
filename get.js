http=require('http');
url=require('url');
querystring = require('querystring');

function sam(request,response)
{  
    if(request.url.includes('/login'))
    {
    console.log('URL '+request.url+' received.');
    
    var path = url.parse(request.url).pathname;
    console.log('Request for '+path+' received.');
   
    var query =url.parse(request.url).query;
    
    console.log("QUERY IS:");
    console.log(query);
    
    qs=querystring.parse(query);
    console.log("QS IS:");
    console.log(qs);
    
    var name = qs["name"];
    var password=qs["password"];
    
    response.write("You have successfully logged in with username " + name + "and check your password " + password)
    response.end();
    }
}
http.createServer(sam).listen(7000);
console.log('Server has Started…….');
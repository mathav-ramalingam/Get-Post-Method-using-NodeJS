const http = require('http');
const url = require('url');
const querystring = require('querystring');

function getexample(request, response) {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    console.log(path)
    if (path === '/login')
    {
        console.log('URL ' + request.url + ' received. using get method');

        const qs = parsedUrl.query;
        console.log(qs);

        const name = qs["name"];
        const password = qs["password"];
        response.write(`
        <h1>Hello</h1>
        <p>You have successfully logged in with username ${name} and check your password ${password}.</p>
        `);
        response.end();
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('Page not found');
        response.end();
    }
}


http.createServer(getexample).listen(7000);
console.log('Server has Started……');
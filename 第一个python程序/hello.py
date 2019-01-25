def application(environ, start_response):
    print(environ['PATH_INFO'])
    start_response('200 OK', [('Content-Type', 'text/html')])
    return [b'<h1>Hello1, web!</h1>']y
    
# local testing server code
port = 80

from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path):
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('404.html', 'rb') as file:
                self.wfile.write(file.read())
        else:
            super().do_GET()
server_address = ('', port)
httpd = HTTPServer(server_address, CustomHandler)
print(f'Serving HTTP on :: port {port} (http://localhost:{port}/)')
httpd.serve_forever()
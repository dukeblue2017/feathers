# Feathers: A Simple Real Time Chat App

To test out the code, download and run:  
```npm install``` from both the root and client directories  
```npm run build``` from the client directory  
```nodemon server/index.js``` from the root directory

You will need to set the ```DB_HOST```, ```DB_USERNAME```, ```DB_PASSWORD```, and ```DB_DATABASE``` environment variables in a root level env.env file.

The server runs on port 8000 by default. Because of the way the authentication works, you will not be able to use the development server without disabling middleware. The server serves up the static files in the ```client/build``` directory, so be sure to run ```npm run build``` from the client directory after making any changes to the client files.

Thanks for checking it out!
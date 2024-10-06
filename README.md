# Node Project

### Setup Project

- Inside the project root director run the command `npm init`

- What is NPM?
```
NMP Is a package manager for Node.js. It allows you to install and manage Node.js packages. It is the default package manager for Node.js.
```

- The above command will guide you through the process of creating a package.json file.

- Run this command to install the node_modules or dependencies of node. `npm install`

### Overview of Package.json

- The package.json file is used to define the project's dependencies, scripts, and other metadata.

- The `dependencies` section lists the packages that your project depends on.

- The `scripts` section defines scripts that can be run from the command line.

- What is actual purpose of the `scripts` object in package.json? 
```
The scripts object in package.json is used to define custom scripts that can be run from the command line. These scripts can be used to automate repetitive tasks or perform complex build processes.
```

- To run the defined script, use the command `npm run <script-name>`.

- What is the `package-lock.json` file?
```
package-lock.json is a lock file that is automatically generated when you run `npm install`. It contains a record of the exact versions of the packages that were installed, so that subsequent installs are guaranteed to produce the same result.
```

### Project Overview

This project is a simple node js project of the TODO list. We will be using express.js for building the API and MySQL for database operations. We will be creating a simple API for creating, reading, updating, and deleting TODO items.

### Installing Dependencies
`https://www.npmjs.com/`
- Express.js `npm install express --save`
- MySQL `npm i mysql2`
- Nodemon (Optional) `npm install -g nodemon`
- Sequelize (ORM) (Optional) `npm install sequelize`
- Dot ENV (Optional) `npm install dotenv`

### FAQ

To Create a Web Server in node, do we need to use Express.js ONLY ?

- No
- Express JS is a framework which is built on top of Node's Default HTTP module. It provides a set of features for building web applications.

What is a HTTP Module in Node.js?

- It is a built-in module of Node.js that provides an API for creating an HTTP server and handling HTTP requests.

Why we use Express JS? 

- Because of Server Boilerplate Code;
- Its provides a set of features out of the box;
- Easy to use, and Need to write less code.
- Express JS already done the heavy lifting for us.

Do I need to start server each and every time I do some changes in the code?

- Yes, we need to start the server each and every time we do some changes in the code.
- or Simply use `nodemon` to restart the server automatically when we make changes to the code.

What is the nodemon module?

- It is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- After installing instead of using node app.js, use the command `nodemon app.js` to start the server.

What is a Middlewares in Express.js?

- It is a function that is executed before the main request handler.
- It can be used to perform tasks like logging, authentication, authorizations and routing.

In JS How many types of variables are there?

1. Primitive Type Variables
2. Object Type Variables
3. Array Type Variables
4. Function Type Variables
5. Null Type Variables
6. Undefined Type Variables

What is .env file ?
- It is a file that contains environment variables.
- It is used to store sensitive information like API keys, database credentials, etc.
- It is a good practice to keep.env file outside the project directory.

What is XAMPP ?
- XAMPP is a free and open-source cross-platform compatible solution for MySQL, PHP, and Apache. It is a popular choice for local development and testing.
- It Contains all modules required for running a web server, including MySQL, PHP, and Apache.
- Web Server (Apache)
- Database Management System (MySQL) with PHPMyAdmin
- File Transfer Protocol(FTP) (Filezilla)

What is Apache ?
- Apache is a free and open-source cross-platform compatible web server software. It is used to serve dynamic content to the client.
- It is a powerful and flexible web server that can handle a large number of requests.

What is MySQL ?
- MySQL is a relational database management system. It is used to store and retrieve data in a structured way.
- It is a service that runs on a server and provides access to a database.

What is PHPMyAdmin ?

- PHPMyAdmin is a web interface for MySQL. It is a powerful tool for managing MySQL databases.
- It provides a graphical interface for managing databases, tables, and records.
- It built over PHP.

What is difference between POST, PUT, and PATCH Request Methods?

1. POST: Used to create a new resource on the server.
2. PUT: Used to update an existing resource on the server.
3. PATCH: Used to update a part of an existing resource on the server.

What makes the difference in PUT and PATCH?

- PUT: It replaces the entire resource with the new data.
- PATCH: It updates only the specified fields of the resource.

### Project File Details (Structure)

- app.js (Is the Entry Point of the application)
- app_http.js (Demo for how to server using HTTP module)
- app_express.js (Demo for how to server using Express.js)

### Express.js

- Express.js is a web application framework for Node.js. It provides a set of features for building web applications.
- To install Express.js, use the command `npm install express --save`

### Setup Server

- app.js is the entry point of the application, and created a new instance of the Express.js application.

### MYSQL

To run MySQL in here local machine, we need to install MySQL server and MySQL client.
Or We can simply use XAMPP Server which is a free and open-source cross-platform compatible solution for MySQL.

### Creating a Database Using PHP MyAdmin

- Skip

### CRUD Database Operations

- Skip

### API

Process of creating an API:
- Creating a Server;
- Defining Enviroment Variables;
- Creating a Database Connection in `utils/db.js`
- Creating Routes in `routes/todo.js` using router;

### Routes in Express

### Building the API

### API Testing in Postman

- Install Postman from `https://www.getpostman.com/`
- Login to Postman
- What is Workspace in Postman?
- Creating a New Collection
- Create a new request
- Global Variables
-- To Define a Global Variable, First we need add Environement Variable in Postman.
- Publishing the Collection

### Git and Github Integration

- We will create a new git repo for this project directly using Terminal from VSCode;
- Command to create a new repo: `git init`
- Command to add all files to the repo: `git add .`
- Command to commit changes: `git commit -m "commit message"`
<!-- - Command to push changes to the remote repo: `git push origin master` -->
- Create a new Github repository and link it to the local repo using `git remote add origin <repository-url>`
- To check the config of the repo: `git config --list`

- To push changes to the remote repo: `git push origin <branch-name>`

- How to create a new branch? To Create a new branch, use the command `git branch <branch-name>`
- How to switch to a branch? To switch to a branch, use the command `git checkout <branch-name>`
- How to merge a branch? To merge a branch, use the command `git merge <branch-name>`

- To check the status of the repo: `git status`
- To check the log of the repo: `git log`

- What is the difference between git pull and git fetch?
```
git pull is a combination of git fetch and git merge. It downloads the latest changes from the remote repository and merges them with the local repository.

git fetch downloads the latest changes from the remote repository but does not merge them with the local repository.
```

### What is Sequelize ORM ?

Sequelize is an Object-Relational Mapping (ORM) library for Node.js and JavaScript. It provides an easy way to interact with relational databases, using an object-oriented paradigm. It provides a simple and intuitive API for working with MySQL, PostgreSQL, MariaDB, SQLite, and Microsoft SQL Server.

- What is model in Sequelize?
```
A model in Sequelize is a class that represents a table in the database. It defines the table's schema, columns, and relationships with other models.
```

- What is a relationship in Sequelize?
```
A relationship in Sequelize is a way to define a one-to-many, one-to-one, or many-to-many relationship between two models. It allows you to create complex data structures and relationships between models.
```

### Conclusion

In this project, we have learned about Node.js, Express.js, MySQL, and how to create a simple API using Express.js. We have also learned about Git and Github integration.

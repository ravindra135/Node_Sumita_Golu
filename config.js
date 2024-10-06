const dotenv = require('dotenv');
dotenv.config({ path: '.env', section: process.env.NODE_ENV });

module.exports = {
    "db" : {
        "hostname" : process.env.DB_HOST,
        "username" : process.env.DB_USER,
        "password" : process.env.DB_PASSWORD,
        "database" : process.env.DB_NAME
    }
}

// This is how module exports work in Node.js.
/* const configuration = {
    "db_config" : {
        "hostname" : "localhost",
        "username" : "root",
        "password" : "password",
        "port" : "3306"
    }
}

const demo = {
    "name" : "John",
    "age" : 30,
    "city" : "New York"
}

module.exports = {
    configuration
    // as demo is missing, you cannot access;
} */
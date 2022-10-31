
require('dotenv').config();

 const config = {
    host: process.env.host,
    user: process.env.user,
    PORT: process.env.PORT,
    password: process.env.password.toString(),
    database: process.env.database
}
module.exports = config;
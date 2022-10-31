const pool = require('../db/index')


module.exports.getAllStudents = async (req, res) => {
    const query = `Select * from students`;
    const value = [];


    const client = await pool.connect();
    
    try {
        await client.query("BEGIN")
        const result = await client.query(query, value);
        console.log(result.rows);
        
        await client.query("COMMIT");
        res.status(200).json({
            state : "success",
            data : result.rows
        })
        
    } catch (error) {
        console.log("this is the error", error);
        client.query("ROLLBACK")
        
    } 
    finally  {

        await client.release();
    }
}

module.exports.getStudents = async (req, res) => {
    
    const query = `Select * from students where id = $1`;
    const value = [req.params.id];


    const client = await pool.connect();
    
    try {
        await client.query("BEGIN")
        const result = await client.query(query, value);
        console.log(result.rows);
        
        // await client.query('INSERT INTO students (first_name, age) VALUES($1, $2)', ['biruk', 22]);
        await client.query("COMMIT");

        res.status(200).json({
            state : "success",
            data : result.rows
        })
        
    } catch (error) {
        console.log("this is the error", error);
        client.query("ROLLBACK")
        
    } finally  {
        await client.release();
    }
}


module.exports.updateStudents = async (req, res) => {

    const query = `UPDATE students SET first_name = $2 WHERE id = $1`;
    const value = [req.params.id, req.body.first_name];


    const client = await pool.connect();
    
    try {
        await client.query("BEGIN")
        const result = await client.query(query, value);
        console.log(result.rows);
        
        await client.query("COMMIT");

        res.status(200).json({
            state : "successfully updated",
            data : result.rows
        })
        
    } catch (error) {

        console.log("this is the error", error);
        client.query("ROLLBACK")
        
    } finally  {
        await client.release();
    }
}



module.exports.createStudents = async (req, res) => {

    const query = `INSERT INTO students (first_name, age) VALUES($1, $2)`;
    const value = [ req.body.first_name, req.body.age];


    const client = await pool.connect();
    
    try {
        await client.query("BEGIN")
        const result = await client.query(query, value);
        console.log(result.rows);
        
        await client.query("COMMIT");

        res.status(200).json({
            state : "successfully created",
            data : result.rows
        })
        
    } catch (error) {
        console.log("this is the error", error);
        client.query("ROLLBACK")
        
    } finally  {
        await client.release();
    }
}



module.exports.deleteStudents = async (req, res) => {

    const query = `DELETE FROM students WHERE id = $1`;
    const value = [ req.params.id];

    const client = await pool.connect();
    
    try {
        await client.query("BEGIN")
        const result = await client.query(query, value);
        console.log(result.rows);
        
        await client.query("COMMIT");

        res.status(200).json({
            state : "successfully deleted",
            data : result.rows
        })
        
    } catch (error) {
        console.log("this is the error", error);
        client.query("ROLLBACK")
        
    } finally  {
        await client.release();
    }
}
import mysql from 'mysql2';


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_database'
});

conn.connect(function (err) {
    
    console.log('Database_node connected!');
});


export {conn}

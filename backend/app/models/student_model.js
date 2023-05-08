const db = require('../database/connection');

const Student = function(student) {
    this.id = student.id;
    this.lname = student.lname;
    this.fname = student.fname;
    this.cid = student.cid;
}

Student.getAllStudent = async function (result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var query = 'SELECT * FROM student';
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
}

Student.getStudentById = async function (id, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var query = `SELECT * FROM student WHERE student.id = ${id}`;
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
}

Student.addStudent = async function (data, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var lname = data.lname;
    var fname = data.fname;
    var cid = data.cid;
    var query = `INSERT INTO student (fname,lname,cid) VALUES ('${lname}','${fname}',${cid});`;
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
}

Student.deleteStudent = async function (id, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var query = `DELETE FROM student WHERE student.id = ${id}`;
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
    });
}

Student.updateStudent = async function (id, data, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var lname = data.lname;
    var fname = data.fname;
    var cid = data.cid;
    if (cid == null) {
        var query = `UPDATE student SET student.lname = '${lname}', student.fname = '${fname}' WHERE student.id = ${id};`;   
    }
    else {
        var query = `UPDATE student SET student.lname = '${lname}', student.fname = '${fname}', student.cid = ${cid} WHERE student.id = ${id};`;
    }
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
    });
}

module.exports = Student;
const db = require('../database/connection');

const Student = function(student) {
    this.id = student.id;
    this.lname = student.lname;
    this.fname = student.fname;
    this.cid = student.cid;
}

Student.getAllStudent = function (result) {
    var query = 'SELECT * FROM student';
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
        db.end();
    });
}

Student.getStudentById = function (id, result) {
    var query = `SELECT * FROM student WHERE student.id = ${id}`;
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
        db.end();
    });
}

Student.addStudent = function (data, result) {
    var lname = data.lname;
    var fname = data.fname;
    var cid = data.cid;
    var query = `INSERT INTO student (fname,lname,cid) VALUES ('${lname}','${fname}',${cid});`;
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
        db.end();
    });
}

Student.deleteStudent = function (id, result) {
    var query = `DELETE FROM student WHERE student.id = ${id}`;
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
        db.end();
    });
}

Student.updateStudent = function (id, data, result) {
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
        db.end();
    });
}

module.exports = Student;
const db = require('../database/connection');

const Teacher = function(teacher) {
    this.id = teacher.id;
    this.lname = teacher.lname;
    this.fname = teacher.fname;
    this.cid = teacher.cid;
}

Teacher.getAllTeacher = function (result) {
    var query = 'SELECT * FROM teacher';
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
}

Teacher.getTeacherById = function (id, result) {
    var query = `SELECT * FROM teacher WHERE teacher.id = ${id}`;
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
}

Teacher.addTeacher = function (data, result) {
    var lname = data.lname;
    var fname = data.fname;
    var cid = data.cid;
    var query = `INSERT INTO teacher (fname,lname,cid) VALUES ('${lname}','${fname}',${cid});`;
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);

    });
}

Teacher.deleteTeacher = function (id, result) {
    var query = `DELETE FROM teacher WHERE teacher.id = ${id}`;
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
    });
}

Teacher.updateTeacher = function (id, data, result) {
    var lname = data.lname;
    var fname = data.fname;
    var cid = data.cid;
    var query = `UPDATE teacher SET teacher.lname = '${lname}', teacher.fname = '${fname}' WHERE teacher.id = ${id};`;
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
    });
}

module.exports = Teacher;
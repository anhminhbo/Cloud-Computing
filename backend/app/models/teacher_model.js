const db = require('../database/connection');

const Teacher = function(teacher) {
    this.id = teacher.id;
    this.lname = teacher.lname;
    this.fname = teacher.fname;
    this.cid = teacher.cid;
}

Teacher.getAllTeacher = async function (result) {
    await db.getConnection((err, db) => {
        if (err) {
            throw err;
        }
    });
    var query = 'SELECT * FROM teacher';
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
    db.release();
}

Teacher.getTeacherById = async function (id, result) {
    await db.getConnection((err, db) => {
        if (err) {
            throw err;
        }
    });
    var query = `SELECT * FROM teacher WHERE teacher.id = ${id}`;
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
    db.release();
}

Teacher.addTeacher = async function (data, result) {
    await db.getConnection((err, db) => {
        if (err) {
            throw err;
        }
    });
    var lname = data.lname;
    var fname = data.fname;
    var cid = data.cid;
    var query = `INSERT INTO teacher (fname,lname,cid) VALUES ('${lname}','${fname}',${cid});`;
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
    db.release();
}

Teacher.deleteTeacher = async function (id, result) {
    await db.getConnection((err, db) => {
        if (err) {
            throw err;
        }
    });
    var query = `DELETE FROM teacher WHERE teacher.id = ${id}`;
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
    });
    db.release();
}

Teacher.updateTeacher = async function (id, data, result) {
    await db.getConnection((err, db) => {
        if (err) {
            throw err;
        }
    });
    var lname = data.lname;
    var fname = data.fname;
    var cid = data.cid;
    var query = `UPDATE teacher SET teacher.lname = '${lname}', teacher.fname = '${fname}' WHERE teacher.id = ${id};`;
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
    });
    db.release();
}

module.exports = Teacher;
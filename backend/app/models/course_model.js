const db = require('../database/connection');

const Course = function(course) {
    this.id = course.id;
    this.name = course.name;
    this.sid = course.sid;
    this.tid = course.tid;
}

Course.getAllCourse = async function (result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var query = 'SELECT * FROM course';
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
}

Course.getCourseById = async function (id, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var query = `SELECT * FROM course WHERE course.id = ${id}`;
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
}

Course.addCourse = async function (data, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var cname = data.cname;
    var sid = data.sid;
    var tid = data.tid;
    var query = `INSERT INTO course (cname,sid,tid) VALUES ('${cname}','${sid}',${tid});`;
    db.query(query, (err, data) => {
        if (err) throw err;
        else result(data);
    });
}

Course.deleteCourse = async function (id, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var query = `DELETE FROM course WHERE course.id = ${id}`;
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
    });
}

Course.updateCourse = async function (id, data, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var cname = data.cname;
    var sid = data.sid;
    var tid = data.tid;
    var query = `UPDATE course SET course.cname = '${cname}', course.sid = '${sid}', course.tid = ${tid} WHERE course.id = ${id};`;
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
    });
}

Course.updateCourse = async function (id, data, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var cname = data.cname;
    var sid = data.sid;
    var tid = data.tid;
    var query = `UPDATE course SET course.cname = '${cname}', course.sid = '${sid}', course.tid = ${tid} WHERE course.id = ${id};`;
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
    });
}

Course.getTotalStudent = async function (id, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            throw err;
        }
        connection.release();
    });
    var query = `
    SELECT COUNT(student.id) AS totalStudent FROM course, student , teacher WHERE course.id = student.cid 
    AND teacher.id = course.tid AND course.id = ${id};
    `;
    db.query(query, (err,data) => {
        if (err) throw err;
        else result(data);
    });
}

module.exports = Course;
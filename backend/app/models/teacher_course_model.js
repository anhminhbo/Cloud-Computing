const db = require('../database/connection');

const TeacherCourse = function(teacher_course) {
    this.id = teacher_course.id;
    this.tid = teacher_course.tid;
    this.cid = teacher_course.cid;
}

TeacherCourse.getTeacherCourseById = async function (id, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
        }
        connection.release();
    });
    var query = `SELECT * FROM teacher_course WHERE teacher_course.id = ${id}`;
    db.query(query, (err, data) => {
        if (err) console.log(err);
        else result(data);
    });
}


TeacherCourse.getAllTeacherCourse = async function (result) {
    await db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
        }
        connection.release();
    });
    var query = "SELECT * FROM teacher_course ORDER BY teacher_course.id ASC";
    db.query(query, (err, data) => {
        if (err) console.log(err);
        else result(data);
    });
}

TeacherCourse.getTeacherByCourseId = async function (id, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
        }
        connection.release();
    });
    var query = `SELECT * FROM teacher_course AS tc WHERE tc.cid = ${id}`;
    db.query(query, (err, data) => {
        if (err) console.log(err);
        else result(data);
    });
}

TeacherCourse.getCourseByTeacherId = async function (id, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
        }
        connection.release();
    });
    var query = `SELECT * FROM teacher_course AS tc WHERE tc.tid = ${id}`;
    db.query(query, (err, data) => {
        if (err) console.log(err);
        else result(data);
    });
}

TeacherCourse.addTeacherCourse = async function (data, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
        }
        connection.release();
    });
    var tid = data.tid;
    var cid = data.cid;
    var query = `INSERT INTO teacher_course (tid,cid) VALUES ('${tid}','${cid}');`;
    db.query(query, (err, data) => {
        if (err) console.log(err);
        else result(data);
    });
}

TeacherCourse.deleteTeacherCourse = async function (id, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
        }
        connection.release();
    });
    var query = `DELETE FROM teacher_course AS tc WHERE tc.id = ${id}`;
    db.query(query, (err,data) => {
        if (err) console.log(err);
        else result(data);
    });
}

TeacherCourse.updateTeacherCourse = async function (data, result) {
    await db.getConnection((err, connection) => {
        if (err) {
            console.log(err);
        }
        connection.release();
    });
    var id = data.id
    var tid = data.tid;
    var cid = data.cid;
    var query = `UPDATE teacher_course SET teacher_course.tid = '${tid}', teacher_course.cid = '${cid}' WHERE teacher_course.id = ${id};`;
    db.query(query, (err,data) => {
        if (err) console.log(err);
        else result(data);
    });
}

module.exports = TeacherCourse;
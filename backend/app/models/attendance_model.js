const db = require('../database/connection');

const Attendance = function(attendance) {
    this.days = attendance.days;
    this.sid = attendance.sid;
    this.tid = attendance.tid;
    this.present = attendance.present;
}

Attendance.addAttendance = function (data, result) {
    var date = data.date;
    var sid = data.sid;
    var tid = data.tid;
    var present = data.present;
    var query = `INSERT INTO attendance (days, sid, tid, present) VALUES ('${date}', ${sid}, ${tid}, ${present});`;
    db.query(query, (err, response) => {
        if (err) throw err;
        else result(response);
    });
}

Attendance.getStudentAttendanceById = function (id, result) {
    var query = `SELECT * FROM attendance WHERE attendance.sid = ${id};`;
    db.query(query, (err, response) => {
        if (err) throw err;
        else result(response);
    });
}

Attendance.getAttendanceByDate = function (data, result) {
    var date = data.date;
    var query = `SELECT * FROM attendance WHERE attendance.days = '${date}';`;
    db.query(query, (err, response) => {
        if (err) throw err;
        else result(response);
    });
}


Attendance.getAttendanceByMonth = function (data, result) {
    var month = data.month;
    var query = `SELECT * FROM attendance WHERE MONTH(attendance.days) = '${month};'`;
    db.query(query, (err, response) => {
        if (err) throw err;
        else result(response);
    });
}


Attendance.getStudentAttendanceByDate = function (data, result) {
    var sid = data.sid;
    var date = data.date;
    var query = `SELECT * FROM attendance, student WHERE student.id = ${sid} and attendance.days = '${date}';`;
    db.query(query, (err, response) => {
        if (err) throw err;
        else result(response);
    });
}

Attendance.getStudentAttendanceByWeek = function (data, result) {
    var date = data.date;
    var sid = data.sid;
    var query = `SELECT * FROM attendance,student WHERE student.id = ${sid} AND attendance.days >= CURDATE() - INTERVAL DAYOFWEEK(CURDATE()) - 1 DAY AND attendance.days <= CURDATE() - INTERVAL DAYOFWEEK(CURDATE()) - 7 DAY;`;
    if (date != null) {
        query = `SELECT * FROM attendance,student WHERE student.id = ${sid} AND attendance.days >= '${date}' - INTERVAL DAYOFWEEK('${date}') - 1 DAY AND attendance.days <= '${date}' - INTERVAL DAYOFWEEK('${date}') - 7 DAY;`;
    }
    db.query(query, (err, response) => {
        if (err) throw err;
        else result(response);
    });
}

Attendance.getStudentAttendanceByMonth = function (data, result) {
    var date = data.date;
    var sid = data.sid;
    var query = `SELECT * FROM attendance, student where student.id = ${sid} AND MONTH(attendance.days) = MONTH(${date});`;
    db.query(query, (err, response) => {
        if (err) throw err;
        else result(response);
    });
}

module.exports = Attendance;
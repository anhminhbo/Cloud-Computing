USE cloud;
DROP TABLE IF EXISTS attendance; 
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS teacher;  
DROP TABLE IF EXISTS course; 

CREATE TABLE course (
	id	INT NOT NULL AUTO_INCREMENT,
    cname VARCHAR(255) NOT NULL UNIQUE,
    sid INT,
    tid INT,
	PRIMARY KEY (id),
    CONSTRAINT FK_STUDENT_ID FOREIGN KEY (sid) REFERENCES course (id) ON DELETE CASCADE,
    CONSTRAINT FK_TEACHER_ID FOREIGN KEY (tid) REFERENCES course (id) ON DELETE CASCADE
);

CREATE TABLE student (
	id	int NOT NULL AUTO_INCREMENT,
    lname VARCHAR(255) NOT NULL,
    fname VARCHAR(255) NOT NULL,
    cid INT,
	PRIMARY KEY (id),
    CONSTRAINT FK_STUDENT_COURSE_ID FOREIGN KEY (cid) REFERENCES course (id) ON DELETE CASCADE
);

CREATE TABLE teacher (
	id	int NOT NULL AUTO_INCREMENT,
    lname VARCHAR(255) NOT NULL,
    fname VARCHAR(255) NOT NULL,
    cid INT,
	PRIMARY KEY (id),
    CONSTRAINT FK_TEACHER_COURSE_ID FOREIGN KEY (cid) REFERENCES course(id) ON DELETE CASCADE
);

CREATE TABLE attendance (
	days DATE NOT NULL,
    sid INT,
    tid INT,
    present BOOLEAN NOT NULL,
    CONSTRAINT FK_STUDENT_ATTENDANCE_ID FOREIGN KEY (sid) REFERENCES student (id) ON DELETE CASCADE,
	CONSTRAINT FK_TEACHER_ATTENDANCE_ID FOREIGN KEY (tid) REFERENCES teacher (id) ON DELETE CASCADE
);

-- Course Insertion 
INSERT INTO course (cname, sid, tid) VALUES ('Biology', 1,1);
INSERT INTO course (cname, sid, tid) VALUES ('Physics', 2,2);
INSERT INTO course (cname, sid, tid) VALUES ('Psychology', 3,3);

-- Student Insertion 
INSERT INTO student (lname,fname,cid) VALUES ('Biolody', 'Student',1);
INSERT INTO student (lname,fname,cid) VALUES ('Physics', 'Student',2);
INSERT INTO student (lname,fname,cid) VALUES ('Psychology', 'Student',3);

-- Teacher Insertion 
INSERT INTO teacher (lname,fname,cid) VALUES ('Biolody', 'Teacher',1);
INSERT INTO teacher (lname,fname,cid) VALUES ('Physics', 'Teacher',2);
INSERT INTO teacher (lname,fname,cid) VALUES ('Psychology', 'Teacher',3);


-- Attendance Insertion 
INSERT INTO attendance VALUES ('2023-04-01',1,1,TRUE);
INSERT INTO attendance VALUES ('2023-04-02',2,2,TRUE);
INSERT INTO attendance VALUES ('2023-04-06',3,3,FALSE);
INSERT INTO attendance VALUES ('2023-04-06',2,3,FALSE);
INSERT INTO attendance VALUES ('2023-04-13',2,3,FALSE);
INSERT INTO attendance VALUES ('2023-04-24',3,1,TRUE);
INSERT INTO attendance VALUES ('2023-03-21',2,2,FALSE);
INSERT INTO attendance VALUES ('2023-03-29',3,1,FALSE);
INSERT INTO attendance VALUES ('2023-02-24',1,3,FALSE);


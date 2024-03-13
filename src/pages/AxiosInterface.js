import instance from '@/plugins/axios';

let getAsnmt = instance.get('/teacher/assignment', {
    params: {
        userId: 1
    }
}).then((res) => {
    // do sth
}).catch((err) => {
    // do sth
})

let createAsnmt = instance.post('/teacher/assignment', {
    courseName: 0,
    userId: 0,
    title: "string",
    deadline: "2019-08-24T14:15:22Z",
    isPersonalized: true,
    questionIds: [
        0
    ]
}).then((res) => {
    // do sth
}).catch((err) => {
    // do sth
})

let deleteAsnmt = instance.delete('/teacher/assignment', {
    params: {
        assignmentId: 1
    }
}).then((res) => {
    // do sth
}).catch((err) => {
    // do sth
})

let getCourse = instance.get('/teacher/course', {
    params: {
        userId: 1
    }
}).then((res) => [
    //do sth
]).catch((err) => {
    //do sth
})
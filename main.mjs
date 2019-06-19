import  {SubjectsModel}  from  './school';
import  {LMSModel}  from  './school';
import {TeachersModel} from  './school';
import {PupilsModel} from './school';
import {GroupsModel} from './school';
import {GradeBooksModel} from './school';
const history = new SubjectsModel({
    title: 'History',
    lessons: 24,
    description: 'My desc'
  });

let updatedProfile = {
  "name": {
    "first": "gio",
    "last": "asf"
  },
  "image": "string",
  "dateOfBirth": "string", // format date
  "emails": [
    {
      "email": "some",
      "primary": true
    }
  ],
  "phones": [
    {
      "phone": "string",
      "primary": false
    }
  ],
  "sex": "string", // male or female
  "subjects": [
    {
      "subject": "string"
    }
  ],
  "description": "string",
};

let data = {

  "name": {
    "first": "fasf",
    "last": "asf"
  },
  "image": "string",
  "dateOfBirth": "string", // format date
  "emails": [
    {
      "email": "some",
      "primary": true
    }
  ],
  "phones": [
    {
      "phone": "string",
      "primary": false
    }
  ],
  "sex": "string", // male or female
  "subjects": [
    {
      "subject": "string"
    }
  ],
  "description": "string",
};

let pupil= {
  "name": {
    "first": "string",
    "last": "string"
  },
  "image": "string",
  "dateOfBirth": "string", // format date
  "phones": [
    {
      "phone": "string",
      "primary": true
    }
  ],
  "sex": "string", // male OR female
  "description": "string"
};


// const record = {
//   pupilId: pupilId,
//   teacherId: teacherId,
//   subjectId: history.id,
//   lesson: 1,
//   mark: 9
// };
const pupils = new PupilsModel();
const pupiladd = pupils.add(pupil);
console.log(pupils.read(pupiladd));


// const teacherId = teacherId;

const room = 236;
const groups = new GroupsModel();
const groupId = groups.add(room);
// const gradebooks = new GradeBooksModel(groups, teachers, lms);
console.log(groupId);

console.log(groups.readAll());



// const lms = new LMSModel();
// const teachers = new TeachersModel();
// const teacherId = teachers.add(data);
// teachers.remove(teacherId)
// console.log(teacherId);

// const teacherIds = teachers.update(teacherId, updatedProfile);
// console.log(teachers.read(teacherId));


// will remove techer
// teachers.remove(teacherId)




// lms.add(history);
// lms.remove(history);

// console.log(lms);

// // will return true or false. Answer will be true if we added this subject to lms
// console.log(lms.verify(history));
// console.log(lms.readAll());

// // will return array of registered subjects
// lms.readAll();
// [
//   {
//     subjectId: null
//   }
// ]



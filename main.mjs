import  {SubjectsModel}  from  './school';
import  {LMSModel}  from  './school';
import {TeachersModel} from  './school';

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



// const lms = new LMSModel();
const teachers = new TeachersModel();
const teacherId = teachers.add(data);
// teachers.remove(teacherId)
console.log(teacherId);

const teacherIds = teachers.update(teacherId, updatedProfile)
console.log(teachers.read(teacherId));

// will return Teachers data including teacher's id


// will update Teacher. This method should use the same validation as a constructor method
// const teacherId = teachers.update(teacherId, updatedProfile)

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



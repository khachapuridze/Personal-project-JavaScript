import  {SubjectsModel}  from  './school';
import  {LMSModel}  from  './school';
import {TeachersModel} from  './school';
import {PupilsModel} from './school';
import {GroupsModel} from './school';
import {GradeBooksModel} from './school';

       // $$  SubjectModel And LMSModel

// const history = new SubjectsModel({
//     title: 'History',
//     lessons: 24,
//     description: 'My desc'
//   });
// console.log(history.id);

// const lms = new LMSModel();
// lms.add(history);
// // lms.remove(history);
// console.log(lms.readAll());
// console.log(lms.verify(history));


      // $$  TeachersModel $$

// let data = {

//   "name": {
//     "first": "fasf",
//     "last": "asf"
//   },
//   "image": "string",
//   "dateOfBirth": "string", // format date
//   "emails": [
//     {
//       "email": "some",
//       "primary": true
//     }
//   ],
//   "phones": [
//     {
//       "phone": "string",
//       "primary": false
//     }
//   ],
//   "sex": "string", // male or female
//   "subjects": [
//     {
//       "subject": "string"
//     }
//   ],
//   "description": "string",
// };
// let updatedProfile = {

//   "name": {
//     "first": "vaskaa",
//     "last": "asf"
//   },
//   "image": "string",
//   "dateOfBirth": "string", // format date
//   "emails": [
//     {
//       "email": "some",
//       "primary": true
//     }
//   ],
//   "phones": [
//     {
//       "phone": "string",
//       "primary": false
//     }
//   ],
//   "sex": "string", // male or female
//   "subjects": [
//     {
//       "subject": "string"
//     }
//   ],
//   "description": "string",
// };
// const teachers = new TeachersModel();

// const teacherId = teachers.add(data);
// const updateTeacher = teachers.update(teacherId, updatedProfile);
// teachers.remove(teacherId)
// console.log(teachers.read(teacherId));
// console.log(teacherId);


    // $$PupilsModule$$

let pupilData= {
  "name": {
    "first": "george",
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

let updatePupilData= {
  "name": {
    "first": "george",
    "last": "bvas"
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

const pupils = new PupilsModel();
const pupil = pupils.add(pupilData);
// console.log(pupil.id);
pupils.update(pupil.id, updatePupilData);
// pupils.remove(pupil.id)
// console.log(pupils.read(pupil.id));





          // $$GroupModule$$

const room = 236;
const groups = new GroupsModel();
const groupId = groups.add(room);
// console.log(groupId);
groups.addPupil(groupId, pupil);
groups.removePupil(groupId, pupil.id);
// groups.update(groupId, {
//   room: 237
// });
// groups.read(groupId)
// groups.readAll();

// console.log(groups.read(groupId));


         // $$Gradebook$$

// const pupilId = pupil.id;
// const teacherId = teacherId;
// const gradebooks = new GradebooksModel(groups, teachers, lms);
// const level = 1;
// const gradebook = gradebooks.add(level, group.id);


// const record = {
//   pupilId: pupilId,
//   teacherId: teacherId,
//   subjectId: history.id,
//   lesson: 1,
//   mark: 9
// };



// gradebooks.addRecord(gradebookId, record);

// // Read information about oliver results
// const oliver = gradebooks.read(gradebookId, pupilId);
// {
//   name: 'Oliver Black',
//   records: [
//     {
//       teacher: 'Elizabeth Holms',
//       subject: 'History',
//       lesson: 1,
//       mark: 9
//     }
//   ]
// }

// // Read information about all students in this gradebook
// const students = gradebooks.readAll(gradebookId); // It will return the array of objects

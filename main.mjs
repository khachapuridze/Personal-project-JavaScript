import  {SubjectsModel}  from  './school';
import  {LMSModel}  from  './school';

const history = new SubjectsModel({
    title: 'History',
    lessons: 24,

  });





const lms = new LMSModel();

lms.add(history);
// lms.remove(history);

console.log(lms);

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

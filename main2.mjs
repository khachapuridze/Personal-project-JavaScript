import  {SubjectsModel}  from  './school';

const history = new SubjectsModel({
    title: 'History',
    lessons: 24 

});

const gg = new SubjectsModel({
    title: 'g',
    lessons: 5 
  });

console.log(history.id);
console.log(gg.id);
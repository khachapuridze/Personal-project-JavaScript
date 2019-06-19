import  {SubjectsModel}  from  './school';
import  {LMSModel}  from  './school';
import {TeachersModel} from  './school';
import {PupilsModel} from './school';
import {GroupsModel} from './school';
import {GradeBooksModel} from './school';
const history = new SubjectsModel({
    title: 'History',
    lessons: 24,
    description: "adasd"
});

let id =Math.random().toString(36).substr(2, 8);
console.log(id);

const gg = new SubjectsModel({
    title: 'g',
    lessons: 5 
  });

console.log(history.id);
console.log(gg.id);



**Group**

```json
const room = 236;
const groups = new GroupsModel();

// Create a new group
const groupId = groups.add(room);

// Remove this pupil from this group
groups.removePupil(groupId, pupil.id);

// Add this pupil to this group
groups.addPupil(groupId, pupil);

// Update room for this group
groups.update(groupId, {
  room: 237
});

// Read information about group
groups.read(groupId);
{
  id: 'JEF5H43H'
  room: 237
}

// It will return array of groups
groups.readAll()

```

// **Gradebook**:

```javascript
const pupilId = pupil.id;
const teacherId = teacherId;
const gradebooks = new GradebooksModel(groups, teachers, lms);

// Create a new gradebook
const level = 1;
const gradebook = gradebooks.add(level, group.id);

// Destroy all data inside this gradebook
gradebooks.clear();

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};

gradebooks.addRecord(gradebookId, record);

// Read information about oliver results
const oliver = gradebooks.read(gradebookId, pupilId);
{
  name: 'Oliver Black',
  records: [
    {
      teacher: 'Elizabeth Holms',
      subject: 'History',
      lesson: 1,
      mark: 9
    }
  ]
}

// Read information about all students in this gradebook
const students = gradebooks.readAll(gradebookId); // It will return the array of objects
```

import {Validator} from  './validator';
export class TeachersModel{
    constructor(){
        this.teachers = new Map();
        this.schema = {
  
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "emails": [
              {
                "email": "string",
                "primary": "boolean"
              }
            ],
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
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
    }

 
    async add(teacher){
        if(Validator.validator(teacher,this.schema)){
            let id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
            teacher.id = id;
            this.teachers.set(id, teacher);
            return id;

        }
        else{
           throw new Error ("Not valid parameters!");
        }
    }

    async read(teacherId) {
        if(this.teachers.has(teacherId)) {
            return this.teachers.get(teacherId);
        }
        else{
            throw new Error ("OMG!!!");
        }
       
    }  
    async update(teacherId,updatedProfile){
        if(Validator.validator(updatedProfile,this.schema)){
            if(this.teachers.has(teacherId)) {
                 this.teachers.delete(teacherId);
                 this.teachers.set(teacherId,updatedProfile);
            }
            else{
                throw new Error ("can't update!")
            }

        }

    } 
    


    async remove(teacherId){
        if(this.teachers.has(teacherId)){
            this.teachers.delete(teacherId);
        }
        else{
            throw new Error ("There is not such subject");
        }
    }


}
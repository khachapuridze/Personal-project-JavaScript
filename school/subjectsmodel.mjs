import {Validator} from  './validator';
export class SubjectsModel{
    constructor(subjects){
        this.subjects = subjects;
        this.id;
        this.schema = {
            "title": "string",
            "lessons": "number",
            "description": "string"
          }
        if(Validator.validator(subjects,this.schema)){
            this.id =  new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
        }
        else{
           throw new Error ("Not valid parameters!");
        }

       
    }

}



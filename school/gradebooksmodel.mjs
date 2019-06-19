import {Validator} from  './validator';
export class GradeBooksModel{
    constructor(groups, teachers, lms){
        this.grades = new Map();
        this.groups = {groups};
        this.teachers  = {teachers};
        this.lms = {lms};
    }

    add (level, id){
        if ( typeof id == 'string' && typeof level == 'number'){
            let id =Math.random().toString(36).substr(2, 8);
            this.grades.set(id , {level, id})
            return id;
        }  
        else {
            throw new Error ('Opps');
        }     
    }
    clear(arg){
        if(!arg){
            this.grades.clear();
        }
        else{
            throw new Error ("no need parameter");
        }
    }

    addRecord(gradebookId, record){
        if(typeof gradebookId === "string" && typeof record === "object"){
                this.grades.set("records",record);
                return this.grades;
          
        }
        else {
            throw new Error("ooppss!")
        }


    }

    read(gradebookId, pupilId){
        if(typeof gradebookId === "string" && typeof pupilId === "number"){

            return this.grades;
        }
        else{
            throw new Error ("Not valid!");
        }
    }

    readAll(gradebookId){
        if(typeof gradebookId === "string"){
            return Array.from(this.grades);

        }
        else{
            throw new Error ("OOPSS!")
        }
    }
}
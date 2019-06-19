import {Validator} from  './validator';
export class GradeBooksModel{
    constructor(groups, teachers, lms){
        this.grades = new Map();
        this.groups = {groups};
        this.teachers  = {teachers};
        this.lms = {lms};
    }

    add (level, id){
        if ( typeof id == 'number' && typeof level == 'number'){
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
            if(this.groups.get("id") == gradebookId){
                this.grades.set("records",record);
            }
            else {
                throw new Error("ooppss!")
            }


    }

    read(gradebookId, pupilId)
    {
        this.grades.get(gradebookId)
    }

    readAll(gradebookId)
    {
        if(this.groups.get("id") == gradebookId){
            return Array.from(this.groups);
        }
        else{
            throw new Error ("OOPSS!")
        }
    }
}
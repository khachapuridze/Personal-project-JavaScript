export class LMSModel{
    constructor(){
        this.subjects = new Map();
    }

    add(subject){
        if(subject && typeof subject === "object"){
        this.subjects.set(subject.id, subject);
        }
        else{
            throw new Error("not Object!");
        }
    }

    remove(subject){
        if(this.subjects.has(subject.id)){
            this.teachers.delete(subject.id);
        }
        else{
            throw new Error ("There is not such subject");
        }
    }

    verify(subject){
        if(this.subjects.has(subject.id)){
            return true;
        }
        else{
            return false;
        }
    }

    readAll(){
        let read = new Map();
        this.subjects.forEach(function (subject) {
            read.set('subjectId',subject.id);
        });

        return [read];
    }
}
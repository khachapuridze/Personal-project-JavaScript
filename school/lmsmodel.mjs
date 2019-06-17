export class LMSModel{
    constructor(){
        this.subjects = new Map();
    }

    add(subject){
        if(typeof subject === "object"){
        this.subjects.set(subject.id, subject);
        }
        else{
            throw new Error("not Object!");
        }
    }

    remove(subject){
        if(this.subjects.has(subject.id)){
            this.subjects.clear();
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
        return [this.subjects].map;
    }
}
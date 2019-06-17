export class SubjectsModel{
    constructor(subjects){
        this.subjects = subjects;
        this.id;

        if(!this.subjects || !this.subjects.title || !this.subjects.lessons){
            throw new Error ("You don't provide required values or empty!")
        }
        if(typeof subjects === "object"){
            if((typeof this.subjects.title === "string" && typeof this.subjects.lessons === "number") || typeof this.subjects.description === "string"){
                this.id =  new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
            }
            else{
                throw new Error ("not valid parameters");
            }
        }
        else{
            throw new Error ("not  an object");
        }
    }

}



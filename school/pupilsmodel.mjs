import {Validator} from  './validator';
export class PupilsModel{
    constructor(){
        this.pupils = new Map();
        this.schema = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string", // male OR female
            "description": "string"
          };
    }

     add(pupil){
        if(Validator.validator(pupil,this.schema)){
            let id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 100);
            pupil.id = id;
            this.pupils.set(id, pupil);
            return this.pupils.get(id);

        }
        else{
           throw new Error ("Not valid parameters!");
        }
    }

    read(pupilid) {
        if(this.pupils.has(pupilid)) {
            return this.pupils.get(pupilid);
        }
        else{
            throw new Error ("It wasn't founded");
        }
       
    }
    
    update(pupilid,pupil){
        if(Validator.validator(pupil,this.schema)){
            if(this.pupils.has(pupilid)) {
                 this.pupils.delete(pupilid);
                 this.pupils.set(pupilid,pupil);
            }
            else{
                throw new Error ("can't update!")
            }

        }

    }
    


    remove(pupilid){
        if(this.pupils.has(pupilid)){
            this.pupils.delete(pupilid);
        }
        else{
            throw new Error ("There is not such subject");
        }
    }



}
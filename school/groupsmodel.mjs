export class GroupsModel{
    constructor(){
        this.groups = new Map();

    }

    add(room){
        if(typeof room === "number"){
            let id =Math.random().toString(36).substr(2, 8);
            this.groups.set("id",id);
            this.groups.set("room",room);
            return this.groups.get("id");
        }
        else{
            throw new Error ("Not a number!");
        }
    
    }

    addPupil(groupId, pupil){
        if(typeof groupId === "string" && typeof pupil === "object"){
            if(this.groups.get("id") == groupId){
                this.groups.set("pupil",pupil);
                return this.groups;
            }
            else{
                throw new Error ("404 no such group");
            }
        }
        else{
            throw new Error ("NOT VALID!");
        }
    }

    removePupil(groupId, pupilid){
        if(typeof groupId === "string" && typeof pupilid === "number"){
            if(this.groups.get("id") == groupId){
                this.groups.clear(groupId);
            }
            else{
                throw new Error ("Not founded")
            }
        }
        else{
            throw new Error ("Invalid types");
        }
    }

    update(groupId,obj){
        if(typeof groupId === "string" && typeof obj === "object"){
            if(this.groups.get("id") == groupId){
                Object.keys(obj).forEach(key => {
                    let k = key;
                    let v =obj[key];
                    this.groups.set(k,v);
                });
            }
            else{
                throw new Error ("oops!");
            }
        }
        else{
            throw new Error ("oops not valid");
        }

    }

    read(groupId){
        if(typeof groupId === "string"){
            if(this.groups.get("id") == groupId){
                return this.groups;
            }
            else{
                throw new Error ("there's no group")
            }
        }
        else{
            throw new Error ("not valid!");
        }
    }
    readAll(arg){
        if(arg){
            throw new Error ("you passed parameters!");
        }
        else{
            return Array.from(this.groups);
        }
    }
}


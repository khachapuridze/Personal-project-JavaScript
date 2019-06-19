export class GroupsModel{
    constructor(){
        this.groups = new Map();
        this.schema = {
            id: 'JEF5H43H',
            room: 237
        };
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

    update(groupId,obj){
        if(typeof groupId === "string" && typeof obj === "object"){
            if(this.groups.get("id") == groupId){
                for (i of obj){
                    this.groups.set(i);
                }
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


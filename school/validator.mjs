export class Validator{

    constructor(){
        
    }
    
    static validator(data, schema){
        if (typeof data === "object" && typeof schema === "object"){
            for (const [key,values] of Object.entries(schema)){
                if (data.hasOwnProperty(key) &&  typeof data[key] === "object"){
                    Validator.validator(data[key], schema[key]);
                } else if (typeof data[key] !== schema[key]) {
                    console.log(key);
                    console.log(data);
                    throw new Error("oops");
                }else if (Array.isArray(data[key]) && typeof data[key] == schema[key]){
                    for (let i of data[key]){
                          Validator.validator(i,schema[key])
                    }  
                }
        }
        return true;
    }
  }
}


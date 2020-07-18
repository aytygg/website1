"use strict"
const stringUtil = {
    replacer: function(input, values){
        let regex = new RegExp(/\${([\w.]+)}/gi);
        return input.replace(regex, (...args) => {
            if(typeof values == "string"){
                return values;
            }else{
                return values[args[1]] || args[0];
            }
        });
    }




};

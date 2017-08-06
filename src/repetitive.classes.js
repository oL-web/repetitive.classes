function classes(elems){
  
    elems = elems.length ? [].slice.call(elems) : [elems];

    return {    
        add(string){
            for(let i = 0; i < elems.length; i++){
                elems[i].className += ` ${string}`;
            }
            return this;
        },
        remove(string){          
            let rules = new RegExp("\\b(" + string.split(" ").join(")(\\s|$)|\\b(") + ")(\\s|$)","g");

            for(let i = 0; i < elems.length; i++){
                elems[i].className = elems[i].className.replace(rules,"");
            }
            return this;
        },
        contains(string){
            const classesArr = string.split(" ");
            let matchesCount = 0;

            for(let i = 0; i < elems.length; i++){  
                for(let j = 0; j < classesArr.length; j++){
                    const rule = new RegExp("\\b(" + classesArr[j] + ")(\\s|$)","g");
                    if(rule.test(elems[i].className)) matchesCount++;
                }
            }
            
            if(matchesCount === elems.length * classesArr.length) return true;
            return false;
        },
        toggle(string){
            const classesArr = string.split(" ");

            for(let i = 0; i < elems.length; i++){  
                for(let j = 0; j < classesArr.length; j++){
                    const rule = new RegExp("\\b(" + classesArr[j] + ")(\\s|$)","g");
                    
                    if(rule.test(elems[i].className)){
                        elems[i].className = elems[i].className.replace(rule,"");
                    }
                    else elems[i].className += ` ${classesArr[j]}`;
                }
            }
            return this;
        }
    };
};

export default classes;
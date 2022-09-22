const Add = (a,b) =>{
    
    let add = a + b;
    return add
    
}

const Sub = (a,b) =>{
    
    let sub = a - b;
    return sub
    
}

const Mult = (a,b) =>{
    
    let mult = a * b;
    return mult
    
}

const Div = (a,b) =>{
    
    let div = (a / b).toFixed(4);
    return div
    
}

export default Add
export  {Sub , Mult , Div}
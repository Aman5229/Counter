const data=document.querySelector('#counter');

const increment=() =>{
    //get the value
    let value=parseInt (data.innerText);
    //increase the value
    value=value+1;
    //set the value
    data.innerText=value;
};

const decrement=() =>{
       //get the value
       let value=parseInt (data.innerText);
       //increase the value
       value=value-1;
       //set the value
       data.innerText=value;
};
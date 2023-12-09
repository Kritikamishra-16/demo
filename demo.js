/* Simple Hello World in Node.js */
export default function functionLength(fn) {
    return fn.length;
}

/****************************/

export default function makeCounter(initialValue = 0) {
    let count=initialValue;
    return (()=>{
        console.log(count++);
    })
}

/***************************/

export default async function sleep(duration) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },duration);
    })
  }
  
/****************************/

export default function chunk(array, size = 1) {
    let arrCount= Math.floor(array.length/size);
    let idx=0, res=[];
    while(arrCount--)
    {
        let s=size;
        let newArr=[];
        while(s-- && idx<array.length)
        {
            newArr.push(array[idx++]);
        }
        res.push(newArr);
    }
    let newArr=[];
    while(idx<array.length){
        newArr.push(array[idx++]);
    }
    if(newArr.length!=0)
    {
        res.push(newArr);
    }
    console.log(res);
  }
  
  
 /******************************************/
 
 
 
 
 

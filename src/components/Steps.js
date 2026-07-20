
import React, { useRef,useState} from "react";



const Steps=()=>{

let [step,setStep]=useState(1)
    
 let one={
    first:useRef(),
    last:useRef()
}   

 let {first,last}=one;

 let ones={
    firsts:useRef(),
    lasts:useRef()
}   

 let {firsts,lasts}=ones;


   let sec={
         num:useRef(),
         expiry:useRef()
     }
     let {num,expiry}=sec
     function handleSubmitt(){
         
         if(!num.current.value || !expiry.current.value)
           {  return}

       
         }
         

 function handleSubmit(){
  //  e.preventDefault();
    if(!first.current.value || !last.current.value)
        { return;}
    setStep(2)
 }
   return    <>
     <div  id="step1" style={{display: step===1 ? 'block' :'none'}}>
            <h1>Customer Details</h1>
      <form>
                <label>First Name:</label>
                <br/>
                <input type="text" id="first_name" ref={first}/>
                <br/>
                <label>Second Name:</label>
                <br/>
                <input type="text" id="last_name" ref={last}/>
                <br/>
                <button type="button" onClick={handleSubmit}>Next</button>
            </form>
  
        </div>
           


    <div id="step2"  style={{display: step===2 ? 'block' :'none'}} >
            <h1>Car Details</h1>
            <form>
                <label>Brand:</label>
                <br/>
                <input type="text" id="model" ref={firsts}/>
                <br/>
                <label>Model:</label>
                <br/>
                <input type="number" id="car_price" ref={lasts}/>
                <br/>
                <button type="button" onClick={()=>setStep(1)}>Previous</button>
                <button type="button" onClick={(()=>{   if(!firsts.current.value || !lasts.current.value) return; setStep(3)})}>Next</button>

            </form>
        </div>  
     <div id="step3" style={{display: step===3 ? 'block' :'none'}}>
            <h1>Card Details</h1>
            <form>
                <label>Card Number:</label>
                <br/>
                <input type="number" id="card_info" ref={num}/>
                <br/>
                <label>Expiry Date:</label>
                <br/>
                <input type="text"  placeholder="YYYY-MM-DD"
  pattern="\d{4}-\d{2}-\d{2}" id="expiry_date"ref={expiry}/>
                <br/>
                <button type="button" onClick={()=>setStep(2)}>Previous</button>
                <button type="button" onClick={handleSubmitt}>Submit</button>

            </form>
        </div>  

   
</>
    
}


export default Steps;
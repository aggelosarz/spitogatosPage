import React from "react";
import { AiFillCheckCircle } from 'react-icons/ai';

function ContactForm(){
   
   const[count,setCount] = React.useState(0)
    const[name,setName] = React.useState(false)
    const[email,setEmail] = React.useState(false)
    const[phone,setPhone] = React.useState(false)
    const[selectedCtg,setCategory] = React.useState("All");
    const[categoryData,setData] = React.useState([])
    

    React.useEffect(function(){
        fetch("https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b").then(res => res.json()).then(data=>setData(data));
    },[])

  React.useEffect(function(){
    let x = document.getElementById("subcategory");
    while (x.options.length > 0) {
      x.remove(0);
  }
    
    categoryData.map((category) => {
    
    
     if(typeof category.subCategories !== "undefined" && category.name === selectedCtg) {category.subCategories.map((sub)=>{
           
           var option = document.createElement("option");
           option.value = sub.name;
           option.text = sub.name;
           x.add(option) 
  
     }) }

     if ( "All" == selectedCtg){
        
            if(typeof category.subCategories !== "undefined"){
              {category.subCategories.map((sub)=>{
           
                var option = document.createElement("option");
                option.value = sub.name;
                option.text = sub.name;
                x.add(option) 
       
          }) }
            }
         
      }

      
    

  
  
  })},[selectedCtg])


 

    

   const validateName = () => {
    if((document.getElementById("fullname").value)===""){setName(false)}
   
   else setName(true);
}

const validateEmail = () => {
     var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@spitogatos.gr$/
    if((document.getElementById("email").value).match(pattern)){setEmail(true)}
     else setEmail(false);
     
}

const validatePhone = () => {
    //var pattern2 = /[0-9]\d{9}/;
     var pattern2="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      if((document.getElementById("phone").value).match(pattern2)) setPhone(true)
      else setPhone(false)
}

    return (
   <div>
        <div className="Form">
           <img src="images/map.png" className="map" alt="" />
           <div className="contact">
            <div className="contactForm">
               <h1 className="contactTitle">Contact Us</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               <div className="inputForm">
               <div >
                <input  className= {name?"input":"noinput"}  type="text" id="fullname" name="fullname" placeholder="Full Name *"  onChange={() => validateName()} /> <br></br>
                <span className={name ? "noerror" : "error"} id="name-error">{name ? <AiFillCheckCircle/> : "Name is required"}</span>
                </div>
                <br></br>
                <div><input  className={email?"input":"noinput"}  type="email" id="email" name="email" placeholder="E-mail *"  onChange={() => validateEmail()}/> <br></br>
                <span className={email ? "noerror" : "error"} id="email-error">{email ? <AiFillCheckCircle/> : "Email suffix: @spitogatos.gr"}</span>
                </div>
                <br></br>
                <div><input className={phone?"input":"noinput"}   type="text" id="phone" name="phone" placeholder="125-478-0000 *" onChange={() => validatePhone()} /> </div>
                <span className={phone ? "noerror" : "error"} id="phone-error">{phone ? <AiFillCheckCircle/> : "Phone must contains only numbers"}</span>
                <br></br>
                </div>
                <div className="selects">
                <select className="category" id="category" name="category" onChange={()=>setCategory(document.getElementById("category").value)} >
      {categoryData.map((category) =>  (
      <option className="option" value={category.name}>{category.name}</option>  ))
    }
    </select>

   <select className="subcategory" id="subcategory" name="subcategory">
     
           <option value="keno" >keno</option> 
       
</select>
</div>

<div className="textarea">
  <textarea id="message" className="message" placeholder="Write your message..." maxLength="100" onChange={() => setCount(document.getElementById("message").value.length)}></textarea>
  <label className="counter"> {`${count} of 100`}</label>
</div>

<div className="ckboxes">
  <p className="para">Please select at least one of the following:</p>
  <div className="optionsdiv">
  <div className="options">
<input type="checkbox" id="option1" name="option1" value="option1"/>
<label htmlFor="option1"> Option 1</label>
</div>
<div className="options">
<input type="checkbox" id="option2" name="option2" value="option2"/>
<label htmlFor="option2"> Option 2</label>
</div>
</div>
</div>

<button className="button">Submit</button>
     
           </div>
          
        </div>
       
         
           </div>
            <div className="footer">
            <p className="copyright">© The standard Copywrite 2020</p>
            <p className="cookies">Cookies. | Privacy.</p>
           </div>
           </div>
         
           
            
    )
}

export default ContactForm;
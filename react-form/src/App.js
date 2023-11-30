import "./App.css";
import { useState } from "react";

function App() {

  // const[firstName, setFirstName] = useState("")
  // const[lastName, setLastName] = useState("")

  // console.log(firstName)
  // console.log(lastName)
  // function changeFirstNameHandler(event) {
  //   console.log("printing first name")
  //   console.log(event.target.value)
  //   setFirstName(event.target.value)
  // }
  
  // function changelastNameHandler(event) {
  //   console.log("printing last name")
  //   console.log(event.target.value)
  //   setLastName(event.target.value)
  // } 

  const[formData, setFormDate] = useState( {firstName: "", lastName: "", email: "", comments: ""})

  console.log(formData)
  function changeHandler(event) {
    setFormDate(prevFormDate => {
      return{
        ...prevFormDate,
        [event.target.name] : event.target.value
      }
    });
  }

  return (
    <div className="App">
       <form>

        <input 
        type="text" 
        placeholder="first name"
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}
        />

        <br/>
        <br/>

        <input 
        type="text" 
        placeholder="first name"
        onChange={changeHandler}
        name="lastName"
        value={formData.lastName}
        />

        <br/>
        <br/>

        <input 
        type="email" 
        placeholder="Enter Your email address"
        onChange={changeHandler}
        name="email"
        value={formData.email}
        />
        
        <br/><br/>
        <textarea
         placeholder="Enter Your email address"
         onChange={changeHandler}
         name="comments"
         value={formData.comments}
        />

       </form>
    </div>
  );
}

export default App;

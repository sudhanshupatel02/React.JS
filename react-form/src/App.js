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

  const[formData, setFormDate] = useState( {firstName: "", lastName: ""})

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
        />

        <br/>
        <br/>

        <input 
        type="text" 
        placeholder="first name"
        onChange={changeHandler}
        name="lastName"
        />

       </form>
    </div>
  );
}

export default App;

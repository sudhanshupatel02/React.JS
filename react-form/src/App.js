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

  const[formData, setFormDate] = useState( {firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode:"", favCar:"" })

  // console.log(formData)

  function changeHandler(event) {
    const {name, value, checked, type} = event.target
    setFormDate(prevFormDate => {
      return{
        ...prevFormDate,
        [name] : type ==="checkbox" ? checked : value
      }
    });
  }

   function submitHandler(event){
     event.preventDefault();
    //  print
    console.log("Finally prigting the entireform ka data ........")
    console.log(formData)
   }

  return (
    <div className="App">
       <form onSubmit={submitHandler}>
        
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
        
        <br/>
        <br/>

        <textarea
         placeholder="Enter Your comments"
         onChange={changeHandler}
         name="comments"
         value={formData.comments}
        />

       <br/>
       <br/>

       <input 
        type="checkbox" 
        onChange={changeHandler}
        name="isVisible"
        id="isVisible"
        checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I visible ?</label>

        <br/>
        <br/>

        <fieldset>
          <legend>Mode</legend>
          <input 
        type="radio" 
        onChange={changeHandler}
        name="mode"
        id="Online-Mode"
        value="Online-Mode"
        checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online-Mode</label>

       <input 
        type="radio" 
        onChange={changeHandler}
        name="mode"
        id="Online-Mode"
        value="Online-Mode"
        checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor="offline-Mode">offline-Mode</label>
        </fieldset>

        <label htmlFor="favCar">Tell me your Favourite Car </label>
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
           <option value="tata">Tata</option>
           <option value="thor">Thor</option>
           <option value="scorpio">Scorpio</option>
           <option value="rolsRoyel">RolsRoyel</option>
           <option value="mahindra">Mahindra</option>
           <option value="forari">Forari</option>
        </select>

        {/* <input type="submit" value='submit'/> */}
        <br/>
        <br/>
        <button>Submit</button>

       </form>
    </div>
  );
}

export default App;

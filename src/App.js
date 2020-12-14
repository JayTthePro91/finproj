
import React,{useState} from 'react';
//import logo from './logo.svg';
import Axios from 'axios';
import './App.css';

 
 import './App.css';


const App = () =>{
//   function App(){

   const[thequery, thesetquery] = useState("")

   const The_App_Id = "30c41784";

   const The_App_Key = "a13a30df2bd96915e3a56b49d565ba03"

  const url = `https://api.edamam.com/search?q=${thequery}&app_id=${The_App_Id}&app_key=${The_App_Key}`

  const getData = async () =>{
    const thesolution = await Axios.get(url);

    console.log(thesolution);

  }

  const onChange = (j) =>{
    thesetquery(j.target.value)
  }


  const onSubmit = (j) => {
   j.preventDefault();
   getData();
  }
  
  return (

    <div className = "App">
    <h1> Welcome to our food site </h1>
    <form className = 'forms' onSubmit = {onSubmit}>
     <input type="text" placeholder="Search Food" autoComplete = "off" onChange={onChange} ></input>
     <button type="submit">Submit</button>
    </form>

    // <form>
    //   <input type ='text' placeholder='Search Food'></input>
    //   {/* <input type="Submit"> Submit</input> */}
    //   <button type="submit">Submit</button>
    // </form>
    <div>
        <h1> Welcome to Our Food site </h1>
        <form  className = 'forms'>
          <input type="text" placeholder="Search Food" ></input>
          <button type="submit">Submit</button>
      </form>

    </div>
    

   );
}

export default App;









import React,{useState} from 'react';
//import logo from './logo.svg';
import Axios from 'axios';
import './App.css';
import Recipe from './components/therecipe';
import {v4 as uuidv4} from 'uuid';
import Alert from './components/thealert';


//const App = () =>{
   function App(){
   



   const[thequery, thesetquery] = useState("");
   const[therecipes, setRecipes] = useState([]);
   const[thealert, settingAlert] = useState("");

   const The_App_Id = "30c41784";

   const The_App_Key = "a13a30df2bd96915e3a56b49d565ba03"

  const url = `https://api.edamam.com/search?q=${thequery}&app_id=${The_App_Id}&app_key=${The_App_Key}`

  const getData = async () =>{

    //if(thequery !==""){

    const thesolution = await Axios.get(url);
    //here the problem starts 
    //if(!thesolution.data.more){
      //return settingAlert("The food does not exist");
    //}
    setRecipes(thesolution.data.hits)
    
    console.log(thesolution);
    settingAlert("");
    thesetquery("");
    //}else{
      //settingAlert('Just Please fill the form');
    //}
  };
//the problem ends
  const onChange = (j) =>{
    thesetquery(j.target.value)
  }


  const onSubmit = (j) => {
   j.preventDefault();
   
   getData();
  };
  
  return (

    <div className = "App">
    <h1> Welcome to our food site </h1>
    <form className = 'forms' onSubmit = {onSubmit}>
     {thealert !== "" && <Alert alert = {thealert}/>}

     <input type="text" placeholder="Search Food" autoComplete = "off" onChange={onChange} value={thequery}/>
     <button type="submit">Submit</button>
    </form>

    <div className = "recipes">
    {therecipes !== [] && therecipes.map(recipe => <Recipe key = {uuidv4()} recipe= {recipe}/>)}

    </div>
    </div>
    

   );
};

export default App;








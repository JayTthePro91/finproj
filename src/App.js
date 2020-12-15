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
   const[recipes, setRecipes] = useState([]);
   const[alert, setAlert] = useState("");

   const The_App_Id = "30c41784";

   const The_App_Key = "a13a30df2bd96915e3a56b49d565ba03"

  const url = `https://api.edamam.com/search?q=${thequery}&app_id=${The_App_Id}&app_key=${The_App_Key}`

  const getData = async () =>{

    if(thequery !==""){

    const thesolution = await Axios.get(url);
    
    if(!thesolution.data.more){
      return setAlert("No food with such name");
    }
    setRecipes(thesolution.data.hits)
    
    console.log(thesolution);
    setAlert("");
    thesetquery("");
    }else{
      setAlert('Please fill the form');
    }
  };

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
     {alert !== "" && <Alert alert = {alert}/>}

     <input type="text" placeholder="Search Food" autoComplete = "off" onChange={onChange} value={thequery}/>
     <button type="submit">Submit</button>
    </form>
    <div className = "recipes">
    {recipes !== [] && recipes.map(recipe => <Recipe key = {uuidv4()} recipe= {recipe}/>)}

    </div>
    </div>
  );
}

export default App;

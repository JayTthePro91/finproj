
import React,{useState} from "react";
import "./App.css";
import Axios from 'axios';
import './App.css';


 
 import './App.css';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchTerm: "",
//       data: [],
//     };
//   }

//   onInputChange = (event) => {
//     this.setState({ searchTerm: event.target.value });
//   };

//   getFood = (e) => {
//     e.preventDefault();
//     const { searchTerm } = this.state;

//     fetch(
//       `https://api.edamam.com/search?q=${searchTerm}&app_id=755850ce&app_key=b65ad11cb1529cc777336fdabaedde35`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ data: data.hits });
//       });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <h1> Welcome to Our Food site </h1>
//           <form className="forms" onSubmit={this.getFood}>
//             <input
//               onChange={this.onInputChange}
//               type="text"
//               placeholder="Search Food"
//             ></input>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//         <ul class='list'>
//           {this.state.data.map((food) => {
//             return (
//               <li>
//                 <p>{food.recipe.label}</p>
//                 <img src={food.recipe.image} />
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }





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
   
    </div>

   );

}
export default App;

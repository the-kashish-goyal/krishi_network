import { useState,useParams, useEffect } from "react";
import ShowData from "./data";
import useFetch from "./useFetch";


const App = () => {
  const[name,SetName] = useState('');
  const[email,SetEmail] = useState('');
  const[gender,setGender] = useState('Male');
  const[file,setImage] = useState();

  
    const {data:x_data}=useFetch('http://localhost:3000/data');
    
  
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
   }
   const handleSubmit = (e)=>{
     e.preventDefault();
    const data = {name,gender,email,file};
    console.log(data);
    fetch('http://localhost:3000/data',{
      method: 'POST',
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(data),
    }).then(()=>{
      console.log('new form filled')
    })
   }
  return ( 
    <div className="app">
      <h2>Krishi Network</h2>
      <form onSubmit = {handleSubmit}>
        <label>Name:</label>
        <input 
        type="text" 
        required
        value = {name}
        onChange = {(e)=>SetName(e.target.value)}
        />
        <label>Email</label>
        <input type="email" required value = {email} onChange = {(e)=>SetEmail(e.target.value)}/>
        <label>Gender</label>
        <select required value = {gender} onChange = {(e)=>setGender(e.target.value)} >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>Image</label>
        <input 
        type="file" 
        value = {undefined}
        onChange = {onImageChange}/>
        <button>Submit</button>
      </form>
      <h2>Form submissions</h2>
      <ShowData data={x_data}/>
    </div>
   );
}
 
export default App;
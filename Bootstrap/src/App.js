import Container from 'react-bootstrap/esm/Container';
import './App.css'; 
import Employee from './Examples/Employee';
import Model from './Examples/Model';
 function App() 
 { const arr = [{image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg", 
 id: 1, name: "John", 
 address: "Chennai" },
  { image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  id: 2, name: "David", 
  address: "Pune" },
   { image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
   id: 3, name: "luke", 
   address: "Hyderabad" }, 
   { image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
   id: 4, name: "suresh", 
   address: "Delhi" },
    {image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
     id: 5, name: "Rahul", 
     address: "vizag" }];
      //const bgColor="red"; 
     return (   
        <div className="App">    
              <Employee EmpArr={arr}/> 
<Model />
   </div>  

 );
}
 export default App;
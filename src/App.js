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
   </div>  

 );
}

//Modal 

// function App() {
//   const [modalShow, setModalShow] = useState(false);
//   const [modalData, setModalData] = useState({});
//   const details = [
//     {
//       name: "mac",
//       fname: "mac beck",
//       email: "123@gmail.com",
//       phNo: 77362261617,
//       img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     },
//     {
//       name: "doe",
//       fname: " Doe",
//       email: "546@gmail.com",
//       phNo: 234567788,
//       img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     },
//     {
//       name: "rathod",
//       fname: "rai",
//       email: "Ria@gmail.com",
//       phNo: 234567889090,
//       img: ""https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
//     }
//   ];
//   return (
//     <Container>
//       <AccordianEx details={details} />
//       <div>
//         {details.map((el) => (
//           <>
//             <Button
//               variant="warning"
//               onClick={() => {
//                 setModalShow(true);
//                 setModalData(el);
//               }}
//               className="modal-btn"
//             >
//               {el.name}
//             </Button>
//           </>
//         ))}
//         <ModalEx
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//           detail={modalData}
//         />
//       </div>
//     </Container>
//   );
// }

// export default App;
 export default App;

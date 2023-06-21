
import './App.css';
import axios from 'axios';
import Students from './Students';


const http =axios.create({
  baseURL: 'http://localhost:3100/'
})




function App() {
 const getAll = () => {
  fetch('http://localhost:3100/students')
  .then((result) =>{
    console.log(result);
    if(!result.ok)
    throw Error(result.statusText);
    return result.json();
  })
   

  .then((Response) => {
    console.log(Response);
  })
  .catch((error) => {
    console.log(error);
  })
 }
  const insert= () => {
  fetch('http://localhost:3100/students',{
    method:"POST",
    headers:{
      "content-Type" : "application/json"
    },
    body: JSON.stringify({
        "id": "SV04",
        "fullname": "asdadad",
        "gender": true,
        "age": 25,
        "email": "asd@gmail.com"
    })
  })
  .then((result) =>{
    console.log(result);
    if(!result.ok)
    throw Error(result.statusText);
    return result.json();
  })
   

  .then((Response) => {
    console.log(Response);
  })
  .catch((error) => {
    console.log(error);
  })
 }

 const update =async () => {
  // http.put('students/SV03', {
  //   "id": "SV04",
  //   "fullname": " Update",
  //   "gender": true,
  //   "age": 25,
  //   "email": "asd@gmail.com"
  // })
  // .then(response => console.log(response))
  // .catch(error => console.log(error));

  let data = await http.put('students/SV02', {
      "id": "SV02",
      "fullname": "Đào tạo",
      "gender": true,
      "age": 24,
      "email": "khanghy@gmail.com"
  });
  console.log(data.data);
 }

 const remove = () => {
  http.delete('students/SV03')
  .then(response => console.log(response.data))
  .catch(error => console.log(error));
 }

 






  return (
    <div className="App">
      <button onClick={getAll}>getAll</button>
      <button onClick={insert}>POST</button>
      <button onClick={update}>PUT</button>
      <button onClick={remove}>DELETE</button>


      <h2> Quản lý sinh viên</h2>
      <Students/>
      
    </div>
  );
}

export default App;

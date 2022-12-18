import React,{useState} from 'react';
import LoginForm from './components/LoginForm';

function App(){
  const adminUSer={
    email: "bsc-inf-04-19@unima.ac.mw",
    password: "kamoto"
  }
  const [user, setUser]=useState({name:"",email:""});
  const[error, setError]=useState("");
  const Login=details=>{
    console.log(details);

  if (details.email === adminUSer.email && details.password === adminUSer.password)
{
  console.log("Logged in");
  setUser({
    name: details.name,
    email: details.email
  });
}else {
  console.log("Details do not match!");
  setError("Details dot not match");
}

  }

  const Logout=()=>{
    setUser({name: "" , email: ""});
    
  }
  return(
    <div className="App">
 {(user.email !=="")?(
   <div className="welcome">
     <h2>welcome,<span>{user.name}</span></h2>
     <button onClick={Logout}>Logout</button>
     </div>
 ) :(
   <LoginForm Login={Login}  error={error}/> 
 )
}

    </div>
  )
}
export default App;
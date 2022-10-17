import React from 'react'
import Home from './pages/Home'
//import Loader from './components/Loader';
//import Login from "./pages/Login";
const App = () => {
  const [loading,setLoading]=React.useState(true);
  const spinner=document.getElementById("spinner");
  if(spinner){
    setTimeout(()=>{
      spinner.style.display="none";
      setLoading(false);
    },2000);
  }
  return (
    !loading && <Home />
  )
}

export default App

 
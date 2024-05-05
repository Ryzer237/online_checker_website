import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
function useIsOnline(){
  const[isOnline,setIsOnline]=useState(window.navigator.online);
  useEffect(()=>{
    window.addEventListener("online",()=>{
    setIsOnline(true);

    })
    window.addEventListener("offline",()=>{
      setIsOnline(false);
  
      })
  })
  return isOnline;
}
function App() {
const online=useIsOnline();
if(online){
  return ("you are online")
}
  return (
  "you are offline.connect to internet"
  
  )
}



   



export default App

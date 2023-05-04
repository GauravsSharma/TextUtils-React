import  {useState} from 'react';
import React from 'react'
export default function About() {
    const [myStyle,setMystyle] = useState({
        backgroundColor:"white",
        color:'black'
    });
    const [mybtn,setMybtn] = useState('Enable Dark Mode')

    const toggleStyle = ()=>{
        if(myStyle.color==='black'){
           setMystyle({
            backgroundColor:"black",
            color:'white'
           })
           setMybtn('Enable Normal Mode')
           }
           else{
            setMystyle({
                backgroundColor:"white",
                color:'black'
            })
            setMybtn('Enable Dark Mode');
        }
    }
      return (
    <div>
        <h2>About Us</h2>
      <div class="card text-center my-3">
  <div class="card-header" style={myStyle}>
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
<div class="card text-center my-3">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
<div class="form-check form-switch" onClick={toggleStyle}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked">{mybtn}</label>
</div>
    </div>
  )
}

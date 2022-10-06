import { useState } from "react"

export function Menu(){
    const [visible, setVisible] = useState(true)

    const dispState = ()=>{
        if (visible){
            return 'flex'
        }else{
            return 'none'
        }    
    }   

    const handleClick = (event)=>{
        event.preventDefault();
        setVisible(!visible)
    }

    return (
    <div id='sidebar'>
        <button onClick={handleClick}>Menu v</button>
        <ul id='sidebar-options' style={{display:dispState()}}>
          <li><a href='/'>Plant Performance</a></li>
          <li><a href='/'>Inverter Performance</a></li>
          <li><a href='/'>Forecasting</a></li>
        </ul>
        
      </div>
    )
}
// import axios from 'axios';
import { useState } from 'react';
import './App.css';




function App() {
  const filename1 = '3da352a8-e0cd-48ca-b800-5f13daf3edc4_Barreiras_2022-01-01'
  const plants = ["Barreiras", "Javiera", "Guajiro"];
  const [plant, setPlant] = useState('Barreiras');
  const [filename, setFilename] = useState();


  const options = plants.map((plantName) => {
    return <option value={plantName}>{plantName}</option>;
  });

  const handleChangePname = (event) =>{
    event.preventDefault()
    setPlant(event.target.value)
      }
  
  const handleChangeLoad = (event) =>{
    event.preventDefault()
    setFilename(filename1)
    // getfilename(plant).then(
    //   (res) =>{
    //     console.log(res)
    //     setFilename(res)
    //   }
    // )
      }

  var frame, dbuton;    
  if (filename != null) {
    dbuton = <a className='download-button' href={'http://192.168.1.3/results/download/'+filename+'.csv'}>Download</a>
    frame = <>
      <iframe className='desktop' title={filename} src={process.env.PUBLIC_URL + '/results/'+filename1+'.html'} allowfullscreen="" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
      <a className='mobile' href={process.env.PUBLIC_URL + '/results/'+filename1+'.html'}>Ver gráfico</a>
    </>
  }else{
    dbuton = <></>
    frame = <></>
  }

  console.log(plant, filename)
  return (
    <div className="App">
      <div id='sidebar'>
        <ul id='sidebar-options'>
          <li><a href='/'>Plant Performance</a></li>
          <li><a href='/'>Inverter Performance</a></li>
          <li><a href='/'>Forecasting</a></li>
        </ul>
        
      </div>
      <div id = 'main'>
        <div id='content'>
          <header>
            <select name="plantName" id="dropdown-plants" onChange={handleChangePname} >
              {options}
            </select>
            <button onClick={handleChangeLoad}>LOAD</button>
            {dbuton}
          </header>
          {frame}
        </div>
     
        <div id='footer'>
         <img alt='logo' src={process.env.PUBLIC_URL + '/horizontal_logo.png'}  id='footer_logo'/>
        </div> 
      </div>
      
      
    </div>
  );
}

export default App;

// async function getfilename(plantName){
//   const resp = await axios.get('http://192.168.1.3/weather_station/?pname='+plantName+'&date=2022-01-01')
//   return resp.data
// }

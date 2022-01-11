import React from 'react';
import './App.scss';
import img from '../src/Assets/IMG/play_icon.svg'
import exst from '../src/Assets/IMG/exit.svg'
import Abdukarim from '../src/Assets/IMG/aka.png'
function App() {
  const headingRef = React.useRef(null)
  console.log(headingRef);
  return (
    <body >
    <div ref={headingRef} className='heading  container'>

      <div className='bag'>
        <div className='bag2'>
          <h2 className='headingh2'>Hayot bizga <span>"Adolatsiz"</span>  emas,- biz o'zimizga  <span>adolatsizmiz</span> </h2>
          <button className='button' onClick={()=>{
                headingRef.current.classList.toggle("salom--activ")
              }}> 
              <img className='humburger' src={img} alt="" width={60}height={60}/>
              <img className='exist' src={exst} alt="" width={35}height={35}/>
              </button>
        </div>
              
         <img className='abdukarim' src={Abdukarim} alt="" width={504}height={504}/>
      </div>
    
   


     

    <iframe className='youtobe ' 
     width="560"
      height="315" 
      src="https://www.youtube.com/embed/q1at4hm-6ok" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

        
      </iframe>
    
    
    
    </div>
    </body>
    
    
    );
  }
  
  export default App;
  
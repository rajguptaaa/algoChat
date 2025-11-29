import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

export const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
    <div className='main'>
      <div className="nav">
        <p>AlgoChat</p>
        <img src={assets.user_icon} alt=""/>

      </div>
      <div className="main-container">
        {!showResult
        ?<>
        <div className="greet">
          <p><span>Hello, Raj.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcomin road trip</p>
            <img src={assets.compass_icon} alt=""/>

          </div>
           <div className="card">
            <p>Write a professional email to schedule a meeting for next Monday.</p>
            <img src={assets.bulb_icon} alt=""/>
            
          </div>
           <div className="card">
            <p>Generate five creative blog post ideas about AI in education</p>
            <img src={assets.message_icon} alt=""/>
            
          </div>
           <div className="card">
            <p>Explain quantum computing in simple terms for a 10-year-old</p>
            <img src={assets.code_icon} alt=""/>
            
          </div>
        </div>
        </>
        :<div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>

          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading?<div className="loader">
              <hr />
              <hr />
              <hr />

            </div>:    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
        
          </div>
        </div>
      }
        
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter the prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon}  alt="" />
              {input?<img  onClick={()=>onSent()}src={assets.send_icon}  alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            AlgoChat may display inaccurate info,including about people,so double-check its respones.Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

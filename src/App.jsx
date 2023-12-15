import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import pentagonImg from '../images/bg-pentagon.svg'
import triangleImg from '../images/bg-triangle.svg'
import closeImg from '../images/icon-close.svg'
import lizardImg from '../images/icon-lizard.svg'
import paperImg from '../images/icon-paper.svg'
import rockImg from '../images/icon-rock.svg'
import scissorsImg from '../images/icon-scissors.svg'
import spockImg from '../images/icon-spock.svg'
import rulesImg from '../images/image-rules.svg'
import rulesBonusImg from '../images/image-rules-bonus.svg'
import logoImg from '../images/logo.svg'
import logoBonusImg from '../images/logo-bonus.svg'


function App() {

  const [general, setgeneral] = useState({
    choosen : false,
    userChoice : '',
    compChoce : '',
    compImg: '',
    choiceImg : '',
    totalScore : 0,
    currentScore : 0,
    currentVal : '',
    changed : '',
    rules : false
  })


  function Disp() {
    setgeneral((e) => {
      return {
        ...e,
      choosen : general.choosen == false ? true : false
      }
    })
   

  }
  function DispRules() {
    setgeneral((e) => {
      return {
        ...e,
      rules : general.rules == false ? true : false
      }
    })
   
console.log(general.rules)
  }
const rulesStyle = {
    visibility : general.rules == true ? 'visible' : 'hidden'
}
  const Selection2div = document.getElementById('Selection2div')
const selection1divStyler = {
  backgroundImage : general.userChoice == 'scissors' ? 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))' : general.userChoice == 'spock' ?  'linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))' : general.userChoice == 'paper' ? 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))' : general.userChoice == 'lizard' ? 'linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))' : general.userChoice == 'rock' ? 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))' : 'hsl(217, 16%, 45%)',
  borderRadius : '9999px',
  //padding : ' 0.45rem',
}

const selection2divStyler = {
  backgroundImage : general.compChoce == 'scissors' ? 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))' : general.compChoce == 'spock' ?  'linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))' : general.compChoce == 'paper' ? 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))' : general.compChoce == 'lizard' ? 'linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))' : general.compChoce == 'rock' ? 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))' : 'hsl(217, 16%, 45%)',
  // padding : ' 0.75rem',
  borderRadius : '9999px'
}
const Selection2imgStyler = {
  padding : ' 0.75rem',
  borderRadius : '9999px',
  backgroundColor : ' rgb(226 232 240)',
  width: '3.9rem'

}

const Selection1imgStyler = {
  padding : ' 0.75rem',
  borderRadius : '9999px',
  backgroundColor : ' rgb(226 232 240)',
  width: '3.9rem'

}


function Choosenfunc(props) {

  setgeneral((e) => {
    return {
      ...e,
    choosen : general.choosen == false ? true : false
    }
  })
  
  
  if(props == 'scissors'){
    general.userChoice = 'scissors'
    general.choiceImg = scissorsImg 
  }else if(props == 'spock'){
    general.userChoice = 'spock'
    general.choiceImg = spockImg
   
  }else if(props == 'paper'){
    general.userChoice = 'paper' 
    general.choiceImg = paperImg 
  
  }else if(props == 'lizard'){
    general.userChoice = 'lizard' 
    general.choiceImg = lizardImg
    
  }else if(props == 'rock'){
    general.userChoice = 'rock' 
    general.choiceImg = rockImg
    
  }
  var x = Math.floor(Math.random() * 5) + 1
  // general.compChoce = x
  if(x == 1){
    general.compImg = scissorsImg  
    general.compChoce = 'scissors'
  }else if(x == 2){
    general.compImg = spockImg  
    general.compChoce = 'spock'
  }else if(x == 3){
    general.compImg = paperImg
    general.compChoce = 'paper' 
  }else if(x == 4){
    general.compImg = lizardImg
    general.compChoce = 'lizard'  
  }else if(x == 5){
    general.compImg = rockImg
    general.compChoce = 'rock'
  }
  
  if(general.userChoice == 'scissors' && general.compChoce == 'paper' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'WIN' ,
        currentScore : 1,
        totalScore : general.totalScore + 1 
  }})
    
  }else if(general.userChoice == 'paper' && general.compChoce == 'rock' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'WIN' ,
        currentScore : 1,
        totalScore : general.totalScore + 1 
  }})
  }else if(general.userChoice == 'rock' && general.compChoce == 'lizard' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'WIN' ,
        currentScore : 1,
        totalScore : general.totalScore + 1 
  }})
  }else if(general.userChoice == 'lizard' && general.compChoce == 'spock' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'WIN' ,
        currentScore : 1,
        totalScore : general.totalScore + 1 
  }})
  }else if(general.userChoice == 'spock' && general.compChoce == 'scissors' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'WIN' ,
        currentScore : 1,
        totalScore : general.totalScore + 1 
  }})
  }else if(general.userChoice == 'scissors' && general.compChoce == 'spock' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'LOSE',
        currentScore : 0,
        totalScore : general.totalScore +0 
  }})
  }else if(general.userChoice == 'spock' && general.compChoce == 'lizard' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'LOSE',
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'lizard' && general.compChoce == 'rock' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'LOSE',
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'rock' && general.compChoce == 'paper' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'LOSE',
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'paper' && general.compChoce == 'scissors' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'LOSE',
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'scissors' && general.compChoce == 'lizard' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'WIN' ,
        currentScore : 1,
        totalScore : general.totalScore + 1 
  }})
  }else if(general.userChoice == 'lizard' && general.compChoce == 'scissors' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'LOSE',
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'scissors' && general.compChoce == 'rock' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'LOSE',
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'rock' && general.compChoce == 'scissors' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'WIN' ,
        currentScore : 1,
        totalScore : general.totalScore + 1 
  }})
  }else if(general.userChoice == 'paper' && general.compChoce == 'spock' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'WIN' ,
        currentScore : 1,
        totalScore : general.totalScore + 1 
  }})
  }else if(general.userChoice == 'spock' && general.compChoce == 'paper' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'LOSE',
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'spock' && general.compChoce == 'rock' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'WIN' ,
        currentScore : 1,
        totalScore : general.totalScore + 1 
  }})
  }else if(general.userChoice == 'rock' && general.compChoce == 'spock' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'LOSE',
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'lizard' && general.compChoce == 'paper' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'WIN' ,
        currentScore : 1,
        totalScore : general.totalScore + 1 
  }})
  }else if(general.userChoice == 'paper' && general.compChoce == 'lizard' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'LOSE',
        currentScore : 0,
        totalScore : general.totalScore + 0
  }})
  }else if(general.userChoice == 'spock' && general.compChoce == 'spock' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'TIE' ,
        currentScore : 1,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'rock' && general.compChoce == 'rock' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'TIE' ,
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'lizard' && general.compChoce == 'lizard' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'TIE' ,
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'paper' && general.compChoce == 'paper' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'TIE' ,
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }else if(general.userChoice == 'scissors' && general.compChoce == 'scissors' ){
    console.log(general.userChoice + " :" + general.compChoce)
    setgeneral((e) => {
      return {
        ...e,
        currentVal : 'TIE' ,
        currentScore : 0,
        totalScore : general.totalScore + 0 
  }})
  }
  console.log('reached ' + general.userChoice + ";" + general.currentVal) 

  
}



  return (
    <>

    
    <div className=' min-h-screen' id='universal-div'>{/* universal div */}
        <div className=' rounded-md text-slate-200' id='score-master-div'>{/* score bar div */}
              

                <div id='score-list-div'>
                  <ul>
                    <li>ROCK</li>
                    <li>PAPER</li>
                    <li>SCISSORS</li>
                    <li>LIZARD</li>
                    <li>SPOCK</li>
                  </ul>
                </div>

                <div className=' bg-slate-100 rounded-md p-2' id='score-disp-div'>
                  <span>TOTAL SCORE</span>
                  <big id='totalScore'>{`${general.totalScore}`}</big>
                </div>

        </div>
        
        <div style={rulesStyle} className=' bg-slate-50' id='rulesDiv'>
          <img onClick={DispRules} id='cancelRules' src={closeImg} alt="" />
          <img id='rulesImg' src={rulesBonusImg} alt="" />
        </div>

        <div >{/* content div */}

        { general.choosen == false ?  <div id='choices-container-div'>
          <div onClick={() => Choosenfunc('scissors')} id='inner1'><div className=' rounded-full p-2 sm:p-3' id='scissorsdiv'><img className=' bg-slate-200 rounded-full p-3' id='scissorsImg' src={scissorsImg} alt="" /></div></div>
              
            <div id='inner2'>
              <div onClick={() => Choosenfunc('spock')}  className=' rounded-full p-2 sm:p-3 ' id='spockdiv'><img className=' bg-slate-200 rounded-full p-3' id='spockImg' src={spockImg} alt="" /></div>
              <div onClick={() => Choosenfunc('paper')} className=' rounded-full p-2 sm:p-3 ' id='paperdiv'><img className=' bg-slate-200 rounded-full p-3' id='paperImg' src={paperImg} alt="" /></div>
            </div>
            <div id='inner3'>
              <div onClick={() => Choosenfunc('lizard')} className=' rounded-full p-2 sm:p-3 ' id='lizarddiv'><img className=' bg-slate-200 rounded-full p-3' id='lizardImg' src={lizardImg} alt="" /></div>
              <div onClick={() => Choosenfunc('rock')} className=' rounded-full p-2 sm:p-3 ' id='rockdiv'><img className=' bg-slate-200 rounded-full p-3' id='rockImg' src={rockImg} alt="" /></div>
            </div>
            
                  
        </div>

       :   <div id='display-master-div'>
            <div id='selection1div'>
              <div className=' md:p-4 sm:p-2 p-1.5' style={selection1divStyler} id='Selection1div'><img style={Selection1imgStyler} id='Selection1img'  src={general.choiceImg} alt="" /></div>
              <span className=' text-slate-100 font-semibold text-sm'>YOU PICKED</span>
            </div>
            
            <div className=' text-slate-100' id='result-div-disp'>
            <p>Scored : {`${general.currentScore}`}</p>
              <span>YOU {`${general.currentVal}`}</span>
              <button onClick={() => Disp()} className=' bg-slate-100 rounded-md py-1 font-semibold  text-slate-800 text-sm px-6'>PLAY AGAIN</button>
            </div>
            <div id='compselectiondiv'>
                <div className=' md:p-4 sm:p-2 p-1.5' style={selection2divStyler} id='Selection2div'><img id='Selection2img' style={Selection2imgStyler} src={general.compImg} alt="" /></div>
                <span className=' text-slate-100 font-semibold text-sm'>THE HOUSE PICKED</span>
            </div>
                  
        </div>}
          
        </div>


        <div id='rules-div'>{/* rules bar div */}
            {general.choosen && <div className=' text-slate-100' id='score-div'>
              <p>Scored : {`${general.currentScore}`}</p>
              <span>YOU {`${general.currentVal}`} </span>
              <button onClick={() => Disp()}  className=' bg-slate-100 rounded-md py-1 font-semibold  text-slate-800 text-sm px-6'>PLAY AGAIN</button>
            </div>}

            <button onClick={DispRules} id='rules' className=' mx-auto rounded-md font-semibold text-md px-4 py-1 text-slate-100 '>RULES</button>

        </div>
        
    </div>
    
    </>
  )
}

export default App

import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import { Button } from 'reactstrap';

//Todo: Move this to a different json file
const loopSounds = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Future Beats',
    status: false,
    url: 'sounds/future_beats.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Electric Guitar',
    status: false,
    url: 'sounds/electric_guitar_120.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Groove',
    status: false,
    url: 'sounds/groove_120.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Heavy Funk',
    status: false,
    url: 'sounds/heavyfunk_120.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Maze Politics',
    status: false,
    url: 'sounds/mazepolitics_120.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Pass Groove',
    status: false,
    url: 'sounds/passgroove.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: 'Silent Star',
    status: false,
    url: 'sounds/silentstar_120.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Stompy Slosh',
    status: false,
    url: 'sounds/stompyslosh_120.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Stutter Breakbeats',
    status: false,
    url: 'sounds/stutter_breakbeats.mp3'
  }
];




const PadKey = ({play ,sound: {key,url, keyCode, id, status }}) => {
        // Allowing keyboard usage for the loop machine
      const handleKeydown = (event) => { 

        if(event.keyCode === keyCode){

          play(key,id, status);
        }

      };

      React.useEffect(() => {
        document.addEventListener("keydown",handleKeydown) 

      }, [key,id,status]);

          return (
            <button id={keyCode} className ="instrument" onClick={
              
              ()=> {
                play(key, id, status)
              } 
            
            }>
                  <audio loop className="clip" id={key} src={url}></audio>
                    {key}
              </button>
          );
}

// Each Pad is responsible for a different instrument
const Pad = ({power, play, sounds}) => {
    return(
      <div className="keyboard">
        {power 
        ? loopSounds.map((sound) =>  <PadKey play={play} sound={sound} sounds={sounds}/>)
        : loopSounds.map((sound) =>  <PadKey play={play} sound={{...sound, url:"#"}}/>)}
      </div>
    );
}

const InstrumentControl = ({name, volume,power,stopLoops, handleVolumeChange}) => {
  return(
  <div className= "control">
    <button onClick={stopLoops}>Turn the power {power ? "OFF" : "ON"}</button>
    <h2>Volume: %{Math.round(volume * 100)}</h2>
    <input type="range" max="1" min="0" step="0.01" value={volume} onChange={handleVolumeChange} />
      <h2>{name}</h2>
  </div>
  );
}

const Test = () => {

  return (

<button type="button" className="btn btn-danger"> START RECORDING</button>
  );
}


function App() {
const [power, setPower] = React.useState(true);
const [sounds, setSounds] = React.useState(loopSounds);
const [soundName, setSoundName] = React.useState("");
const [volume, setVolume] = React.useState(1);


const stopLoops = () =>{
  setPower(power ? false : true);

  const audios = sounds.map(sound => document.getElementById(sound.key));
  audios.forEach(audio => {
    deactivateAudio(audio);
  });
// Go over all sounds and make false.
  sounds.map(sound => 
    {
      updateItem(sound.key,"status",false);
    }
    )

}

const handleVolumeChange = (event) => {
  setVolume(event.target.value);
}


const styleActiveKey = (audio) => {
  if(power){
  audio.parentElement.style.backgroundColor = "#000000";
  audio.parentElement.style.color = "#ffffff";
  }
}

const deactivateAudio = (audio) => {
  setTimeout(() => {
    audio.parentElement.style.backgroundColor = "#ffffff"
    audio.parentElement.style.color = "#000000"
  }, 300)
}

// function which plays the audio 
  const play = (key, id, keyPadStatus) => {

    if(power){

      const audio = document.getElementById(key);
      if(!keyPadStatus) {
          setSoundName(id)
        // const player = new Tone.Player(audio.src).toDestination();
          styleActiveKey(audio);
          updateItem(key,"status",keyPadStatus ? false : true);
          audio.currentTime = 0;
          // This is the older player
          audio.play();
      }else{
        updateItem(key,"status",keyPadStatus ? false : true);
        deactivateAudio(audio);
        audio.pause();
      }

    }
  };

  // Setting the current volume for each one of the audio elements
  const setKeyVolume = () => {
    const audios = sounds.map(sound => document.getElementById(sound.key));
   // console.log("Set Key Volume ran!");
    audios.forEach(audio => {
      if(audio) {
        audio.volume = volume;
      }
    }) 
  }

  // setting status on/off of keypad to be true/false
const updateItem = (key, value, newvalue) => {

  var index = loopSounds.findIndex(x => x.key === key);
  let g = loopSounds[index]
  g[value] = newvalue
  if (index === -1){
    // handle error
    console.log('no match')
  }
  else
  //  console.log(sounds);
    setSounds([
      ...sounds.slice(0,index),
      g,
      ...sounds.slice(index+1)
    ]
            );
}

  return (

        <div id="loop_machine">
              {setKeyVolume()}
            <div className ="wrapper">
                <Pad power={power} play={play} sounds={sounds}/>
                
                <InstrumentControl 
                    stopLoops = {stopLoops}
                    volume ={volume}
                    power ={power}
                    handleVolumeChange ={handleVolumeChange}
                    name={soundName}/>

                    <Test />
            </div>


        </div>
        
  );
}

export default App;

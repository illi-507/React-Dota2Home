import React, { Component } from "react";
import "./footer.css";

class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queueButton: (
        <div className="queueButton" onClick={this.changeText}>
          PLAY DOTA{" "}
        </div>
      ),
      toggle: true,
      Slider1: "slide-up",
      Slider2: "slide-up2",

      minutes:"00",
      seconds:"00",
      totalSeconds: 0,
      myTimer:"",
      timerToggle:false

    };
  }

  toggleTimer=()=>{  // toggle timer
          if(!this.state.timerToggle){  // timer is not running
            this.startTimer();
            this.setState({
                timerToggle: !this.state.timerToggle    
            });
          }
          else if(this.state.timerToggle) // timer is running 
          {
             this.stopTimer();
             this.setState({
                timerToggle: !this.state.timerToggle ,
                minutes:"00",
                seconds:"00",
                totalSeconds:0
            });
          }

  }

  stopTimer=()=>{
    clearInterval(this.state.myTimer);
  }

  startTimer=()=>{
    this.setState({
        myTimer: setInterval(this.setTime, 1000)        
    });
  }

  setTime=()=> {
    
    var tempSecond = ++this.state.totalSeconds;
    this.setState({
        seconds :this.pad(tempSecond % 60),
        minutes:this.pad(parseInt(tempSecond / 60))
    });
  }
  
  pad=(val)=> {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  changeText = () => {
    if (this.state.toggle) {
      this.setState({
        queueButton: (
          <div className="queueButtonClick" onClick={this.changeText}>
            FINDING MATCH <button>X</button>{" "}
          </div>
        ),
        toggle: !this.state.toggle,
      });
    } else {
      this.setState({
        queueButton: (
          <div className="queueButton" onClick={this.changeText}>
            PLAY DOTA{" "}
          </div>
        ),
        toggle: !this.state.toggle,
      });
    }
  };

  toggleSum = () => {
    this.toggle1();
    this.toggle2();
    this.toggleTimer();
  };
  toggle1 = () => { // toggle PLAY DOTA
    const current = this.state.Slider1;
    if (current == "slide-up") {
      this.setState({
        Slider1: "slide-down",
      });
    } else {
      this.setState({
        Slider1: "slide-up",
      });
    }
  };

  toggle2 = () => {   // toggle FINDING MATCH
    const current = this.state.Slider2;
    if (current == "slide-up2") {
      this.setState({
        Slider2: "slide-down2",
      });
    } else {
      this.setState({
        Slider2: "slide-up2",
      });
    }
  };



  render() {
    return (
      <div className="footer">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        <div className="team">hehe</div>

        <div className="queue">
          <div className="sliderContainer1">
          <a href="#">
          <div className={this.state.Slider1} >
            <div>
              <div id="Content3"></div>
            </div>
          </div>
        </a>

        <a href="#">
        <div className={this.state.Slider2} >
          <div>
            <div id="Content3">
            <label>RANKED &nbsp;/ &nbsp; ALL PICK &nbsp;/&nbsp; US EAST &nbsp; </label>
            <label >{this.state.minutes}:</label><label >{this.state.seconds}</label>
            
            </div>
          </div>
        </div>
        </a>
          </div>


          
          <div className="sliderContainer2">

            <a href="#">
              <div className={this.state.Slider1} onClick={this.toggleSum}>
                <div>
                  <div id="Contents1">PLAY DOTA</div>
                </div>
              </div>
            </a>

            <a href="#">
            <div className={this.state.Slider2} onClick={this.toggleSum}>
              <div>
                <div id="Contents2">FINDING MATCH...
                <div id="exit"><i class="far fa-window-close" ></i></div>
                </div>
              </div>
            </div>
            </a>


          </div>
          </div>
        </div>
    );
  }
}

export default footer;

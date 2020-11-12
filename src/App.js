import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/Footer/footer";
import background from "./components/asset/diretide_twitter.png";
import "./App.css";

function App() {
  function function1() {
    alert("asdasd");
    window.close();
  }

  const onClose = () => {
    window.open("", "_self", ""); //bug fix
    window.close();
  };
  return (
    <div className="App">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Header></Header>
    
      <div className="home">
        <div className="online">
          <div>online players: 400,000</div>
        </div>
        <div class="container">
          <div id="column1">
            <div id="profile" className="tempAffect">
              Profile
            </div>
            <div id="friends" className="tempAffect">
              Friends
            </div>
          </div>

          <div id="column2">
            <div id="treasure" className="tempAffect">
              Treasure
            </div>
            <div id="chat" className="tempAffect">
              Chat
            </div>
          </div>
          <div id="column3">
            <div id="battlecup" className="tempAffect">
              Battle Cup
            </div>
            <div id="newtreasure" className="tempAffect">
              New Treasure
            </div>
            <div id="activity" className="tempAffect">
              Activity
            </div>
          </div>
        </div>
      </div>
     
     
      <Footer></Footer>

    </div>
  );
}

export default App;

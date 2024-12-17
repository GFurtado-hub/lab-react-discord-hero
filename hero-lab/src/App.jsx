import './App.css';
import discordBackGround from './assets/discord-background.png';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={discordBackGround} alt="Discord Background" className="BackGround" />
        <img src={discordLogo} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>
      <main className="main">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a worldwide art
          community. Where just you and a handful of friends can spend time together. A place
          that makes it easy to talk every day and hang out more often.
        </p>
        <div>
          <button className="download">Download for Mac</button>
          <button className="browser">Open Discord in your browser</button>
        </div>
      </main>
    </div>
  );
}

export default App;

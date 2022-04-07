import './App.css';
import profile from "./images/fotoperfilola.jpg";
import github_b from "./images/github_blank.svg";

function App() {
  return (
    <main>
      <div id="card">
        <img id="profile" src={profile} alt="Daniel Espinoza" />
        <h1>Daniel Espinoza</h1>
        <p>Web developer</p>
        <div class='redes'>
          <a href="https://github.com/PaletaChupada" target="_blank">
            <img src={github_b} alt="Github_b" />
          </a> 
        </div>
      </div>
    </main>
  )
}

export default App;

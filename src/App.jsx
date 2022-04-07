import './App.css';
import profile from "./images/fotoperfilola.jpg"
function App() {
  return (
    <main>
      <script src="https://kit.fontawesome.com/db59b112be.js" crossorigin="anonymous"></script>
      <div id="card">
        <img id="profile" src={profile} alt="Daniel Espinoza" />
        <h1>Daniel Espinoza</h1>
        <p>Web developer</p>
        <div class='redes'>
          <ul>
            <li>
              <a href="https://github.com/PaletaChupada" target="_blank">
                
              </a>
            </li>
            <li>
              <a href="https://github.com/PaletaChupada" target="_blank">
                
              </a>
            </li>
          </ul>   
        </div>
      </div>
    </main>
  )
}

export default App;

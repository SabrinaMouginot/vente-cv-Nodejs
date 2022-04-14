import Headerperso from "./components/headerperso.js";
import logo from "./logo.svg";
import "./App.css";
import Choix from "./components/choix.js";
import Footer from "./components/footer.js";
// import ColorPickerMenu from "./components/color-picker-menu.js";
import TableObjet from "./components/tableObject.js";


function App() {
  return (
    <div className="App">
      <Headerperso />
      {/* <ColorPickerMenu /> */}
      <TableObjet />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Choix />
      </header>
      <Footer />
    </div>
  );
}

export default App;

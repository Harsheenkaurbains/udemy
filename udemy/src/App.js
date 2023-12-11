// import logo from './logo.svg';
import "./App.css";
import "./css/Apps.css";
import "./css/props.css";
import Header from "./screen/header";
import Sidebar from "./screen/sidebar";
import Homepage from "./screen/home";

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        <Homepage />
      </div>
      <Header />
    </div>
  );
}

export default App;

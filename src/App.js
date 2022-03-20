// import logo from './logo.svg';
import './App.css';
// import Nav from "./components/navbar";
import Men from "./components/mentor";
import Led from "./components/lead";
import Con from "./components/contact";
import Fac from "./components/faculty";
import Mag from "./components/magazine";
import Hed from "./components/header";
import Y1 from "./components/year1";
import Y2 from "./components/year2";
import T from "./components/try";
import B from "./components/newbody";
import Time from "./components/timeline";
import NC from "./components/new-contact";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Hed />
      <B />
      <Time />
      <NC />
      {/* <Fac /> */}
      {/* <Y1 />
      <Men />
      <Led /> */}
      {/* <T /> */}
      {/* <Y2 />
      <Men />
      <Led /> */}
      {/* <Mag />
      <Con /> */}

    </div>
  );
}

export default App;

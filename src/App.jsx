import './App.css'
// import ParametrList from "./components/ParametrList/ParametrList.jsx";
// import Barrel from "./components/Barrel/Barrel.jsx";
// import LeftPanel from "./layout/LeftPanel/LeftPanel.jsx";
// import Body from "./layout/Body/Body.jsx";
// import AlertPanel from "./components/AlertPanel/AlertPanel.jsx";
// import { LineGraph } from './components/Graphics/Line.jsx';
import BodyScheme from "./layout/Main/BodyScheme/BodyScheme";
import RightPanel from "./layout/Main/RightPanel/RightPanel";
import Diagrama from "./components/Main/Diagrama/Diagrama";
import AlertList from "./components/Main/AlertList/AlertList";

function App() {

  return (
    <div className="app">
      {/* <LeftPanel>
            <ParametrList />
            <Barrel />
        </LeftPanel>
        <Body>
            <LineGraph />
            <AlertPanel />
        </Body> */}
      <div className="main-page">
        <BodyScheme />
        <RightPanel>
          <Diagrama />
          <AlertList />
        </RightPanel>
      </div>
    </div>
  );
}

export default App

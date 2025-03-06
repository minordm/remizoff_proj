import './App.css'
import ParametrList from "./components/ParametrList/ParametrList.jsx";
import Barrel from "./components/Barrel/Barrel.jsx";
import LeftPanel from "./layout/LeftPanel/LeftPanel.jsx";
import Body from "./layout/Body/Body.jsx";
import AlertPanel from "./components/AlertPanel/AlertPanel.jsx";

function App() {

  return (
    <div className='app'>
        <LeftPanel>
            <ParametrList />
            <Barrel />
        </LeftPanel>
        <Body>
            <AlertPanel />
        </Body>
    </div>
  );
}

export default App

import './App.css'
import ParametrList from "./components/ParametrList/ParametrList.jsx";
import Barrel from "./components/Barrel/Barrel.jsx";
import LeftPanel from "./layout/LeftPanel/LeftPanel.jsx";
import Body from "./layout/Body/Body.jsx";
import AlertPanel from "./components/AlertPanel/AlertPanel.jsx";
import { LineGraph } from './components/Graphics/Line.jsx';

function App() {

  return (
    <div className='app'>
        <LeftPanel>
            <ParametrList />
            <Barrel />
        </LeftPanel>
        <Body>
            <LineGraph />
            <AlertPanel />
        </Body>
    </div>
  );
}

export default App

import './App.css'
// схема
import BodyScheme from "./layout/Main/BodyScheme/BodyScheme";
import RightPanel from "./layout/Main/RightPanel/RightPanel";
import Diagrama from "./components/Main/Diagrama/Diagrama";
import AlertList from "./components/Main/AlertList/AlertList";
// график
import LeftPanel from "./layout/Graphic/LeftPanel/LeftPanel.jsx";
import ParametrItem from './components/Graphic/ParametrItem/parametrItem.jsx';
import ParametrList from "./components/Graphic/ParametrList/ParametrList.jsx";
import Barrel from "./components/Graphic/Barrel/Barrel.jsx";
import Body from "./layout/Graphic/Body/Body.jsx";
import { LineGraph } from "./components/Graphic/Graphics/Line.jsx";
import AlertPanel from "./components/Graphic/AlertPanel/AlertPanel.jsx";
// страницы
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from './components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-page">
        <BodyScheme />
        <RightPanel>
          <Diagrama />
          <AlertList />
        </RightPanel>
      </div>
    ),
  },
  {
    path: "/graphic",
    element: (
      <div className='main-page'>
        <LeftPanel>
          <ParametrItem
            name="Параметр"
            value="Величина"
            unit="Ед. изм."
            isHead="yes"
          />
          <ParametrList />
          <Barrel />
        </LeftPanel>
        <Body>
          <LineGraph />
          <AlertPanel />
        </Body>
      </div>
    ),
  },
  {
    path: '*',
    element: (
      <div>
        <Error />
      </div>
    )
  }
]);


function App() {

  return (
    <div className="app">
      <div>
        <a href='/'>Main</a>
        <a href='/graphic'>Graphic</a>
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App

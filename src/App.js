import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import BasicRoute from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {BasicRoute?.map((route,index)=>(
         <Route key={index} path={route?.path} exact element={<route.component/>}/>
        ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { RoutesLayoutCoro } from "./routes/RoutesLayoutCoro";
import './App.css';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          
            <RoutesLayoutCoro /> 
        </BrowserRouter>
    </div>
  );

}

export default App;

import React from "react";
import Head from "./header_comp/header";

function App(){
    return(

        <div className="App">
            <Head />
        </div>

    );
}*/

import FluidAnimation from 'C:\Users\shwetah\portfolio-react\node_modules\react-fluid-animation';
const defaultConfig = {
    textureDownsample: 1,
    densityDissipation: 0.98,
    velocityDissipation: 0.99,
    pressureDissipation: 0.8,
    pressureIterations: 25,
    curl: 30,
    splatRadius: 0.005
  }
 
export default class App extends Component {
    state = {
        config: {
          ...defaultConfig
        }
}

export default App;


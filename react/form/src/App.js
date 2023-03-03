import React from 'react';
import Effect from './components/effect/effect';
import Basicform from './components/form/basicform';
// import Multiinputs from "./components/form/multiinput";

const App = () => {
    return (
        <div>
            <header>
            <Effect/>
            </header>
            <main>
                {/* <Multiinputs/> */}
                <Basicform/>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default App;

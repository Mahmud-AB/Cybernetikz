import React from 'react';
import Intern from "./components/Card";
import info from "./Internee.json"



  function App(){

    return (
      <div>
        <h1 className="headingstyle">INTERNEE INFORMATION</h1>
        {info.map((info) => {
          const { id, Name, Address, Number, Email } = info;
          return (
            <div key={id}>
              <Intern
                name={Name}
                address={Address}
                num={Number}
                email={Email}
              />
            </div>
          );
        })}
      </div>
    );

  }

  export default App
import Widgets from "./Widgets";
import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from "./Sidebar";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
       ) : (
         <>
            {/* Header */}
            <Header />

            <div className="app__body">

              {/* Side Body */}
              <Sidebar />

              {/* Feed */}
              <Feed />

              {/* Widgets */}
              <Widgets />

            </div>
          </>
       )}

      {/* App Body */}

    </div>
  );
}

export default App;

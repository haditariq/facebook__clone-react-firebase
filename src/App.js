import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./dataLayer/Provider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <div className="app__sidebarContainer">
              <Sidebar />
            </div>
            <div className={"app__feedContainer"} >
              <Feed />
            </div>
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

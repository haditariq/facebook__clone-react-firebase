import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./dataLayer/Provider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [showSide, setSideBar] = useState(false);

  const showSideBar = e => {
    setSideBar(e);
  };
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header showSidebar={e => showSideBar(e)} />
          <div className="app__body">
            {showSide && (
              <div className="app__sidebarContainer">
                <Sidebar />
              </div>
            )}
            <div className={"app__feedContainer"}>
              <Feed />
            </div>
            <div className={"app__widgets"}>
            <Widgets />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

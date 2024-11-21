import React, { useContext } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import ContextProvider, { UserContext } from "./store/reducer";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <ContextProvider>
      <MainContent />
    </ContextProvider>
  );
}

function MainContent() {
  const { state } = useContext(UserContext);

  return (
    <div className="container">
      <div className="leftside">
        <Sidebar />
      </div>
      <div className="rightside">
        <div className="header">
          <Header />
        </div>
        <hr />
        <center><h1>Share your beautiful memories</h1></center>
        <div className="maincontent">
          {state === "Home" ? <PostList /> : <CreatePost />}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'wouter'
import Home from 'Pages/Home/index';
import Context from 'Context/ThemeContext';
import LeftBar from 'Components/LeftBar/index';
import SearchResults from './Pages/SearchResults/index';


function App() {
  const { isDark } = useContext(Context)
  return (
    <div className={isDark ? 'App dark-mode' : 'App'}>
      <LeftBar />
      <section className="pageContent">
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
      </section>
    </div>
  );
}

export default App;

import './App.css';
import {Header, SearchBar} from './Components/Layout'
import React, { Component } from 'react';
import { ThemeToggleContext } from './Components/Context';
import {lightTheme,darkTheme} from './Components/Styles'
import { ThemeProvider } from 'styled-components';
import { Routes } from './Components/Routes';

class App extends Component {
  render() {
    return (
          <ThemeToggleContext.Consumer>
            {
              ({theme})=>{
                return(
                  <ThemeProvider theme={{current:theme}}>
                    <div className = "App"
                    style={(theme ==='light') ? 
                        {...lightTheme} :
                        {...darkTheme}}>
                      <Header />
                
                      <Routes theme={theme} />
                    </div>
                  </ThemeProvider>
                  
                )
              }
            }
          </ThemeToggleContext.Consumer>
    );
  }
}


export default App;

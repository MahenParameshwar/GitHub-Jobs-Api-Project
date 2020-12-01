import './App.css';
import {Header, SearchBar} from './Components/Layout'
import React, { Component } from 'react';
import { ThemeToggleContext } from './Components/Context';
import {lightTheme,darkTheme} from './Components/Styles'
import { Home } from './Components/Pages';
import { ThemeProvider } from 'styled-components';

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
                
                    <Home theme={theme}/>
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

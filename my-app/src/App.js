import './App.css';
import { Home } from './Components/Pages';
import React, { Component } from 'react';
import { ThemeContext } from './Components/Context';
import {lightTheme,darkTheme} from './Components/Styles'

class App extends Component {
  render() {
    return (
          <ThemeContext.Consumer>
            {
              ({theme})=>{
              
                return(
                  <div className = "App"
                  style={(theme ==='light') ? 
                        {...lightTheme} :
                        {...darkTheme}}>
                    <Home/>
                  </div>
                )
              }
            }
          </ThemeContext.Consumer>
    );
  }
}


export default App;

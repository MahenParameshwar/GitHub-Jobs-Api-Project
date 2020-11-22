import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme:"light"
        };
        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme(){
        const {theme} = this.state;
        const newTheme = (theme === 'light')?'dark':'light' 
        this.setState({
            theme:newTheme
        })
    }

    render() {
        const {theme} = this.state
        const {changeTheme} = this;
        const value =  {theme,changeTheme}
        console.log(value)
        return (
            <ThemeContext.Provider value={value}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
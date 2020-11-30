import React, { Component, createContext } from 'react';
export const ThemeToggleContext = createContext();

class ThemeToggleProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme:"dark"
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
            <ThemeToggleContext.Provider value={value}>
                {this.props.children}
            </ThemeToggleContext.Provider>
        );
    }
}

export default ThemeToggleProvider;
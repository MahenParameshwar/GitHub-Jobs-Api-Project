import React, { Component, createContext } from 'react';

export const JobContext = createContext();
class JobContextProvider extends Component {
    render() {
        const value = {}
        return (
            <JobContext.Provider value={value}>
                {this.props.children}
            </JobContext.Provider>
        );
    }
}

export default JobContextProvider;
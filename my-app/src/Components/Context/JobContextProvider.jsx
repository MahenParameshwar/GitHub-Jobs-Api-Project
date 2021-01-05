import React, { Component, createContext } from 'react';
import { getJobByParameters,getJobs } from '../../Services';

export const JobContext = createContext();

class JobContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs:[],
            isLoading:true,
            currentPage:1,
            isLoadingMore:false,
            error:false
        }

        this.handelLoadMore = this.handelLoadMore.bind(this)
        this.handelSearch = this.handelSearch.bind(this)
    }

    async componentDidMount(){
        const BASE_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1"
        await getJobs(BASE_URL).then(res=>this.setState({
            jobs:[...res],
            isLoading:false
        })).catch(err=>this.setState({
            isLoading:false,
            error:true
        }));
    }

    async  handelLoadMore(){
        const {currentPage,jobs} = this.state;
        this.setState({
            isLoadingMore:true
        })
        const page = currentPage + 1;
        const BASE_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}`
        await getJobs(BASE_URL).then(res=>this.setState({
            jobs:[...jobs,...res],
            currentPage:page,
            isLoadingMore:false
        })).catch(err=>this.setState({
            isLoadingMore:false,
            error:true
        }));
        
    }

    async handelSearch(parameters){
        this.setState({
            isLoading:true
        });
        await getJobByParameters({...parameters})
        .then(res=>this.setState({
            jobs:[...res],
            isLoading:false
        }))
        .catch(err=>({
            isLoading:false,
            error:true
        }))
        
    }
    
    render() {
        const value = {...this.state,...this}
        return (
            <JobContext.Provider value={value}>
                {this.props.children}
            </JobContext.Provider>
        );
    }
}

export default JobContextProvider;
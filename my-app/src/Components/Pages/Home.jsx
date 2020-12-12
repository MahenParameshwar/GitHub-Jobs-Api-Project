import React, { Component } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {box_color,grey_dark,light_color,blue} from '../Styles'
import { getJobs } from '../../Services/getJobs';
import { timeDifference } from '../Helpers/timeDifference';
import { SearchBar, Spinner, SpinnerMore } from '../Layout';


const HomeWrapper = styled.div`
    padding:0 9vw;
    width:100%;
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;

   

    .load_more_btn{
        margin:100px 100px;
        background-color:${blue};
        outline:none;
        border:1px solid ${blue};
        border-radius:5px;
        height:40px;
        padding:0 15px;
        color:${light_color};
        cursor:pointer;
        transition:all 0.2s ease
    }

    .load_more_btn:hover{
        background-color:transparent;
        color:${blue};
    }
`
const JobsBoard = styled.div`
    margin-top:120px;
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    grid-auto-rows:225px;
    gap:40px;
`
const JobThumbnail = styled.div`
    padding:0 20px 20px 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:100%;
    border-radius:5px;
    background-color:${({theme})=>{
        return (theme.current === 'light') ? light_color : box_color;
    }};

    > p {
        font-size:14px;
        color:${grey_dark}
    }

    > small{
        position: absolute;
        bottom: 20px;
        color:${blue};
        font-weight:600
    }
`

const LoadingMoreSpinner = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    height:250px;

`

const JobImgContainer = styled.div`
    background-color:${({theme})=>{
        return (theme.current === 'light') ? light_color : box_color;
    }};
    position: absolute;
    width: 68px;
    height: 68px;
    display:flex;
    align-items:center;
    top:-30px;
    border-radius:5px;
    border:1px solid ${({theme})=>{
        return (theme.current === 'light') ? "none" : "black";
    }};

    > img{
        width:100%;
    }

`


class Home extends Component {

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

    render() {
        const {jobs,isLoading,isLoadingMore,error} = this.state;
        
        
        return (
            <HomeWrapper>
                <SearchBar {...this.props} />
                {
                    isLoading ? <Spinner /> : error ? <h2>Oops Something went wrong</h2> :
                    <JobsBoard style={{position:"relative"}}>
                    {
                        jobs?.map(job=>{
                            return (
                                <NavLink className="job_links" 
                                style={{position:'relative'}} 
                                to={`/${job.id}`}
                                key={job.id}>
                                    <JobThumbnail>
                                        <JobImgContainer className="job_image_container">
                                            <img src={job.company_logo} alt=""/>
                                        </JobImgContainer>
                                        <p>{timeDifference(Date.now(),Date.parse(job.created_at))} . {job.type}</p>
                                        <h3 className="job_title" style={{margin:"15px 0px"}}>{job.title}</h3>
                                        <p>{job.company}</p>
                                        <small className="job_location">{job.location}</small>
                                    </JobThumbnail>
                                </NavLink>
                            ) 
                        })
                    }
                    {isLoadingMore ?  
                    <LoadingMoreSpinner>
                                        <SpinnerMore />
                    </LoadingMoreSpinner>
                                        : <></>
                                    
                    } 
                </JobsBoard>
                }
                
                {
                    isLoading ? <></> :  <button className="load_more_btn" disabled={isLoadingMore} onClick={this.handelLoadMore}>Load More</button>
                }
            </HomeWrapper>
        );
    }
}

export default Home;
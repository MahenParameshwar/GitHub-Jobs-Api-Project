import React, { Component } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {box_color,grey_dark,light_color,blue} from '../Styles'
import { getJobs } from '../../Services/getJobs';
import { timeDifference } from '../Helpers/timeDifference';
import { SearchBar, Spinner } from '../Layout';


const HomeWrapper = styled.div`
    padding:0 9vw;
    width:100%;
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
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
            isLoading:true
        }
    }
    
    async componentDidMount(){
        const BASE_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
        const jobs = await getJobs(BASE_URL);
        this.setState({
            jobs:jobs,
            isLoading:false
        })
    }

    render() {
        const {jobs,isLoading} = this.state;
        
        
        return (
            <HomeWrapper>
                <SearchBar {...this.props} />
                {
                    isLoading ? <Spinner /> :
                    <JobsBoard>
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
                    
                </JobsBoard>
                }
                
                
            </HomeWrapper>
        );
    }
}

export default Home;
import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

import {JobContext} from '../Context/JobContextProvider'
import { timeDifference } from '../Helpers/timeDifference';
import { SearchBar, Spinner, SpinnerMore } from '../Layout';
import {HomeWrapper,JobsBoard,JobThumbnail,LoadingMoreSpinner,JobImgContainer} from '../Styles/home'




class Home extends Component {


    render() {
        const {jobs,isLoading,isLoadingMore,error,handelLoadMore} = this.context;
        
        return (
            <HomeWrapper>
                <SearchBar {...this.props} />
                {
                    isLoading ? <Spinner /> : error ? <h2>Oops Something went wrong</h2> :
                    
                    !jobs.length ? <h2>No results Found</h2> : 
                    
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
                    !error ? isLoading ? <></> :   <button className="load_more_btn" disabled={isLoadingMore} onClick={handelLoadMore}>Load More</button> : <></>
                }
            </HomeWrapper>
        );
    }
}

Home.contextType = JobContext
export default Home;
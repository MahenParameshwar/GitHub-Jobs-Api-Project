import React, { Component } from 'react';
import { getJobById } from '../../Services';
import { Spinner } from '../Layout';
import {JobHeader,JobBody,ApplyLink} from '../Styles/viewjob'

import { timeDifference } from '../Helpers/timeDifference';



class ViewJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            data:null
        }
    }

    getApplyLink = (pTag)=>{
        const div = document.createElement('div');

        div.innerHTML = pTag;
        console.log(div)
        

        console.log(div)
    }
    
    async componentDidMount(){
        const {jobid} = this.props.match.params
        const data = await getJobById(jobid);
        console.log(data)
        this.setState({
            isLoading:false,
            data:data
        })

    

    }
    render() {
        const {isLoading,data} = this.state
        // const aTag = data ? this.getApplyLink(data.how_to_apply) : null
        return (
            <div>
                {
                    isLoading ? <Spinner/> :
                    <div className="job_description_container">
                        <JobHeader>
                            <div className="img_header_container">
                                <img src={data.company_logo} alt=""/>
                            </div>
                            <div className = "header_text_container">
                                <div>
                                    <h1>{data.company}</h1>
                                    <h4 className="grey">{data.company_url}</h4>    
                                </div>
                                <div className="company_link">
                                    {
                                        data.company_url ? 

                                            <a className="btn" href={data.company_url} >Company Site</a>
                                        :
                                            <>
                                                <a className="btn invalid" href>Company Site</a>
                                                <div className="no_link_to_site">No company site</div>
                                            </>
                                            
                                        
                                    }
                                </div>
                            </div>
                        </JobHeader>
                        <JobBody>
                            <div >
                                <div className="grey">
                                    {timeDifference(Date.now(),Date.parse(data.created_at))} . {data.type}</div>
                                <div className="displayFlex">
                                    <div >
                                        <h2>{data.company}</h2>
                                        <div className="location">{data.location}</div>
                                    </div>
                                    <button className="apply_btn">Apply Now</button>
                                </div>
                            </div>
                            <div className="job_description grey" dangerouslySetInnerHTML={{__html: data.description}} >

                            </div>
                        </JobBody>
                        <ApplyLink >
                            <h3>How To Apply</h3>
                            <div dangerouslySetInnerHTML={{__html: data.how_to_apply}}></div>
                        </ApplyLink>
                    </div>
                }
            </div>
        );
    }
}

export default ViewJob;
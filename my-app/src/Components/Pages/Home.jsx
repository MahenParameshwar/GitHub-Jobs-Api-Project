import React, { Component } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {box_color,grey_dark,light_color,blue} from '../Styles'

const HomeWrapper = styled.div`
    padding:0 9vw;
    width:100%;
`
const JobsBoard = styled.div`
    margin-top:120px;
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    grid-auto-rows:225px;
    gap:20px;
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
        bottom: 15px;
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
    render() {
        return (
            <HomeWrapper>
                <JobsBoard>
                    <NavLink className="job_links" style={{position:'relative'}} to="/">
                        <JobThumbnail>
                            <JobImgContainer className="job_image_container">
                                <img src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGVSIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bd91e06876e1bd9bdec148e7b30770887b70cf84/280.png" alt=""/>
                            </JobImgContainer>
                            <p>39 minutes ago . Full Time</p>
                            <h3 style={{margin:"15px 0px"}}>IOS Developer(f/m/d)</h3>
                            <p>DoctorBox Gmbh</p>
                            <small className="job_location">Belin</small>
                        </JobThumbnail>
                    </NavLink>
                </JobsBoard>
            </HomeWrapper>
        );
    }
}

export default Home;
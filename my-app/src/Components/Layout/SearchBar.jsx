import React, { Component } from 'react';
import styled from 'styled-components'
import {JobContext} from '../Context'
import {blue, dark_color,light_color} from '../Styles'
import SearchModal from './SearchModal';

const FormWrapper = styled.div`
    position:absolute;
    width:100%;
    padding:0 9vw;
    top: -25px;

    @media(max-width:600px){
        top: -50px;
    }
`
const Form = styled.form`
    width:100%;
    display:flex;
    border-radius:8px;
    position:relative;

    background-color:${({theme})=>{
            return (theme.current === 'light') ? light_color : dark_color;
        }};

    @media(max-width:600px){
            .location_container{
                display:none
            }

            div.checkbox_search_container{
                display:none;
            }

            div.modal_container{
                position:absolute;
                display:flex;
                width:60px;
                justify-content:space-between;
                align-items:center;
                right:15px;
            }

            
        }

    > div{
        height:56px;
        position:relative;
        flex:1
    }

    .modal_container{
        display:none;
        
        button{
            background-color:transparent;
            outline:none;
            border:none;
        }

        .mob_submit_btn{
            background-color:${blue};
            height:50%;
            width:30px;
            border-radius:5px;
        }

        .mob_submit_btn > img{
            height: 50%
        }

        
    }

    > div > span {
        position:absolute;
        top:18px;
        left:20px
    }

    .location{
        top:14px
    }
    >div > span > img{
        width:16px
    }

    & input{
        outline:none;
        border:none;
    }

    > div > input {
        width:100%;
        height:inherit;
        outline:none;
        background-color:transparent;
        padding-left:44px;
        border-right:1px solid ${({theme})=>{
            return (theme.current === 'light') ? dark_color : light_color
        }} ; 

        color:${({theme})=>{
                    return (theme.current === 'light') ?  dark_color : light_color ;
                }};

        @media(max-width:600px){
            border-right:none
        }
                
    }

    .checkbox_search_container{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0px 15px
    }

    .checkbox_search_container .checkbox{
        display:flex;
        align-items:center;
    }

    .submit_btn{
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

    .submit_btn:hover{
        background-color:transparent;
        color:${blue};
    }

    label{
        display:flex;
        align-items:center
    }

    label > span{
        font-size:12px;
        margin-left:10px;
        margin-top:5px;
    }

    input[type="checkbox"]{
        background: #3d404e;
    }

`
class SerachBar extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    openModal= (e)=>{
        e.preventDefault();
        console.log('called')
    }

    render() {
        const {theme} = this.props;
        
        return (
            <FormWrapper>
                <Form>
                <div>
                    <span>
                        <img src="/images/desktop/icon-search.svg" alt=""/>
                    </span>
                    <input type="text" placeholder="Filter by title,expertise... "/>
                </div>
                <div className="location_container">
                    <span className="location">
                        <img src="/images/desktop/icon-location.svg" alt=""/>
                    </span>
                        <input type="text" placeholder="Filter by location..."/>
                </div>
                <div className="checkbox_search_container">
                        <div className="checkbox">
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <span>Full Time</span>
                            </label>
                        </div>
                        <button className="submit_btn" type="submit">Search</button>
                </div>
                <div className="modal_container">
                    <SearchModal theme={theme}/>
                    <button className="mob_submit_btn" type="submit">
                        <img src="/images/desktop/icon-search-white.svg" alt=""/>
                    </button>
                </div>
                
            </Form>

            </FormWrapper>
            );
    }
}

SerachBar.contextType = JobContext;

export default SerachBar;
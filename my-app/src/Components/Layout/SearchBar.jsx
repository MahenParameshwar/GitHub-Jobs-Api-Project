import React, { Component } from 'react';
import styled from 'styled-components'
import {JobContext} from '../Context'
import {blue, dark_color,light_color} from '../Styles'

const FormWrapper = styled.div`
    position:absolute;
    width:100%;
    padding:0 9vw;
    bottom: -25px;
`
const Form = styled.form`
    width:100%;
    display:flex;
    border-radius:8px;

    background-color:${({theme})=>{
            return (theme.current === 'light') ? light_color : dark_color;
        }};

    > div{
        flex:1;
        height:56px;
        position:relative
    };

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
                
    }

    .checkbox-search-container{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0px 15px
    }

    .checkbox-search-container .checkbox{
        display:flex;
        align-items:center;
    }

    button{
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

    button:hover{
        background-color:transparent;
        color:${blue};
    }

    label{
        display:flex;
        align-items:center
    }

    label > span{
        font-size:14px;
        margin-left:10px;
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

    render() {
        return (
            <FormWrapper>
                <Form>
                <div>
                    <span>
                        <img src="/images/desktop/icon-search.svg" alt=""/>
                    </span>
                    <input type="text" placeholder="Filter by title,expertise... "/>
                </div>
                <div>
                    <span className="location">
                        <img src="/images/desktop/icon-location.svg" alt=""/>
                    </span>
                        <input type="text" placeholder="Filter by location..."/>
                </div>
                <div className="checkbox-search-container">
                        <div className="checkbox">
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <span>Full Time Only</span>
                            </label>
                        </div>
                        <button type="submit">Search</button>
                </div>
            </Form>

            </FormWrapper>
            );
    }
}

SerachBar.contextType = JobContext;

export default SerachBar;
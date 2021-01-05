import React, { Component } from 'react';
import {JobContext} from '../Context'
import {FormWrapper,Form} from '../Styles/searchBar'
import SearchModal from './SearchModal';


class SerachBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description:"",
            location:"",
            full_time:false
        }
    }

    handelSubmit = (e)=>{
        e.preventDefault();
        const {handelSearch} = this.context;

        handelSearch({...this.state})
    }

    handelChange = (e)=>{
        const {name} = e.target        
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        
        this.setState({
            [name] : value
        })
    }
    

    openModal= (e)=>{
        e.preventDefault();
    }

    render() {
        const {theme} = this.props;
        const {description,location,full_time} = this.state;
        const {handelSearch} = this.context;
        return (
            <FormWrapper>
                <Form onSubmit={this.handelSubmit} id="searchForm">
                <div>
                    <span>
                        <img src="/images/desktop/icon-search.svg" alt=""/>
                    </span>
                    <input value={description} name="description"  type="text" placeholder="Filter by title,expertise... " onChange={this.handelChange}/>
                </div>
                <div className="location_container">
                    <span className="location">
                        <img src="/images/desktop/icon-location.svg" alt=""/>
                    </span>
                        <input value={location} name="location"  type="text" placeholder="Filter by location..." onChange={this.handelChange}/>
                </div>
                <div className="checkbox_search_container">
                        <div className="checkbox">
                            <label htmlFor="">
                                <input type="checkbox" name="full_time" onChange={this.handelChange} checked={full_time}/>
                                <span>Full Time</span>
                            </label>
                        </div>
                        <button className="submit_btn" type="submit">Search</button>
                </div>
                <div className="modal_container">
                    <SearchModal theme={theme}
                    description = {description} 
                    location={location} 
                    full_time={full_time} 
                    handelChange={this.handelChange}
                    handelSearch={handelSearch}
                    />
                    <button className="mob_submit_btn" type="submit">
                        <img src="/images/desktop/icon-search-white.svg" alt=""/>
                    </button>
                </div>
                
            </Form>

            </FormWrapper>
            );
    }
}

SerachBar.contextType = JobContext

export default SerachBar;
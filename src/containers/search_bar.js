import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { fetchWeather } from '../actions/index';

 class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = { term: '' };


    // basically overwriting onInputChange...context of this
    this.onInputChange = this.onInputChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){

    this.setState({ term: event.target.value });
  }

//earlier in react youtube event handler was inside a fat arrow function...thus need to bind

  onFormSubmit(event){
   
   
    event.preventDefault();

    //we need tto go and fetch weather data
    //because we mapped dispatch to props...available as props.fetchWeather()

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });


  }

  render(){
    return(
      <form onSubmit = {this.onFormSubmit} className = "input-group">
        <input placeholder = "get a 5 day forecast"
              className = "form-control"
              value = {this.state.term}
              onChange = {this.onInputChange}
            />
        <span className = "input-group-btn">
          <button type = "submit" className = "btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}



//hook up action creator fetchWeatger to our searchabar container
function mapDispatchToProps(dispatch){
 
  //this causes AC whenever it gets called and returns an action with dispatch, makes sure flows to middleware and reducers
  return bindActionCreators({ fetchWeather }, dispatch);
}


//earlier mapstate to props but here null..difference whenever we pass function dptoprps always goes as second arg
export default connect (null, mapDispatchToProps) (SearchBar);

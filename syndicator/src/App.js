import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import postToDynamo from './AWSConfig.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      category:"",
      image:"",
      eventName:"",
      price:"",
      date:"",
      startTime:"",
      endTime:"",
      location:"",
      details:"",
      merchantInfo:""
    };

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeEventName = this.handleChangeEventName.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeDetails = this.handleChangeDetails.bind(this);
    this.handleChangeMerchantInfo = this.handleChangeMerchantInfo.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeCategory(event){
    this.setState({category: event.target.value});
  }
  handleChangeImage(event){
    this.setState({image: event.target.value});
  }
  handleChangeEventName(event){
    this.setState({eventName: event.target.value});
  }
  handleChangePrice(event){
    this.setState({price: event.target.value});
  }
  handleChangeDate(event){
    this.setState({date: event.target.value});
  }
  handleChangeStartTime(event){
    this.setState({startTime: event.target.value});
  }
  handleChangeEndTime(event){
    this.setState({endTime: event.target.value});
  }
  handleChangeLocation(event){
    this.setState({location: event.target.value});
  }
  handleChangeDetails(event){
    this.setState({details: event.target.value});
  }
  handleChangeMerchantInfo(event){
    this.setState({merchantInfo: event.target.value});
  }

  handleSubmit(event){
    console.log(this.state);
    postToDynamo(this.state);
  }
  render() {
    return (
      <div className="App">
          <input placeholder="category" className="category" type="text" value={this.state.category} onChange={this.handleChangeCategory}></input>
          <input placeholder="image" className="image" type="text"
            value={this.state.image} onChange={this.handleChangeImage}></input>
          <input placeholder="event name" className="eventName" type="text" value={this.state.eventName} onChange={this.handleChangeEventName}></input>
          <input placeholder="price" className="price" type="text" value={this.state.price} onChange={this.handleChangePrice}></input>
          <input placeholder="date" className="date" type="text" value={this.state.date} onChange={this.handleChangeDate}></input>
          <input placeholder="start time" className="startTime" type="text" value={this.state.startTime} onChange={this.handleChangeStartTime}></input>
          <input placeholder="end time" className="endTime" type="text" value={this.state.endTime} onChange={this.handleChangeEndTime}></input>
          <input placeholder="location" className="location" type="text" value={this.state.location} onChange={this.handleChangeLocation}></input>
          <input placeholder="details" className="details" type="text" value={this.state.details} onChange={this.handleChangeDetails}></input>
          <input placeholder="merchant info" className="merchantInfo" type="text" value={this.state.merchantInfo} onChange={this.handleChangeMerchantInfo}></input>

          <input type="button" value="Hello" onClick={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;

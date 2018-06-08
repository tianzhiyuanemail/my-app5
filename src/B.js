import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class B extends Component {

  constructor(props){
    super(props);
    console.info(this.props.fromDashboard)
  }

    render() {
        return (
            <div >
                这是个b页面{this.props.fromDashboard}
            </div>
        );
    }
}

export default B;
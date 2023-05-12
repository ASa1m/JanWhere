import React, { Component } from "react";
import Card from "../components/layout/DiscoverCard"
import axios from 'axios';

export default class Dicover extends Component {

    constructor(props) {
        super(props)
        this.state = {
            animals: []
        };
    }

    componentDidMount() {
        axios.get('/api/animals/list')
            .then(res => {
                this.setState({
                    animals: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    fetchData() {
        return this.state.animals.map((res, i) => {
            return <Card obj={res} key={i} />; 
        });
    }

  render() {
    return (<div className="content" style={{ fontFamily: "monospace" }}>
      <h3 className="center text-white">Discover the world of animals</h3>
       <div className="d-flex flex-wrap justify-content-center">
        {this.fetchData()}
        </div>
    </div>);
  }
}



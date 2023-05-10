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
            return <Card direction= {i % 2 === 0 ? 'left' : 'right'} feature={res.category} title={res.name} description={res.description} image={res.image} />
        });
    }

  render() {
    return (<div className="content" style={{ fontFamily: "monospace" }}>
      <h3>Discover the world of animals</h3>
       <div>
        {this.fetchData()}
        </div>
    </div>);
  }
}
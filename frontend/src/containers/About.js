import React, { Component } from "react";
import Card from "../components/layout/AboutCard"
import axios from 'axios';

export default class Dicover extends Component {

  constructor(props) {
    super(props)
    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/developers/list`)
      .then(res => {
        this.setState({
          developers: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  fetchData() {
    return this.state.developers.map((res, i) => {
      return <Card name={res.name} role={res.role} image={`${process.env.REACT_APP_API_URL}/static/`+res.image}/>
    });
  }

  render() {
    return (<div className="content" style={{ fontFamily: "monospace" }}>
      <div class="container py-5 my-5">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <section class="p-md-3 mx-md-5 text-center text-lg-left">
          <h2 class="text-center mx-auto font-weight-bold mb-5 pb-2 text-white">Our Team</h2>
          <div class="row">
            {this.fetchData()}
          </div>
        </section>
      </div>
    </div>);
  }
}
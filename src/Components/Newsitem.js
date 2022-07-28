import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, url } = this.props;
    return (
      <div>
        <div className="card" >
          <img src={!imageurl?"http://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a  rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;

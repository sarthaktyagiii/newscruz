import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";

export class News extends Component {
  articles = [];
  element = [];
  static defaultProps = {
    
    country: "in",
    pagesize: 21,
    category: "general",
  };
  static propTypes = {
    country:  PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
    
  };

  constructor(props) {
    
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb6d570b7f6b4165adc070224650ed89&page=1&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading:false,
    });
  }
  handleNextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${this.props.apikey}&page=${
      this.state.page + 1
    }&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      page: this.state.page + 1,
      articles: parseddata.articles,
    });
  };
  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${this.props.apikey}&page=${
      this.state.page - 1
    }&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      page: this.state.page - 1,
      articles: parseddata.articles,
    });
  };
  capitalizefirstletter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    return (
      <div className="container my-4">
        <h2 className="my-4 text-center">NewsCruz Top {this.capitalizefirstletter(this.props.category)} Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4  my-3" key={element.url}>
                <Newsitem
                  title={element.title?element.title:""}
                  description={element.description?element.description:""}
                  imageurl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevclick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

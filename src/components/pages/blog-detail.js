import React, { Component } from 'react';
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import BlogFeaturedImage from "../blog/blog-featured-image";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      BlogItem: {}
    };
  }

  getBlogItem() {
    axios.get(`https://elizabethpearce.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
    ).then(response => {
      this.setState({
        BlogItem: response.data.portfolio_blog
      });
    }).catch(error => {
      console.timeLog("getBLogItem error", error);
    })
  }

  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    const {
      title,
      content,
      featured_image_url,
      blog_status
    } = this.state.BlogItem
    console.log("currentID", this.state.currentId);
    return (
      <div className='blog-container'>
        <div className='content-container'>
          <h1>{title}</h1>

          <BlogFeaturedImage img={featured_image_url} />

          <div className='content'>{ReactHtmlParser(content)}</div>
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import axios from "axios";
import BlogItem from '../blog/blog-item';

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

          <div className='featured-image-wrapper'>
            <img src={featured_image_url} />
          </div>

          <div className='content'>{content}</div>
        </div>
      </div>
    );
  }
}
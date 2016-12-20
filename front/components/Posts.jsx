import React from 'react';
import $ from 'jquery';

const Posts = React.createClass({
  getInitialState: function(){
    return ({allPosts:[]})
  },
  componentDidMount(){
    $.ajax({
      url: '/api/post',
      type: 'GET',
      success:((data)=>{
        console.log(data, 'this is the post')
        data ? this.setState({allPosts:data}) : console.log('Error with post object')
      })
    })
  },
  render: function(){
    let PostDisplay = this.state.allPosts.map((value,index)=>{
      return <li key={index}><h1>{value.body}</h1></li>
    })
    return (
      <div>
      <center>
        <h1> Post Page </h1>
        {PostDisplay}
        </center>
      </div>
    )
  }
})

export default Posts;

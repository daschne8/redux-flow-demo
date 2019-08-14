import {connect} from 'react-redux'
import {fetchComments} from '../actions/asyncAction'
import React,{Component} from 'react';

class AsyncClick extends Component{
  state={
    query: ''
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.fetchComments(this.state.query)
    this.setState({
      query: ''
    })
  }

  handleOnChange = event => {
    this.setState({
      query: event.target.value
    })
  }


  render(){
    const commentList = this.props.comments.map((comment,idx) => <div key={idx}><p>{comment}</p><br></br></div>)
    return(
      <div>
      <form onSubmit={event => this.handleOnSubmit(event)} >
        <input type='text' value={this.state.query} onChange={ event => this.handleOnChange(event)} />
        <input type='submit' value='search' />
      </form>
      {commentList}
      {this.props.loading ? <p>loading please wait . . .</p> : null}
      </div>
    )
  }
}


const mapStateToProps = ({async}) => ({
  comments: async.comments,
  loading: async.loading
})

const mapDispatchToProps = dispatch => ({
  fetchComments: (query) => dispatch(fetchComments(query))
})

export default connect(mapStateToProps,mapDispatchToProps)(AsyncClick)

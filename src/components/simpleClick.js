import {connect} from 'react-redux'
import {simpleAction} from '../actions/simpleAction'
import React,{Component} from 'react';

class SimpleClick extends Component{

  handleOnClick = (event) => {
    this.props.simpleAction(parseInt(event.target.value))
  }


  render(){
    return(
      <div>
      <p>Simple Count: {this.props.simpleCount}</p>
      <button value='1' onClick={(event) => this.handleOnClick(event)} >1</button>
      <button value='5' onClick={(event) => this.handleOnClick(event)} >5</button>
      <button value='10' onClick={(event) => this.handleOnClick(event)} >10</button>
      </div>
    )
  }
}


const mapStateToProps = ({simple}) => ({
  simpleCount: simple.count
})

const mapDispatchToProps = dispatch => ({
  simpleAction: (amount) => dispatch(simpleAction(amount))
})

export default connect(mapStateToProps,mapDispatchToProps)(SimpleClick)

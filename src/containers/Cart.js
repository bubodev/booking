import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as cartActions from '../actions/cartActions'
import Shelf from '../components/Shelf'

class Cart extends Component {
	constructor(props){
		super(props)
		console.log(this.props)
	}
  render() {
		const CartItems = this.props.cart.map((item, idx)=>{
			return <li key={idx}>{item}</li>
		})
    return (
      <div className="Cart">
				<Shelf addItem={this.props.action.addToCart}/>
				<h2>Cart Items</h2>
				{CartItems}
      </div>
    );
  }
}

function mapStateToProps(state, props){
	return {
		cart: state.cart
	}
}

function mapDispatchToProps(dispatch){
	return {
		action: bindActionCreators(cartActions, dispatch) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

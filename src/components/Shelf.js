import React, { Component } from 'react';

class Shelf extends Component {
	constructor(props){
		super(props)
		this.state = {
			shelfItems:[
				'shampoo',
				'chocolate',
				'yogurt'
			]	
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick = (item) => {
		this.props.addItem(item)
	}
  render() {
		const shelfItems = this.state.shelfItems.map((item,idx) =>{
			return <li key={idx}><button onClick={()=>this.handleClick(item)}>[+]</button> {item}</li>
		})
    return (
      <div className="Shelf">
        <h2>Shelf</h2>
				<ul>
					{shelfItems}
				</ul>
      </div>
    );
  }
}

export default Shelf;

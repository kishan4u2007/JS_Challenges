import React, { Component } from 'react';

import './style.css'


class SelectBox extends Component {
    state = {
        items:  this.props.items || [],
        showItem: false,
        selectedItem :  this.props.items && this.props.items[0]
    }

    dropDown = () => {
        this.setState(preState => ({
            showItem : !preState.showItem
        }))    
    }

    selectItem = (item) => {
        this.setState({
            selectedItem: item,
            showItem:false
        })
    }

  render() {
  return (
    <div className="select-box-box">
        <div className="select-box--container">
            <div className="select-box-selected-item">{this.state.selectedItem.value}</div>
            <div className="select-box--arrow" onClick={this.dropDown}>
                <span className={`${this.state.showItem ? 'selct-box--arrow-up' : 'selct-box--arrow-down'}`}></span>
            </div>
            <div className="select-box--items" style={{ display: this.state.showItem ? 'block' : 'none' }}>
            {
                this.state.items.map(item => <div key={item.id} onClick={() => this.selectItem(item)} className= {this.state.selectedItem === item ? 'selected' : ''}>
                { item.value}
                </div>) 
            }
            </div>
        </div>
        
    </div>
  );
 } 
}

export default SelectBox;

import React, {Component} from 'react'
import propTypes from 'prop-types'

export default class TouchBtn extends Component {
	static propTypes = {
		clickCallBack: propTypes.func,
		text: propTypes.string,
		className: propTypes.string
	}

	handleTouchStart = () => {
		this.refs.btn.style.opacity = '0.3';
	}

	handleTouchEnd = () => {
		this.refs.btn.style.opacity = '1';
		this.props.clickCallBack();
	}

	render() {
		return (
			<div className={`btn-con ${this.props.className}`} onTouchStart={this.handleTouchStart}
			     onTouchEnd={this.handleTouchEnd} ref="btn">{this.props.text || '确认'}</div>
		)
	}
}
import React, {Component} from 'react'
import {is, fromJs} from 'immutable'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'; // react检测属性类型模块
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import './header.scss'

export default class PublicHeader extends Component {
	/*constructor(props) {
		super(props);

		this.state  ={
			navState: false // 导航条是否显示
		}
	}*/

	static propTypes = {
		recode: PropTypes.any,
		title: PropTypes.string.isRequired,
		confirm: PropTypes.any
	}

	state = {
		navState: false
	}

	// 切换左侧导航栏状态
	toggleNav = () => {
		this.setState({navState: !this.state.navState});
	}

	// css动画组件设置目标组件
	FirstChild = props => {
		const childrenArray =  React.Children.toArray(props.children)
		return childrenArray[0] || null;
	}

	render() {
		return (
			<header className="header-container">
				<span className="header-slide-icon icon-catalog" onClick={this.toggleNav}></span>
				<span className="header-title">{this.props.title}</span>
				{
					this.props.record && <NavLink to="/record" exact className="header-link icon-jilu"></NavLink>
				}
				{
					this.props.confirm && <NavLink to="/" exact className="header-link header-link-confirm">确定</NavLink>
				}
				<ReactCssTransitionGroup
					component={this.FirstChild}
					transitionName="nav"
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}>
					{
						this.state.navState && <aside key="nav-slide" className="nav-slide-list" onClick={this.toggleNav}>
							<NavLink to="/" exact className="nav-link icon-jiantou-copy-copy">首页</NavLink>
							<NavLink to="/balance" className="nav-link icon-jiantou-copy-copy">提现</NavLink>
							<NavLink to="/helpcenter" className="nav-link icon-jiantou-copy-copy">帮助中心</NavLink>
						</aside>
					}
				</ReactCssTransitionGroup>
			</header>
		)
	}
}
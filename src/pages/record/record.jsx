import React, {Component} from 'react'
import {is, fromJS} from 'immutable'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'
import PublicHeader from '@/components/header/header.jsx'
import RecordList from "./components/recordList.jsx";
import './record.scss'

export default class Record extends Component {
	state = {
		flagBarPos: ''
	}

	/**
	 * 设置导航条底部定位标签位置
	 * @param {string} type 数据类型
	 */
	setFlagBarPos = type => {
		let flagBarPos;

		switch (type) {
			case 'passed':
				flagBarPos = '17%';
				break;
			case  'audited':
				flagBarPos = '50%';
				break;
			case 'failed':
				flagBarPos = '83%';
				break;
			default:
				flagBarPos = '17%';
		}
		this.setState({flagBarPos});
	}

	componentWillMount() {
		// 初始化导航条底部标签位置
		let type = this.props.location.pathname.split('/')[2];
		this.setFlagBarPos(type);
	}

	componentWillReceiveProps(nextProps) {
		// prop变化时设置导航条底部标签位置
		let currentType = this.props.location.pathname.split('/')[2],
			type = nextProps.location.pathname.split('/')[2];

		currentType !== type && this.setFlagBarPos(type);
	}

	/*shouldComponentUpdate(nextProps,nextState){
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
	}*/


	render() {
		let path = this.props.match.path;

		return (
			<main className="common-con-top">
				<PublicHeader title="记录"/>
				<section className="record-nav-con">
					<nav className="record-nav">
						<NavLink to={`${path}/passed`} className="nav-link">已通过</NavLink>
						<NavLink to={`${path}/audited`} className="nav-link">待审核</NavLink>
						<NavLink to={`${path}/failed`} className="nav-link">未通过</NavLink>
					</nav>
					<i className="nav-flag-bar" style={{left: this.state.flagBarPos}}></i>
				</section>
				<Switch>
					<Route path={`${path}/:type`} component={RecordList}></Route>
					<Redirect from={`${path}`} to={`${path}/passed`} exact component={RecordList} />
				</Switch>
			</main>
		)
	}
}
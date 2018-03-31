import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import home from "@/pages/home/home.jsx";
import asyncComponent from '@/utils/asyncComponent.jsx';
import record from "@/pages/record/record.jsx";
//const record = asyncComponent(() => import("@/pages/record/record"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={home}/>
					<Route path="/record" component={record}/>
					<Route path="/helpcenter"/>
					<Route path="/production"/>
					<Route path="/balance"/>
					<Redirect to="/"/>
				</Switch>
			</Router>
		)
	}
}

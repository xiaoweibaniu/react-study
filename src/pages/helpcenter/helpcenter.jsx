import React,{Component} from 'react'
import PublicHeader from '@/components/header/header.jsx'
import './helpcenter.scss'

export default class HelpCenter extends Component{
	render(){
		return(
			<main>
				<PublicHeader title="帮助中心" record/>
				<article className="context-con">
					<h2>介绍</h2>
					<p>本项目仿照<a href="https://github.com/bailicangdu/react-pxq">bailicangdu</a>项目实现，主要用于react的学习和理解。功能尚未完整，请继续关注吧。</p>
				</article>
			</main>
		)
	}
}
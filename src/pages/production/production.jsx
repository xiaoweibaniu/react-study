import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PublicHeader from '@/components/header/header.jsx'
import './production.scss'

export default class Production extends Component {
	render() {
		return (
			<main className="common-con-top">
				<PublicHeader title="首页" confirm/>
				<section className="pro-list-con">
					<ul className="pro-list-ul">
						{
							// TODO: 待状态管理整理后继续开发
						}
					</ul>
				</section>
			</main>
		)
	}
}
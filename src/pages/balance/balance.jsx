import React, {Component} from 'react'
import PublicHeader from '@/components/header/header.jsx'
import TouchBtn from '@/components/touchBtn/touchBtn.jsx'
import API from '@/api/api'
import './balance.scss'

export default class Balance extends Component {
	state = {
		balance: 0, // 当前可提现金额
		applyNum: '', // 输入值
		alertStatus: false, // 弹框状态
		alertTip: '', // 弹框提示文字
	}

	// 初始化可提现金额
	initData = async () => {
		try {
			let result = await API.getBalance();
			this.setState({balance: result.balance});
		} catch (err) {
			console.log(err);
		}
	}

	/**
	 * 格式化输入数据
	 * 格式为微信红包格式：最大200.00
	 * @param {object} event
	 */
	handleInput = event => {
		let value = event.target.value;
		if ((/^\d*?\.?\d{0,2}?$/gi).test(value)) {
			if ((/^0+[1-9]+/).test(value)) {
				value = value.replace(/^0+/, '');
			}

			if ((/^0{2}\./).test(value)) {
				value = value.replace(/^0+/, '0');
			}

			value = value.replace(/^\./gi, '0.');

			if (parseFloat(value)) {
				value = '200.00';
			}

			this.setState({applyNum: value});
		}
	}

	/**
	 * 提现验证
	 */
	submitForm=()=>{
		let alertTip;

		if(!this.state.applyNum){
			alertTip = '请输入提现金额';
		}else if(parseFloat(this.state.applyNum) > this.state.balance){
			alertTip = '申请提现金额不能大于余额';
		}else{
			alertTip = '申请提现成功';
		}

		this.setState({
			alertStatus: true,
			alertTip
		})
	}

	componentDidMount() {
		this.initData();
	}

	render() {
		return (
			<main className="home-container">
				<PublicHeader title="提现" recode/>
				<section className="broke-main-content">
					<p className="broke-header">您的可提现金额为：<span>¥ {this.state.balance}</span></p>
					<form className="broke-form">
						<p className="type-num">请输入提现金额（元）：¥ <input type="text" value={this.state.applyNum}
						                                            placeholder="0.00" onInput={this.handleInput}
						                                            maxLength="5"/></p>
					</form>
					<TouchBtn className="submit-btn" clickCallBack={this.submitForm} text="申请提现"/>
				</section>
			</main>
		)
	}
}
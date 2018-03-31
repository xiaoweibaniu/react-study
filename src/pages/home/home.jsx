import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PublicHeader from '@/components/header/header.jsx'
/*import {saveFormData, saveImg, clearData} from '@/store/home/action';*/
/*import {clearSelected} from '@/store/production/action';*/
import mixin, {padStr} from '@/utils/mixin';
import './home.scss';

export default class Home extends Component {

	handleInput = (type, event) => {
		let value = event.target.value;

		switch (type) {
			case 'orderSum':
				value = value.replace(/\D/g, '');
				break;
			case 'phoneNo':
				value = this.padStr(value.replace(/\D/g, ''), [3, 7], ' ', event.target);
				break;
			default:
				break;
		}

		this.props.saveFormData(value, type);
	}

	render() {
		return (
			<main className="home-container">
				<PublicHeader title="首页" record/>
				<p className="common-title">请录入您的信息</p>
				<form className="home-form">
					<div className="home-form-item">
						<span>销售金额：</span>
						<input type="text" placeholder="请输入订单金额" value=""
						       onChange={this.handleInput.bind(this, 'orderSum')}/>
					</div>
					<div className="home-form-item">
						<span>客户姓名：</span>
						<input type="text" placeholder="请输入客户姓名" value="" onChange={this.handleInput.bind(this,'name')}/>
					</div>
					<div className="home-form-item">
						<span>客户电话：</span>
						<input type="text" maxLength="13" placeholder="请输入客户电话" value="" onChange={this.handleInput.bind(this,'phoneNo')}/>
					</div>
				</form>
				<div>
					<p className="common-title">请选择销售的产品</p>
					<Link className="common-select-btn" to="/production">选择产品</Link>
				</div>
				<div className="upload-img-con">
					<p className="common-title">请上传发票凭证</p>
					<div className="file-lable">
						<span className="common-select-btn">上传图片</span>
						<input type="file"/>
					</div>
					<img src="" className="select-img" alt=""/>
				</div>
			</main>
		)
	}
}

// TODO: 产品信息提交任待完善

/*
export default connect(state=>({
	formData:state.formData,
	proData:state.proData,
}), {
	saveFormData,
	saveImg,
	clearData,
	clearSelected,
})(Home)*/

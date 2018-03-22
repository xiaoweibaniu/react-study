/**
 * Created by JustinWu on 2017/11/30.
 */

/**
 * ģ�����Input  �õ�ʲô���ݾ�չʾʲô���� ���������Ͷ������
 */
import React from 'react'

import { render } from 'react-dom'

class Input extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Your name here"
                    style={{width: '100%', height:'40px', fontSize: '25px'}}
                    value={this.state.value}
                    onChange={this.handlerChange.bind(this)}
                    onKeyUp={this.handlerKeyUp.bind(this)}
                />
            </div>
        )
    }

    handlerChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handlerKeyUp(e) {
        const value = this.state.value;
        if(e.keyCode == 13 && value.trim()){
            this.props.submitFun(value)
            this.setState({value: ''})
        }
    }

}

export default Input
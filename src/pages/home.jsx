import React, {Component} from 'react'

import style from './t0.css'

import {connect} from 'react-redux'
import {testAction} from '../store/test/action'

import CommonHead from '../components/CommonHead/CommonHead'

class home extends Component {
    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
    }
    test() {
        this.props.testAction(123, 321)
    }
    render() {
        return (
            <div className={style.test}>
                <CommonHead></CommonHead>
                {/*<p>i am home, {this.props.testData.value0}, {this.props.testData.value1}</p>*/}
                {/*<button type="button" onClick={this.test}>click me</button>*/}
            </div>
        )
    }
}

export default connect(state => ({
    testData: state.testReducer
}), {
    testAction
})(home)
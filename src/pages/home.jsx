import React, {Component} from 'react'

import style from './t0.css'

export default class home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={style.test}>
                <p>i am home</p>
            </div>
        )
    }
}
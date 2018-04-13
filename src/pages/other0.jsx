import React, {Component} from 'react'

import style from './t1.css'

export default class home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={style.test}>
                <p>i am other0</p>
            </div>
        )
    }
}
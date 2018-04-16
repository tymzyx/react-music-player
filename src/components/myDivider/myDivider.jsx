import React,{Component} from 'react'

import style from './myDivider.css'

class myDivider extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{background: this.props.color}} className={style.divider}>
            </div>
        )
    }
}

export default myDivider;
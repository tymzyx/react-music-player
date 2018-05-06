import React,{Component} from 'react'

import style from './myDivider.css'

class myDivider extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{background: this.props.color, height: this.props.height}} className={style.divider}>
            </div>
        )
    }
}

myDivider.defaultProps = {
    height: '2px',
    color: '#ddd'
};

export default myDivider;
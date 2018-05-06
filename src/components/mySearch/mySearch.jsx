import React,{Component} from 'react'

import style from './mySearch.css'

class mySearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style["search-wrapper"]}>
                <i className="iconfont icon-search"></i>
                <input type="text" placeholder={this.props.holder}/>
            </div>
        )
    }
}

export default mySearch;
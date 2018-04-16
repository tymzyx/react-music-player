import React,{Component} from 'react'

import style from './myCard.css'

class myCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style["card-wrapper"]}>
                <img src={this.props.url} />
                <div className={style["card-info"]}>
                    <div>
                        <i className="iconfont icon-erji"></i>
                        <span>337万</span>
                    </div>
                    <div>
                        <i className="iconfont icon-play1"></i>
                    </div>
                </div>
                <div className={style["card-tag"]}>
                    <span>@毕业将至，我最想和你做的六十一件事</span>
                </div>
            </div>
        )
    }
}

export default myCard;
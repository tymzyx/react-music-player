import React,{Component} from 'react'

import style from './myCard.css'

class myCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style["card-wrapper"]} style={{width: this.props.size, display: this.props.display}}>
                <img src={this.props.url} style={{width: this.props.imgSize, height: this.props.imgSize}} />
                {!this.props.isSingerCard ? (
                    <div>
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
                ) : (
                    <div className={style["card-info-right"]}>
                        <h4>张惠妹aMEI</h4>
                        <p>台湾歌手张惠妹</p>
                    </div>
                )}
            </div>
        )
    }
}

myCard.defaultProps = {
    display: 'block',
    size: '140px',
    imgSize: '140px',
    isSingerCard: false
};

export default myCard;
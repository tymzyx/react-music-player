import React,{Component} from 'react'

import style from './myCard.css'

class myCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style["card-wrapper"]} style={{width: this.props.size, display: this.props.display,
                padding: this.props.padding}}>
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
                    <div className={style["card-info-right"]} style={{background: this.props.bg}}>
                        <div>
                            {this.props.children ? this.props.children[0] : null}
                            {/*<h4>张惠妹aMEI</h4>*/}
                        </div>
                        <div>
                            {this.props.children ? this.props.children[1] : null}
                            {/*<p>台湾歌手张惠妹</p>*/}
                        </div>
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
    isSingerCard: false,  // 是否是user卡片(左右布局)
    padding: '0',
    bg: '#f3f3f3'
};

export default myCard;
import React,{Component} from 'react'

import style from './PlayerBar.css'

import $ from 'jquery'

class playerBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLock: true,
        };

        this.toggleLock = this.toggleLock.bind(this);
        this.initEvent = this.initEvent.bind(this);
    }

    componentDidMount() {
        this.initEvent();
    }

    toggleLock() {
        this.setState(prevState => ({
            isLock: !prevState.isLock
        }));
    }

    initEvent() {
        let playerDom = $("#player-bar-wrapper");
        let _this = this;
        playerDom.mouseenter(function () {
            if (!_this.state.isLock) {
                playerDom.animate({
                    bottom: '0',
                }, 300, 'linear', function() {
                    playerDom.css({
                        bottom: '0',
                    })
                });
            }
        });
        playerDom.mouseleave(function () {
            if (!_this.state.isLock) {
                playerDom.animate({
                    bottom: '-46px',
                }, 300, 'linear', function() {
                    playerDom.css({
                        bottom: '-46px',
                    })
                });
            }
        });
    }

    render() {
        return (
            <div className={style["player-bar-wrapper"]} id="player-bar-wrapper">
                <div className={style["player-bar-lock"]} id="player-bar-lock" onClick={this.toggleLock}>
                    <div className={style["player-bar-lock-left"]}></div>
                    <div className={style["player-bar-lock-right"]}></div>
                    {this.state.isLock ? (
                        <i className="iconfont icon-lock1"></i>
                    ) : (
                        <i className="iconfont icon-lockunlock"></i>
                    )}
                </div>
                <div className={style["player-bar-main"]}>
                    <div className={style["player-ctrl"]}>
                        <i className="iconfont icon-shangyishou"></i>
                        <i className="iconfont icon-bofang"></i>
                        <i className="iconfont icon-xiayishou"></i>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

export default playerBar;
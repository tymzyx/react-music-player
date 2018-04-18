import React,{Component} from 'react'

import style from './PlayerBar.css'

import $ from 'jquery'

import {Image} from 'semantic-ui-react'
import Slider,{Range} from 'rc-slider'
import 'rc-slider/assets/index.css'

import utils from '../../assets/js/util'

let imgUrl = require('../../assets/img/amei.jpg');

class playerBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLock: true,
            isPlay: false,   // 是否正在播放
            playing: 0,   // interval数值
            progressParams: {
                current: '00:00',
                duration: '00:00',
                currentInt: 0,
                durationInt: 10
            }
        };

        this.toggleLock = this.toggleLock.bind(this);
        this.initEvent = this.initEvent.bind(this);
        this.changeSlider = this.changeSlider.bind(this);
        this.audioInit = this.audioInit.bind(this);
        this.getCurrent = this.getCurrent.bind(this);
        this.playMusic = this.playMusic.bind(this);
        this.pauseMusic = this.pauseMusic.bind(this);
    }

    componentDidMount() {
        this.initEvent();

        // let _this = this;
        // setInterval(function() {
        //     _this.setState(prevState => ({
        //         time: prevState.time + 1
        //     }))
        // }, 500);

        console.log(this.refs)
    }

    toggleLock() {
        this.setState(prevState => ({
            isLock: !prevState.isLock
        }));
    }

    changeSlider(val) {
        this.setState(prevState => ({
            progressParams: Object.assign({}, prevState.progressParams, {currentInt: val})
        }));
    }

    audioInit() {
        console.log(this.refs.myPlayer.duration);
        let player = this.refs.myPlayer;
        let durationInt = Math.floor(player.duration);
        let initParams = {
            currentInt: 0,
            current: utils.secondToTime(0),
            durationInt: durationInt,
            duration: utils.secondToTime(durationInt),
        };
        this.setState(prevState => ({
            progressParams: Object.assign({}, prevState.progressParams, initParams)
        }));
    }
    playMusic() {
        let playing = setInterval(this.getCurrent, 500);
        this.setState({
            playing: playing
        });
        this.refs.myPlayer.play();
        this.setState({
            isPlay: true
        });
    }
    pauseMusic() {
        clearInterval(this.state.playing);
        this.refs.myPlayer.pause();
        this.setState({
            isPlay: false
        });
    }
    getCurrent() {
        let currentInt = Math.floor(this.refs.myPlayer.currentTime);
        let current = utils.secondToTime(currentInt);
        let params = {
            currentInt: currentInt,
            current: current
        };
        this.setState(prevState => ({
            progressParams: Object.assign({}, prevState.progressParams, params)
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
                        {this.state.isPlay ? (
                            <i className="iconfont icon-suspend_icon" onClick={this.pauseMusic}></i>
                        ) : (
                            <i className="iconfont icon-bofang" onClick={this.playMusic}></i>
                        )}
                        <i className="iconfont icon-xiayishou"></i>
                    </div>
                    <div className={style["player-progress"]}>
                        <div className={style["progress-avatar"]}>
                            <Image src={imgUrl}/>
                        </div>
                        <div className={style["progress-main"]}>
                            <div style={{padding: '2px 0'}}>
                                <span>面筋神曲&nbsp;&nbsp;<i className="iconfont icon-player"></i></span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>面筋哥 &nbsp;&nbsp;&nbsp; <i className="iconfont icon-lianjie"></i></span>
                            </div>
                            <div className={style["progress-slider"]}>
                                <div style={{flex: 1}}>
                                    <Slider value={this.state.progressParams.currentInt} onChange={this.changeSlider}
                                            max={this.state.progressParams.durationInt}
                                            handleStyle={{border: 'solid 4px #fff', cursor: 'pointer', background: '#C20C0C'}}
                                            railStyle={{backgroundColor: '#222'}}
                                            trackStyle={{backgroundColor: '#C20C0C'}} />
                                </div>
                                <div style={{padding: '0 0 0 12px'}}>
                                    <span>{this.state.progressParams.current} / {this.state.progressParams.duration}</span>
                                </div>
                            </div>
                            <audio style={{display: 'none'}} src="./qilixiang.mp3" ref="myPlayer"
                                   controls="controls" onCanPlay={this.audioInit}>
                            </audio>
                        </div>
                    </div>
                    <div className={style["player-move"]}>
                        <i className="iconfont icon-wenjianjia"></i>
                        <i className="iconfont icon-fenxiang1"></i>
                    </div>
                    <div className={style["player-volume"]}>
                        <i className="iconfont icon-voice"></i>
                        <i className="iconfont icon-xunhuan1"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default playerBar;
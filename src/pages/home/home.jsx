import React, {Component} from 'react'
import classNames from 'classnames'

import {connect} from 'react-redux'
import {testAction} from '../../store/test/action'

import style from './home.css'

import CommonHead from '../../components/CommonHead/CommonHead'
import MyDivider from '../../components/myDivider/myDivider'
import MyCard from '../../components/myCard/myCard'
import MyDialog from '../../components/myDialog/myDialog'
import PlayBar from '../../components/PlayerBar/PlayerBar'

// semantic-ui-react
import { Button,Divider,Card,Image } from 'semantic-ui-react'

let imgUrl = require('../../assets/img/test.jpg');
let imgAmei = require('../../assets/img/amei.jpg');
let imgMusic = require('../../assets/img/music.jpg');
let imgCD = require('../../assets/img/cd.jpg');

class home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const songType = ['华语', '流行', '摇滚', '民谣', '电子'];
        const cardList = new Array(1,2,3,4,5,6,7,8,9,0,1,2,3,4);
        const singerList = new Array(1,2,1,1,1,1,1);
        const djList = new Array(1,2,3,4,5);
        const cdList = new Array(1,2,3,4,5);

        return (
            <div className={style["home-wrapper"]}>
                <CommonHead></CommonHead>
                <div className={style["home-body"]}>
                    <div className={style["home-body-left"]}>
                        <div className={style["home-body-hot"]}>
                            <div className={style["left-module-head"]}>
                                <div>
                                    <i className="iconfont icon-hotfill"></i>
                                    <h3>热门推荐</h3>
                                    {songType.map((val,index) =>
                                        <span key={index} className={classNames({[style['right-span']]: index === 4})}>{val}</span>
                                    )}
                                </div>
                                <div>
                                    <a>更多</a>
                                    <i className="iconfont icon-arrowrightc"></i>
                                </div>
                            </div>
                            <div>
                                {/*<Divider fitted />*/}
                                <MyDivider color="#C20C0C"/>
                            </div>
                            <div className={style["hot-body"]}>
                                {cardList.map((val,index) =>
                                    <div className={style["hot-card"]} key={index}>
                                        <MyCard url={imgUrl} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={style["home-body-cd"]}>
                            <div className={style["left-module-head"]}>
                                <div>
                                    <i className="iconfont icon-cd"></i>
                                    <h3>新碟上架</h3>
                                </div>
                                <div>
                                    <a>更多</a>
                                    <i className="iconfont icon-arrowrightc"></i>
                                </div>
                            </div>
                            <div>
                                <MyDivider color="#C20C0C"/>
                            </div>
                            <div className={style["cd-body"]}>
                                <div className={style["cd-body-arrow"]}>
                                    <i className="iconfont icon-arrowleft"></i>
                                </div>
                                <div className={style["cd-body-main"]}>
                                    {cdList.map((val,index) =>
                                        <div key={index} className={style["cd-card-wrapper"]}>
                                            <div className={style["cd-card"]}>
                                                <Card>
                                                    <Image src={imgCD} />
                                                </Card>
                                            </div>
                                            <div className={style["cd-info"]}>
                                                <p>Let Me</p>
                                                <span>ZAYN</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className={style["cd-body-arrow"]}>
                                    <i className="iconfont icon-arrowright"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style["home-body-right"]}>
                        <MyDialog/>
                        <div className={style["home-body-right-module"]}>
                            <div className={style["singer-head"]}>
                                <span>入驻歌手</span>
                                <a>查看全部></a>
                            </div>
                            <MyDivider height="1px"/>
                            {singerList.map((val,index) =>
                                <div className={style["singer-card"]} key={index}>
                                    <MyCard url={imgAmei} size="100%" imgSize="78px" display="flex"
                                            isSingerCard="true"/>
                                </div>
                            )}
                            <Button content="申请成为网易音乐人" basic fluid/>
                        </div>
                        <div className={style["home-body-right-module"]}>
                            <div className={style["dj-head"]}>
                                <span>热门主播</span>
                            </div>
                            <MyDivider height="1px"/>
                            {djList.map((val,index) =>
                                <div className={style["dj-card"]} key={index}>
                                    <MyCard url={imgMusic} size="100%" imgSize="58px" display="flex"
                                            isSingerCard="true"/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <PlayBar/>
            </div>
        )
    }
}

export default connect(state => ({
    testData: state.testReducer
}), {
    testAction
})(home)
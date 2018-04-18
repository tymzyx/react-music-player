import React, {Component} from 'react'
import classNames from 'classnames'
import $ from 'jquery'

import {connect} from 'react-redux'
import {testAction} from '../../store/test/action'

import style from './home.css'

import CommonHead from '../../components/CommonHead/CommonHead'
import MyDivider from '../../components/myDivider/myDivider'
import MyCard from '../../components/myCard/myCard'
import MyDialog from '../../components/myDialog/myDialog'
import PlayBar from '../../components/PlayerBar/PlayerBar'
import MyRoll from '../../components/myRoll/myRoll'

// semantic-ui-react
import { Button,Divider,Card,Image,Table,Header } from 'semantic-ui-react'

let imgUrl = require('../../assets/img/test.jpg');
let imgAmei = require('../../assets/img/amei.jpg');
let imgMusic = require('../../assets/img/music.jpg');
let imgCD = require('../../assets/img/cd.jpg');
let imgRank0 = require('../../assets/img/rank0.jpg');
let imgRank1 = require('../../assets/img/rank1.jpg');
let imgRank2 = require('../../assets/img/rank2.jpg');
let imgBoard = require('../../assets/img/board.jpg');

class home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cdIndex: 0,
        };

        this.plusCD = this.plusCD.bind(this);
        this.minusCD = this.minusCD.bind(this);
    }

    plusCD() {
        if (this.state.cdIndex === 4) {
            return;
        }

        let cdDom = $("#cd-card-content");
        let moveX = (this.state.cdIndex + 1) * 130;
        cdDom.animate({
            marginLeft: `-${moveX}px`
        }, 300, 'linear', function () {
            console.log(moveX);
            cdDom.css({
                marginLeft: `-${moveX}px`
            })
        });

        this.setState(prevState => ({
            cdIndex: prevState.cdIndex + 1
        }));
    }
    minusCD() {
        if (this.state.cdIndex === 0) {
            return;
        }

        let cdDom = $("#cd-card-content");
        let moveX = (this.state.cdIndex - 1) * 130;
        cdDom.animate({
            marginLeft: `-${moveX}px`
        }, 300, 'linear', function () {
            console.log(moveX);
            cdDom.css({
                marginLeft: `-${moveX}px`
            })
        });

        this.setState(prevState => ({
            cdIndex: prevState.cdIndex - 1
        }));
    }

    render() {
        const songType = ['华语', '流行', '摇滚', '民谣', '电子'];
        const cardList = new Array(1,2,3,4,5,6,7,8,9,0,1,2,3,4);
        const singerList = new Array(1,2,1,1,1,1,1);
        const djList = new Array(1,2,3,4,5);
        const cdList = new Array(1,2,3,4,5,6,7,8,9,10);
        const rankList = new Array(1,2,3,4,5,6,7,8,9,10);
        const boardList = new Array(1,2,3,4,5,6)

        return (
            <div className={style["home-wrapper"]}>
                <CommonHead></CommonHead>
                <div className={style["home-board"]}>
                    <div className={style["home-board-main"]}>
                        <MyRoll isExtra={true} domId="board-img-container" displayTotal={boardList.length}>
                            <div className={style["board-img-container"]} id="board-img-container">
                                {boardList.map((val,index) =>
                                    <div className={style["board-img-wrapper"]} key={index}>
                                        <Image src={imgBoard} fluid/>
                                    </div>
                                )}
                            </div>
                            <div className={style["board-extra"]}></div>
                        </MyRoll>
                    </div>
                </div>
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
                                <div className={classNames({[style['cd-body-arrow']]: true,
                                         [style['cd-body-arrow--disabled']]: this.state.cdIndex === 0})} >
                                    <i className="iconfont icon-arrowleft" onClick={this.minusCD}></i>
                                </div>
                                <div className={style["cd-body-main"]}>
                                    <div className={style["cd-card-content"]} id="cd-card-content">
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
                                </div>
                                <div className={classNames({[style['cd-body-arrow']]: true,
                                         [style['cd-body-arrow--disabled']]: this.state.cdIndex === 4})} >
                                    <i className="iconfont icon-arrowright" onClick={this.plusCD} >
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className={style["home-body-rank"]}>
                            <div className={style["left-module-head"]}>
                                <div>
                                    <i className="iconfont icon-paixingbang"></i>
                                    <h3>榜单</h3>
                                </div>
                                <div>
                                    <a>更多</a>
                                    <i className="iconfont icon-arrowrightc"></i>
                                </div>
                            </div>
                            <div>
                                <MyDivider color="#C20C0C"/>
                            </div>
                            <div className={style["rank-body"]}>
                                <div className={style["rank-item"]}>
                                    <Table celled>
                                        <Table.Body>
                                            <Table.Row positive={false}>
                                                <Table.Cell>
                                                    <MyCard url={imgRank0} size="100%" imgSize="70px" display="flex"
                                                        isSingerCard="true" bg="#fff">
                                                        <h4>云音乐飙升榜</h4>
                                                        <p>
                                                            <i className="iconfont icon-bofang"></i>
                                                            <i className="iconfont icon-wenjianjia"></i>
                                                        </p>
                                                    </MyCard>
                                                </Table.Cell>
                                            </Table.Row>
                                            {rankList.map((val,index) =>
                                                <Table.Row key={index} className={style["rank-cell"]}
                                                           positive={index%2 === 0}>
                                                    <Table.Cell>
                                                        <p>{index+1} &nbsp;&nbsp;<span>离人愁</span></p>
                                                    </Table.Cell>
                                                </Table.Row>
                                            )}
                                        </Table.Body>
                                    </Table>
                                </div>
                                <div className={style["rank-item"]}>
                                    <Table celled>
                                        <Table.Body>
                                            <Table.Row positive={false}>
                                                <Table.Cell>
                                                    <MyCard url={imgRank1} size="100%" imgSize="70px" display="flex"
                                                        isSingerCard="true" bg="#fff">
                                                        <h4>云音乐新歌榜</h4>
                                                        <p>
                                                            <i className="iconfont icon-bofang"></i>
                                                            <i className="iconfont icon-wenjianjia"></i>
                                                        </p>
                                                    </MyCard>
                                                </Table.Cell>
                                            </Table.Row>
                                            {rankList.map((val,index) =>
                                                <Table.Row key={index} className={style["rank-cell"]}
                                                           positive={index%2 === 0}>
                                                    <Table.Cell>
                                                        <p>{index+1} &nbsp;&nbsp;<span>离人愁</span></p>
                                                    </Table.Cell>
                                                </Table.Row>
                                            )}
                                        </Table.Body>
                                    </Table>
                                </div>
                                <div className={style["rank-item"]}>
                                    <Table celled>
                                        <Table.Body>
                                            <Table.Row positive={false}>
                                                <Table.Cell>
                                                    <MyCard url={imgRank2} size="100%" imgSize="70px" display="flex"
                                                        isSingerCard="true" bg="#fff">
                                                        <h4>网易原创歌曲榜</h4>
                                                        <p>
                                                            <i className="iconfont icon-bofang"></i>
                                                            <i className="iconfont icon-wenjianjia"></i>
                                                        </p>
                                                    </MyCard>
                                                </Table.Cell>
                                            </Table.Row>
                                            {rankList.map((val,index) =>
                                                <Table.Row key={index} className={style["rank-cell"]}
                                                           positive={index%2 === 0}>
                                                    <Table.Cell>
                                                        <p>{index+1} &nbsp;&nbsp;<span>离人愁</span></p>
                                                    </Table.Cell>
                                                </Table.Row>
                                            )}
                                        </Table.Body>
                                    </Table>
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
                                            isSingerCard="true">
                                        <h4>张惠妹aMEI</h4>
                                        <p>台湾歌手张惠妹</p>
                                    </MyCard>
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
                                            isSingerCard="true">
                                        <span>陈立</span>
                                        <p>心理学家、美食家陈立教授</p>
                                    </MyCard>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={style["home-foot"]}>
                    <div className={style["foot-main"]}>
                        <div className={style["foot-left"]}>
                            <div>
                                <a>关于网易</a>&nbsp; | &nbsp;
                                <a>客户服务</a>&nbsp; | &nbsp;
                                <a>服务条款</a>&nbsp; | &nbsp;
                                <a>网站导航</a>&nbsp; | &nbsp;
                                <a>意见反馈</a>
                            </div>
                            <div>
                                <span>
                                    网易公司版权所有@1997-2018&nbsp;&nbsp;
                                    杭州乐读科技有限公司运营：浙网文[2015] 0415-135号
                                </span>
                            </div>
                            <div>
                                <span>
                                    违法和不良信息举报电话：0571-89853516&nbsp;&nbsp;
                                    举报邮箱：cloudmusicservice@163.com
                                </span>
                            </div>
                        </div>
                        <div className={style["foot-right"]}></div>
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
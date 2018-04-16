import React, {Component} from 'react'
import classNames from 'classnames'

import {connect} from 'react-redux'
import {testAction} from '../../store/test/action'

import style from './home.css'

import CommonHead from '../../components/CommonHead/CommonHead'
import MyDivider from '../../components/myDivider/myDivider'
import MyCard from '../../components/myCard/myCard'

// semantic-ui-react
// import { Button,Divider } from 'semantic-ui-react'

let imgUrl = require('../../assets/img/test.jpg')

class home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const songType = ['华语', '流行', '摇滚', '民谣', '电子'];
        const cardList = new Array(1,2,3,4,5,6,7,8,9,0,1,2,3,4);

        return (
            <div className={style["home-wrapper"]}>
                <CommonHead></CommonHead>
                <div className={style["home-body"]}>
                    <div className={style["home-body-left"]}>
                        <div className={style["home-body-hot"]}>
                            <div className={style["hot-head"]}>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    testData: state.testReducer
}), {
    testAction
})(home)
import React,{Component} from 'react'

import style from './CommonHead.css'

import MySearch from '../mySearch/mySearch'

class CommonHead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const nums = ['发现音乐', '我的音乐', '朋友', '商城', '音乐人', '下载客户端'];
        const spanList = nums.map((val, index) =>
            <span key={index}>{val}</span>
        );

        return (
            <div className={style["head-wrapper"]}>
                <div className={style["head-wrapper-main"]}>
                    <div className={style["head-left"]}>
                        <div className={style["head-left-logo"]}></div>
                        <div>
                            {spanList}
                        </div>
                    </div>
                    <div className={style["head-right"]}>
                        <div>
                            <MySearch holder="音乐/视频/电台/用户"/>
                        </div>
                        <div className={style["head-right-right"]}>
                            <i className="iconfont icon-shexiangji"></i>
                            <span> 视频投稿</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommonHead;
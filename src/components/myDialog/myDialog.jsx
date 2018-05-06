import React,{Component} from 'react'

import style from './myDialog.css'

import { Button } from 'semantic-ui-react'

class myDialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style["dialog-wrapper"]}>
                <div className={style["dialog-text"]}>
                    <span>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</span>
                </div>
                <Button color="red" content="用户登录"/>
            </div>
        )
    }
}

export default myDialog;
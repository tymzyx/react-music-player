import React,{Component} from 'react'

import style from './myRoll.css'
import $ from "jquery";

class MyRoll extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentIndex: 0
        };

        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }

    componentDidMount() {
        console.log(this.props.children);
    }

    plus() {
        if (this.state.currentIndex === this.props.displayTotal - 1) {
            return;
        }

        let dom = $('#' + this.props.domId);
        let moveX = (this.state.currentIndex + 1) * 680;
        dom.animate({
            marginLeft: `-${moveX}px`
        }, 300, 'linear', function () {
            console.log(moveX);
            dom.css({
                marginLeft: `-${moveX}px`
            })
        });

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    }
    minus() {
        if (this.state.currentIndex === 0) {
            return;
        }

        let dom = $('#' + this.props.domId);
        let moveX = (this.state.currentIndex - 1) * 680;
        dom.animate({
            marginLeft: `-${moveX}px`
        }, 300, 'linear', function () {
            console.log(moveX);
            dom.css({
                marginLeft: `-${moveX}px`
            })
        });

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }

    render() {
        return (
            <div className={style["roll-wrapper"]}>
                <div className={style["roll-arrow"]}>
                    <i className="iconfont icon-arrowleft" onClick={this.minus}
                       style={{color: this.props.styles.arrowColor, fontSize: this.props.styles.arrowSize}}></i>
                </div>
                <div className={style["roll-item-wrapper"]}>
                    {this.props.children ? (this.props.children.length ? this.props.children[0] : this.props.children) : null}
                    <div className={style["roll-selector"]}>
                    </div>
                </div>
                {this.props.isExtra ? (
                    <div className={style["roll-extra"]}>
                        {this.props.children ? this.props.children[1] : null}
                    </div>
                ) : null}
                <div className={style["roll-arrow"]}>
                    <i className="iconfont icon-arrowright" onClick={this.plus}
                       style={{color: this.props.styles.arrowColor, fontSize: this.props.styles.arrowSize}}></i>
                </div>
            </div>
        )
    }
}

MyRoll.defaultProps = {
    displayNum: 1,  // 展示item数量
    displayTotal: 1,  // 轮播总数
    isExtra: false,  // 是否存在额外信息框
    domId: '',  // 轮播dom节点id
    styles: {
        arrowSize: '28px',
        arrowColor: '#f6f6f6',
    }
};

export default MyRoll;
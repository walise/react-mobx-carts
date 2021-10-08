import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './index.css';
import appleImg from './apple.png';

@observer
class AppleItem extends Component {
  render(){
    let { apple, eatApple } = this.props
    return (
        <div className='proList' key={apple.id}>
          <img src={appleImg} alt='商品图片'></img>
          <div>
            <div>
            <span className='proName'>红苹果 _ {apple.id} 号</span>
            </div>
            <div>
              {apple.weight}克
            </div>
          </div>
          <button onClick={()=>eatApple(apple.id)}>吃掉</button>
        </div>  
    )
  }
}

export default AppleItem
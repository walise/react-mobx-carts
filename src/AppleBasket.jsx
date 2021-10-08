import React, { Component } from 'react';
import './index.css';
import AppleItem from './AppleItem';
import { observer } from 'mobx-react';

@observer
class AppleBasket extends Component {
  getItems(){
    let data = []
    this.props.store.apples.forEach(apple => {
        if (!apple.isEaten) {
            data.push( <AppleItem apple={apple} eatApple={this.props.store.eatApple} key={apple.id}/> )
        }
    });

    if(!data.length) data.push(<div className="empty-tip" key="empty">苹果篮子空空如也</div>);

    return data
  }
  render(){
    let { options, isPick, insertApple, clearApples  } = this.props.store;
    return (
      <div className="App">
      <header className="App-header">
        苹果篮子
      </header>
      {/* 合计数量重量 */}
      <div className='countBox'>
        <div className='left-count'>
          <div className='label'>当前</div>
          <div>{options.curCount.count}个苹果，{options.curCount.weight}克</div>
        </div>
        <div className='right-count'>
          <div className='label'>已吃掉</div>
          <div>{options.eatCount.count}个苹果，{options.eatCount.weight}克</div>
        </div>
      </div>
      {/* 商品列表 */}
      <div className='pros'>
        {this.getItems()}
      </div>
      <div className='foot'>
        <button className='addBtn' onClick={insertApple}>{isPick?'正在摘苹果':'摘苹果'}</button>
        <button className='clearBtn' onClick={clearApples}>清空</button>
      </div>
    </div>
    )
  }
}

export default AppleBasket

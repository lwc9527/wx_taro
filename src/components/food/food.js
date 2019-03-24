import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cata from './cata'
class Food extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			current: 0,
			tabList: [{title: '点菜'},{title: '评价'},{title: '商家'}]
		};
	}
	changeTab (value) {
	    this.setState({
	      current: value
	    })
	}
	render () {
		let {current,tabList} = this.state;
		return (<View>
			<AtTabs current={current} tabList={tabList} onClick={this.changeTab.bind(this)}>
                <AtTabsPane current={current} index={0} >
        		    <Cata />
         		</AtTabsPane>
         		<AtTabsPane current={current} index={1} >
        		    222
         		</AtTabsPane>
         		<AtTabsPane current={current} index={2} >
        		    333
         		</AtTabsPane>
		    </AtTabs>
	    </View>)
	}
}

export default Food;
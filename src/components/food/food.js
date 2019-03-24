import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cata from './cata'
import FoodList from './foodlist'
import './food.less'

class Food extends Component {
	constructor(){
		super(...arguments);
		this.state = {
			current: 0,
			tabList: [{title: '点菜'},{title: '评价'},{title: '商家'}],
			foodlist: [],
			currentList: [],
			selectCata: []
		};
	}
	changeTab (value) {
	    this.setState({current: value})
	}
	// 切换分类
	changeCata(selectCata){
		
		if(this.state.foodlist.some(item=>item.pid==selectCata.id)){
			// 不加载
			this.setState({currentList:this.state.foodlist.filter(item=>item.pid==selectCata.id)})
		}else{
			// 加载
			this.setState({foodlist:this.state.foodlist.concat(this.getData(selectCata))},()=>{
				this.setState({currentList:this.state.foodlist.filter(item=>item.pid==selectCata.id)})
			});
		}
		this.setState({selectCata: selectCata})
		// console.log('1',selectCata)
	}
	getData(selectCata){
		let count = Math.round(Math.random()*2);
//		let imgurl = `../../assets/img/${count}.jpg`;
		return Array.from(Array(Math.round(Math.random()*10)),(v,k)=>
			({	sole: Math.round(Math.random()*50),
				price: Math.round(Math.random()*20),
				img: count,
				pid:selectCata.id,
				id:selectCata.id+"_"+k,
				title:"分类"+selectCata.id+"菜品"+(k+1)
			})
		)
	}
	render () {
		let {current,tabList,currentList,selectCata} = this.state;
		return (<View>
			<AtTabs current={current} tabList={tabList} onClick={this.changeTab.bind(this)}>
                <AtTabsPane>
                	<View className="food_body">
                		<Cata onChangeCata={this.changeCata.bind(this)}/>
                		<FoodList selectCata={selectCata} currentList={currentList} />
                	</View>
         		</AtTabsPane>
         		<AtTabsPane>
        		    222
         		</AtTabsPane>
         		<AtTabsPane>
        		    333
         		</AtTabsPane>
		    </AtTabs>
	    </View>)
	}
}

export default Food;
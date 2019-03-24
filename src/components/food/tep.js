import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './foodlist.less';

class FoodList extends Component {
	constructor(){
		super(...arguments)
		this.state = {
			selectCata: null,
		};
	}
	clickHandle(item){
		if(this.state.selectCata && this.state.selectCata != item.id){
			this.setState({selectCata:item})
		}else if(!this.state.selectCata){
			this.setState({selectCata:item})
		}
	}
	render () {
		let {selectCata,currentList} = this.state;
	    return (<View className="foodlist">
			<Text>{selectCata?selectCata.name:""}</Text>
			<View className="foodlist_forlist">
				{
					currentList.map((item,index)=>{
						return (<View key={item.id} className="foodlist_item">
							<Image src={item.img==2?require('../../assets/img/2.jpg'):require('../../assets/img/1.jpg')}></Image>
							<View className="foodlist_item_info">
								<Text>{item.title}</Text>
								<Text>月售:{item.sole}</Text>
								<Text>$:{item.price}</Text>
							</View>
						</View>)
					})
				}
			</View>
	    </View>);
	}
}

export default FoodList;
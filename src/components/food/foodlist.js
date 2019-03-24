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
		let {selectCata} = this.state;
		console.log(JSON.stringify(this.props.currentList));
	    return (<View className="foodlist">
			66
	    </View>);
	}
}

export default FoodList;
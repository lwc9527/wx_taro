import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import {} from 'taro-ui';

class Food extends Component {
	constructor(){
		super(...arguments)
		this.state = {
			store: []
		}
	}
	render () {
		let {store} = this.state;
	    return (<View className="food">
	        
	    </View>)
	}
}

export default Food;
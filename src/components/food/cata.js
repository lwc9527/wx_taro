import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './food.less';

class Cata extends Component {
	constructor(){
		super(...arguments)
		this.state = {
			store: []
		}
	}
	render () {
		let {store} = this.state;
	    return (<View className="cata">
	        
	    </View>)
	}
}

export default Cata;
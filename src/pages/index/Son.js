import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
//import './index.less'

class Son extends Component {
	clickHandle(){
		this.props.ontest();
	}
	render () {
	    return (
	      <View>
	      	        
	        <Button onClick={this.clickHandle}>调用上层时间</Button>
	        <Text>{this.props.name}</Text>
	        <Text>{this.props.age}</Text>

	      </View>
	    )
	}
}
Son.defaultProps={
	name: "风清扬",
	age: '0'
}

export default Son;
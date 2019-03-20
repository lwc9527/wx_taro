import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import  Son from './Son'
import Head from '../../components/head/head'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
	state = {
		name: "张三"
	}
  componentWillMount () { }

  componentDidMount () {
//	this.setState({name:"阿里巴巴"})
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
				<Head/>
      </View>
    )
  }
}


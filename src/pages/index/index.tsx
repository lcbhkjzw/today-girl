import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './index.less'
import data from '../../data/picData'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {
          data.map(i => {
            return <Image mode="aspectFit" className="girl-image" src={i}></Image>
          })
        }
      </View>
    )
  }
}

import { Text, View, Image} from 'react-native'
import React, { Component } from 'react'

//
import styles from '../styles/styles'

export default class Contact extends Component {
    datas = [
        {
            title:"Bill Gates",
            desc:"Microsoft Company",
            image:require("../assets/billgates.jpeg")
        },
        {
            title:"Elon musk",
            desc:"Tesla Company",
            image:require("../assets/elon_musk.jpeg")
        },
        {
            title:"Jeff Bezos",
            desc:"Amazon Company",
            image:require("../assets/jeff.jpeg")
        },
        {
            title:"Joe Belfiore",
            desc:"Microsoft Company",
            image:require("../assets/joe_biden.jpeg")
        },
        {
            title:"Joe Biden",
            desc:"President American",
            image:require("../assets/joe_biden.jpeg")
        },
        {
            title:"Mark Zuckerberg",
            desc:"Meta Company",
            image:require("../assets/mark.jpeg")
        },
        {
            title:"Vladimir Putin",
            desc:"President Russia",
            image:require("../assets/putin.jpeg")
        },
        
    ]
    Header =() =>{
        return (
            <View style={styles.header}>
                <Image style={styles.header__icon} source={require('../assets/menu.png')}/>
                <Text style={styles.header__title}>Contact</Text>
                <Image style={styles.header__icon} source={require('../assets/search.png')}/>
            </View>
        )
    }
    //Đại diện cho 1 giao diện item:
    items = (data,index)=>{
        return(
            <View style={styles.item}>
                <Image style={styles.item__img} source={data.image}/>
                <View style={styles.item__body}>
                    <Text style={styles.item__body__title}>{data.title}</Text>
                    <Text style={styles.item__body__desc}>{data.desc}</Text>
                </View>
            </View>
        )
    }
    ContactList = ()=>{
        return this.datas.map((data, index)=>(
            this.items(data,index)
        ))
    }
  render() {
    return (
      <View style={styles.container}>
        {this.Header()}
        {this.ContactList()}
      </View>
    )
  }
}
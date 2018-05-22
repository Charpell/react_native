import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoadTabs from './tabs';

class HomeComponent extends Component {

    render(){
        return(
            <View>
                <Text>This is home</Text>

                <TouchableOpacity
                    onPress={()=> alert('touched')}
                >
                    <Icon
                        name="tachometer"
                        size={60}
                        color="red"
                        style={{
                            borderWidth:1,
                            borderColor:"blue",
                            padding:10,
                            textAlign:"center",
                            backgroundColor:"lightgrey"
                        }}
                    />
                </TouchableOpacity>
                
                <Icon.Button
                    name="tachometer"
                    backgroundColor="#3b5998"
                    onPress={()=> alert('icon button touched')}
                    iconStyle={{
                        marginRight:20
                    }}
                >
                    <Text style={{color:"#fff"}}>FACEBOOK</Text>
                </Icon.Button>


                <Button
                    title="go to profile"
                    onPress={()=>{
                        LoadTabs();
                    }}
                />
            </View>
            
        )
    }
}


export default HomeComponent;
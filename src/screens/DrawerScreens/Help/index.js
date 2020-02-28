import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';
import { icons } from '../../../utils';
import styles from '../../../components/Main/styles';

export default class Help extends Component {

    static navigationOptions = ({ ...props }) => {
        return {
            headerLeft: <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} >
                <Image style={styles.drawerMenuStyle} source={icons.drawer_menu} />
            </TouchableOpacity>

        }
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
                <Text>
                    Help Screen
                </Text>
            </View>
        )
    }
}
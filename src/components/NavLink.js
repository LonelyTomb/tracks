import React from "react";
import {StyleSheet, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Spacer from "./Spacer";
import {Text} from "react-native-elements";

const NavLink = ({text, routeName}) => {
	const navigation = useNavigation();
	return <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
		<Text style={styles.link}>
			{text}
		</Text>
	</TouchableOpacity>
}

const styles = StyleSheet.create({
	link: {
		color: 'blue'
	}
})

export default NavLink

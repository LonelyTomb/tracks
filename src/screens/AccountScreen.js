import React, {useContext} from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import {Button, Text} from "react-native-elements";
import Spacer from "./../components/Spacer"
import {Context as AuthContext} from "./../context/AuthContext"
import {FontAwesome} from "@expo/vector-icons";


const AccountScreen = () => {
	const {signOut} = useContext(AuthContext)

	return (<SafeAreaView style={styles.container}>
		<Spacer>
			<Text h3>Account</Text>
		</Spacer>
		<Spacer>
			<Button
				title={'Sign Out'}
				onPress={signOut}
			/>
		</Spacer>
	</SafeAreaView>)
}
AccountScreen.navigationOptions = () => ({
	tabBarLabel: 'Account',
	tabBarIcon: <FontAwesome name={'gear'} size={20}/>
})
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15
	}
})

export default AccountScreen
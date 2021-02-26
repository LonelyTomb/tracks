import React, {useContext, useEffect, useLayoutEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from 'react-navigation'

const SignUpScreen = ({navigation}) => {
	const {state, signUp, clearErrorMessage} = useContext(AuthContext)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		})
	}, [navigation])

	useEffect(() => {
		return navigation.addListener('focus', clearErrorMessage)
	}, [navigation])

	return (<View style={styles.container}>

		<AuthForm
			headerText={'Sign up for Tracker'}
			errorMessage={state.errorMessage}
			submitButtonText={'Sign Up'}
			onSubmit={signUp}
		/>
		<Spacer>
			<NavLink
				routeName={'SignIn'}
				text={'Already have an account? Sign in instead'}
			/>
		</Spacer>
	</View>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 250
	},
	header: {
		fontSize: 48,
	},
	errorMessage: {
		color: 'red',
		fontSize: 16,
	}
})

export default SignUpScreen
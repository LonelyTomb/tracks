import React, {useContext, useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from 'react-navigation'

const SignUpScreen = () => {
	const {state, signUp, clearErrorMessage} = useContext(AuthContext)

	return (<View style={styles.container}>
		<NavigationEvents
			onWillFocus={clearErrorMessage}
		/>
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
SignUpScreen.navigationOptions = () => {
	return {
		headerShown: false
	}
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
import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import SignUpScreen from "./SignUpScreen";
import {NavigationEvents} from "react-navigation";

const SignInScreen = () => {
	const {state, signIn, clearErrorMessage} = useContext(AuthContext)

	return (<View style={styles.container}>
		<NavigationEvents
			onWillFocus={clearErrorMessage}
		/>
		<AuthForm
			headerText={'Sign in to your account'}
			errorMessage={state.errorMessage}
			submitButtonText={'Sign In'}
			onSubmit={signIn}
		/>
		<Spacer>
			<NavLink
				routeName={'SignUp'}
				text={`Don't have an account? Sign up instead`}
			/>
		</Spacer>
	</View>)
}

SignInScreen.navigationOptions = () => ({
	headerShown: false
})
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

export default SignInScreen
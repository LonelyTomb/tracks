import React, {useContext, useEffect, useLayoutEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignInScreen = ({navigation}) => {
	const {state, signIn, clearErrorMessage} = useContext(AuthContext)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		})
	}, [navigation])

	useEffect(() => {
		return navigation.addListener('focus', clearErrorMessage)
	},[navigation])


	return (<View style={styles.container}>
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
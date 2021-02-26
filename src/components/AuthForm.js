import React, {useContext, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {Text, Button, Input} from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
	const [form, setForm] = useState({email: '', password: ''})
	const handleForm = (name, value) => {
		setForm({...form, [name]: value})
	}
	return <>
		<Spacer>
			<Text h3>{headerText}</Text>
		</Spacer>
		<Spacer/>
		<Input autoCapitalize={'none'} autoCorrect={false} label={'Email'} value={form.email}
		       onChangeText={(newEmail) => {
			       handleForm('email', newEmail)
		       }}/>
		<Input autoCapitalize={'none'} autoCorrect={false} label={'Password'} value={form.password}
		       secureTextEntry
		       onChangeText={(newPassword) => {
			       handleForm('password', newPassword)
		       }}/>
		{
			errorMessage
				? (<Spacer>
					<Text style={styles.errorMessage}>{errorMessage}</Text>
				</Spacer>)
				: null
		}
		<Spacer>
			<Button title={submitButtonText} onPress={() => {
				onSubmit({email: form.email, password: form.password})
			}}/>
		</Spacer>
	</>
}
const styles = StyleSheet.create({
	errorMessage: {
		color: 'red',
		fontSize: 16,
	}
})

export default AuthForm
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import * as SecureStore from 'expo-secure-store';
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ERROR':
			return {...state, errorMessage: action.payload}
		case 'SIGN_IN':
			return {errorMessage: '', token: action.payload}
		case 'CLEAR_ERROR_MESSAGE':
			return {...state, errorMessage: ''}
		case 'SIGN_OUT':
			return {...state, token: null, errorMessage: ''}
		default:
			return state
	}
}

const tryLocalSignIn = dispatch => async () => {
	const token = await SecureStore.getItemAsync('token')
	if (token) {
		dispatch({type: 'SIGN_IN', payload: token})
		navigate('TrackList')
	} else {
		navigate('loginFlow')
	}
}

const clearErrorMessage = dispatch => () => {
	dispatch({type: 'CLEAR_ERROR_MESSAGE'})
}

const signUp = (dispatch) => async ({email, password}) => {
	try {
		const response = await trackerApi.post('/signup', {email, password})
		await SecureStore.setItemAsync('token', response.data.token)
		dispatch({type: 'SIGN_IN', payload: response.data.token})

		navigate('TrackList')
	} catch (e) {
		dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with sign up'})
	}
}

const signIn = (dispatch) => async ({email, password}) => {
	try {
		const response = await trackerApi.post('/signin', {email, password})
		await SecureStore.setItemAsync('token', response.data.token)
		dispatch({type: 'SIGN_IN', payload: response.data.token})

		navigate('TrackList')
	} catch (e) {
		dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with sign in'})
	}
}

const signOut = (dispatch) => async () => {
	await SecureStore.deleteItemAsync('token')
	dispatch({type: 'SIGN_OUT'})
	navigate('loginFlow')


}

export const {Provider, Context} = createDataContext(authReducer, {
	signUp,
	signIn,
	signOut,
	tryLocalSignIn,
	clearErrorMessage
}, {token: null, errorMessage: ''})
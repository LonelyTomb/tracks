import '../_mockLocation'
import React, {useCallback, useContext, useLayoutEffect} from 'react'
import {StyleSheet, SafeAreaView} from 'react-native'
import {Text} from 'react-native-elements'
import Spacer from "../components/Spacer";
import Map from "./Map";
import {Context as LocationContext} from "../context/LocationContext"
import useLocation from "../hooks/useLocation";

import TrackForm from "../components/TrackForm";
import {FontAwesome} from '@expo/vector-icons'


const TrackCreateScreen = ({isFocused, navigation}) => {
	const {state, addLocation} = useContext(LocationContext)
	const callback = useCallback((location) => {
		addLocation(location, state.recording)
	}, [state.recording])
	const [err] = useLocation(isFocused, callback)

	return (<SafeAreaView style={styles.container}>
		<Spacer>
			<Text h2>Create a Track</Text>
		</Spacer>
		<Map/>
		{
			err
				? <Text>Please enable location services</Text>
				: null
		}
		<TrackForm/>
	</SafeAreaView>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15
	}
})

export default TrackCreateScreen
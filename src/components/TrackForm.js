import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import {Input, Button} from 'react-native-elements'
import Spacer from "./Spacer";
import {Context as LocationContext} from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
	const {
		startRecording,
		stopRecording,
		changeName,
		state: {
			name, recording, locations
		}
	} = useContext(LocationContext)
	const [saveTrack] = useSaveTrack()

	return <>
		<Spacer>
			<Input placeholder={'Enter name'} onChangeText={changeName} value={name}/>
		</Spacer>
		<Spacer>
			<Button title={`${recording ? 'Stop' : 'Start Recording'}`} onPress={() => {
				recording ? stopRecording() : startRecording()
			}} buttonStyle={{
				backgroundColor: recording ? 'red' : 'blue'
			}}/>
		</Spacer>

		{
			!recording && locations.length
				? <Spacer>
					<Button title={'Save Recording'} onPress={saveTrack}/>
				</Spacer>
				: <></>
		}
	</>
}

export default TrackForm
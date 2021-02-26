import React, {useContext} from 'react'
import {StyleSheet, FlatList, SafeAreaView, TouchableOpacity} from 'react-native'
import Spacer from "../components/Spacer";
import {Text, ListItem} from 'react-native-elements'
import {NavigationEvents} from 'react-navigation'
import {Context as TrackContext} from '../context/TrackContext'

const TrackListScreen = ({navigation}) => {
	const {state, fetchTracks} = useContext(TrackContext)
	return (<SafeAreaView style={styles.container}>
		<NavigationEvents onWillFocus={fetchTracks}/>
		<Spacer>
			<Text h2 style={styles.header}>Tracks</Text>
		</Spacer>
		<FlatList
			data={state}
			keyExtractor={item => item._id}
			renderItem={({item}) => {
				return <TouchableOpacity
					style={styles.listItem}
					onPress={() => {
						navigation.navigate('TrackDetail', {_id: item._id})
					}}>
					<ListItem bottomDivider>
						<ListItem.Content>
							<ListItem.Title>{item.name}</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron/>
					</ListItem>
				</TouchableOpacity>
			}}
		/>
	</SafeAreaView>)
}

TrackListScreen.navigationOptions = () => ({
	tabBarLabel: 'Tracks',
	headerShown: false
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15
	},
	header: {
		textAlign: 'center'
	},
	listItem: {
		marginHorizontal: 10,
	}
})

export default TrackListScreen
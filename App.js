import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {StyleSheet, Text, View} from 'react-native';
import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {Provider as LocationProvider} from "./src/context/LocationContext";
import {Provider as TrackProvider} from "./src/context/TrackContext";
import {setNavigator} from './src/navigationRef'
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import {FontAwesome} from "@expo/vector-icons";


const trackListFlow = createStackNavigator({
	TrackList: TrackListScreen,
	TrackDetail: TrackDetailScreen
})

trackListFlow.navigationOptions = () => ({
	title: 'Tracks',
	tabBarIcon: <FontAwesome name={'th-list'} size={20}/>
})
const switchNavigator = createSwitchNavigator({
	ResolveAuth: ResolveAuthScreen,
	loginFlow: createStackNavigator({
		SignUp: SignUpScreen,
		SignIn: SignInScreen
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow,
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen
	}, {
		defaultNavigationOptions: {
			title: 'Tracks'
		},
		tabBarOptions: {
			tabStyle: {
				paddingVertical: 5,
				backgroundColor: '#111111'
			}
		}
	})
}, {
	initialRouteName: 'ResolveAuth'
})

const App = createAppContainer(switchNavigator)

export default () => {
	return (
		<TrackProvider>
			<LocationProvider>
				<AuthProvider>
					<App ref={(navigator) => {
						setNavigator(navigator)
					}}/>
				</AuthProvider>
			</LocationProvider>
		</TrackProvider>
	)
}
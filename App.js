import React from 'react';
//v4
// import {createSwitchNavigator} from "react-navigation";
// import {createStackNavigator} from 'react-navigation-stack'
// import {createBottomTabNavigator} from 'react-navigation-tabs'

//v5
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

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

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const loginFlow = () => (<Stack.Navigator>
	<Stack.Screen name={'SignUp'} component={SignUpScreen}/>
	<Stack.Screen name={'SignIn'} component={SignInScreen}/>
</Stack.Navigator>)

const trackListFlow = () => (
	<Stack.Navigator initialRouteName={'TrackList'}>
		<Stack.Screen name={'TrackList'} component={TrackListScreen}/>
		<Stack.Screen name={'TrackDetail'} component={TrackDetailScreen}/>
	</Stack.Navigator>
)

const TrackTabs = () => (
	<Tab.Navigator>
		<Tab.Screen name={'trackListFlow'} component={trackListFlow} options={{
			title: 'Tracks',
			tabBarIcon: () => (<FontAwesome name={'th-list'} size={20}/>)
		}}/>
		<Tab.Screen name={'Add Track'} component={TrackCreateScreen} options={{
			tabBarIcon: () => (<FontAwesome name={'plus'} size={20}/>)
		}}/>
		<Tab.Screen name={'Account'} component={AccountScreen} options={{
			tabBarLabel: 'Account',
			tabBarIcon: () => (
				<FontAwesome name={'gear'} size={20}/>
			)
		}}/>
	</Tab.Navigator>
)

const App = () => {
	return <NavigationContainer ref={(navigator) => {
		setNavigator(navigator)
	}}>
		<Stack.Navigator>
			<Stack.Screen name={'ResolveAuth'} component={ResolveAuthScreen}/>
			<Stack.Screen name={'loginFlow'} component={loginFlow}/>
			<Stack.Screen name={'Tracks'} component={TrackTabs}/>
		</Stack.Navigator>
	</NavigationContainer>
}

export default () => {
	return (
		<TrackProvider>
			<LocationProvider>
				<AuthProvider>
					<App/>
				</AuthProvider>
			</LocationProvider>
		</TrackProvider>
	)
}
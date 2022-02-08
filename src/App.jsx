import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Routes,
  Route,
} from 'react-router-dom';

import './App.scss';
import Layout from './Layout';
import Nest from './pages/nest/Nest';
import Leaderbird from './pages/leaderbird/Leaderbird';
import UserStats from './pages/userStats/UserStats';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for Navigation Drawer
  const toggleDrawer = ()=> {
    //Props to open/close the drawer
    props.nagivationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/* Put a button image here? */}
      </TouchableOpacity>
    </View>
  );
}

function leaderbirdStack({ navigation }) {
	return (
		<Stack.Navigator initialRoutName = "Leaderbird">
			<Stack.Screen
			  name="Leaderbird"
			  component={Leaderbird}
			  options={{
				  title: 'Leaderbird', //Set header title
				  headerLeft: ()=>
				  <NavigationDrawerStructure
				    navigationProps={navigation}
					/>,
					headerStyle: {backgroundColor: '#cbacba',},
					headerTintColor = '#aaa',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
			  }}
			  />
		</Stack.Navigator>
	);
}

function userStatsStack({ navigation }) {
	return (
		<Stack.Navigator initialRoutName = "UserStats">
			<Stack.Screen
			  name="UserStats"
			  component={UserStats}
			  options={{
				  title: 'User Stats', //Set header title
				  headerLeft: ()=>
				  <NavigationDrawerStructure
				    navigationProps={navigation}
					/>,
					headerStyle: {backgroundColor: '#cbacba',},
					headerTintColor = '#aaa',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
			  }}
			  />
		</Stack.Navigator>
	);
}

function nestStack({ navigation }) {
	return (
		<Stack.Navigator initialRoutName = "Nest">
			<Stack.Screen
			  name="Nest"
			  component={Nest}
			  options={{
				  title: 'Nest', //Set header title
				  headerLeft: ()=>
				  <NavigationDrawerStructure
				    navigationProps={navigation}
					/>,
					headerStyle: {backgroundColor: '#cbacba',},
					headerTintColor = '#aaa',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
			  }}
			  />
		</Stack.Navigator>
	);
}



function App() {
  return (
    /*<Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Nest />} />

        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. *//*}
        {/* <Route path="*" element={<NoMatch />} /> *//*}
      /*</Route>
    </Routes> */

    <NavigationContainer>
      <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#abcabc',
        itemStyle: {marginVertical: 5},
      }}>
		<Drawer.Screen
          name="Nest"
          options={{ drawerLabel: 'Nest' }}
          component={nestStack}/>
		  
        <Drawer.Screen
          name="Leaderbird"
          options={{ drawerLabel: 'Leaderbird' }}
          component={leaderbirdStack}/>
	  
	  <Drawer.Screen
          name="userStats"
          options={{ drawerLabel: 'User Stats' }}
          component={userStatsStack}/>
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default App;

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LogoutScreen from '../screens/LogoutScreen';
import {HomeScreen} from '../screens';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerPosition="left">
      {/* <Drawer.Screen
        name="Home"
        options={{title: 'Home'}}
        component={HomeScreen}
      /> */}
      <Drawer.Screen
        name="LogoutDrawer"
        options={{title: 'Account'}}
        component={LogoutScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;

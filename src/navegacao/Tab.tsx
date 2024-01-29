import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
const Tab = createBottomTabNavigator()

export default props =>(

    <Tab.Navigator 
    
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;


          switch (route.name) {
            case 'TelaA':
                iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline'
                break;
                case 'TelaB':
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                break;
                case 'TelaC':
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                break;
        
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    
    
    tabBarOptions ={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        showLabex: true, // exibir texto
        //labelStyle: {fontSize: 30} 
    }} initialRouteName ="TelaB">
       <Tab.Screen name="TelaA" component={TelaA}
         options={{title: "Inicio"}}/>
       <Tab.Screen name="TelaB" component={TelaB}
       options={{title: "Lojas"}}/>
       <Tab.Screen name="TelaC" component={TelaC}
       options={{title: "Configurações"}}/>
    </Tab.Navigator>

)
    


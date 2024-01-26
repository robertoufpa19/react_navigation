import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'
const Stack = createNativeStackNavigator()

export default props =>(
<Stack.Navigator initialRouteName ='TelaA'
     screenOptions = {{headerShown: true}}>

        <Stack.Screen name = 'TelaA'
        options={{title: 'informações tela A'}}>

            {props =>(
                <PassoStack {...props} avancar="TelaB">
                  <TelaA/>
                </PassoStack>
            )}
        </Stack.Screen>

        

        <Stack.Screen name = 'TelaB'
         options={{title: 'informações tela B'}}>

            {props =>(
                <PassoStack {...props} avancar="TelaC">
                  <TelaB/>
                </PassoStack>
            )}

        </Stack.Screen>


        
        <Stack.Screen name = 'TelaC'
         options={{title: 'informações tela C'}}>

            {props =>(
                <PassoStack {...props} avancar="TelaC">
                  <TelaC {...props}/>
                </PassoStack>
            )}

        </Stack.Screen>
        
        

    </Stack.Navigator>

)
    


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Medicine from '../pages/Medicine';
import NewMedicine from '../pages/NewMedicine';
import Details from '../pages/Details';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Medicine"
                component={Medicine}
                options={{ headerShown: false }}
            />
           
           <Stack.Screen
                name="NewMedicine"
                component={NewMedicine}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ headerShown: false }}
            />
           
        </Stack.Navigator>
    )



}

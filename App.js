
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JogosScreen from './screens/JogosScreen';
import CalendarioScreen from './screens/CalendarioScreen';
import FavoritosScreen from './screens/FavoritosScreen';
import CadastroScreen from './screens/CadastroScreen';
import LoginScreen from './screens/LoginScreen';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Jogos') {
              iconName = 'sports-soccer';
            } else if (route.name === 'Calendário') {
              iconName = 'calendar-today';
            } else if (route.name === 'Favoritos') {
              iconName = 'star';
            } else if (route.name === 'Cadastro') {
              iconName = 'add-circle-outline';
            } else if (route.name === 'Login') {
              iconName = 'login';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#008751',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Jogos" component={JogosScreen} />
        <Tab.Screen name="Calendário" component={CalendarioScreen} />
        <Tab.Screen name="Favoritos" component={FavoritosScreen} />
        <Tab.Screen name="Cadastro" component={CadastroScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

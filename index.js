// Import a library to help create a component
import React from 'react';
import {AppRegistry, Text} from 'react-native';
// Create a component
const App = () => <Text>Some Text</Text>

// Render to the device
AppRegistry.registerComponent('albums', () => App);
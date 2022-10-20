/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Contact from './src/screens/Contact';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Contact);

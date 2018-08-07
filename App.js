// Import the screens
import Main from './components/Main';
import Chat from './components/Chat';
import Login from './components/Login';
// Import React Navigation
import { createStackNavigator } from 'react-navigation'

// Create the navigator
const navigator = createStackNavigator({
    Login: {screen: Login},
    Main: { screen: Main },
    Chat: { screen: Chat },
});

// Export it as the root component
export default navigator

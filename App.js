import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/home/home.component';
import Quiz from './components/quiz/quiz.component';
import Tictactoe from './components/tictactoe/tictactoe.component';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Tictactoe" component={Tictactoe} />
				<Stack.Screen name="Quiz" component={Quiz} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

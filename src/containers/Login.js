import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>The main component - woop woop: I wrap everything</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	item: {
		padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
	},
	itemTwo: {
		flex: 3,
		width: '100%',
	},
});

export default Login;

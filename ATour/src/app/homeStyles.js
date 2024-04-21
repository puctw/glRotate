import { Dimensions, StyleSheet } from 'react-native';

export const HomeScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	logo: {
		width: 250,
		height: 250,
		marginTop: 10,
	},
	turism: {
		marginBottom: 20,
	},
	startButton: {
		alignSelf: 'center',
		paddingVertical: 20,
		paddingHorizontal: 60,
		backgroundColor: '#133929',
		width: Dimensions.get('window').width,
		minHeight: 75,
		borderBottomWidth: 2,
		borderBottomColor: 'white',
	},
	buttonontainer: {
		flex: 1,
		flexDirection: 'column',
		gap: 30,
		marginBottom: 40,
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		alignSelf: 'center',
	},
	createAccountButtonText: {
		fontSize: 20,
		color: 'white',
	},
});

export default HomeScreenStyle;

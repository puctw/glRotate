import { Dimensions, StyleSheet } from 'react-native';

export const HomeScreenStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#212120',
	},
	logo: {
		width: 250,
		height: 250,
		marginTop: 10,
	},
	startButton: {
		alignSelf: 'center',
		paddingVertical: 20,
		paddingHorizontal: 60,
		backgroundColor: 'green',
		width: Dimensions.get('window').width,
		minHeight: 75,
		borderBottomWidth: 2,
		borderBottomColor: '#212120',
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

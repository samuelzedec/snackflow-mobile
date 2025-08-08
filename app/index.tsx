import * as LocalAuhentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';


export default function Index() {

	const [isAuthenticated, setIsAuthenticated] = useState(false)

	async function verifyAvaiableAuthentication() {
		const compatible = await LocalAuhentication.hasHardwareAsync();


			console.log(compatible)

	const types = await LocalAuhentication.supportedAuthenticationTypesAsync()
	}
	async function handleAuthentication() {
		const isBiometricEnrolled = await LocalAuhentication.isEnrolledAsync()

	
		console.log(isBiometricEnrolled)
		
		if (!isBiometricEnrolled) {
			return Alert.alert('login', 'Nenhuma biometria encontrada. Por favor, cadatre no dispositivo')
		}

		const auth = await LocalAuhentication.authenticateAsync({
			promptMessage: 'Login com Biometria',
			fallbackLabel: 'Biometria Nao reconhecida'
		})

		setIsAuthenticated(auth.success)

		console.log(auth)
}

	useEffect(() => {
		verifyAvaiableAuthentication()
	}, [])
	return (
		<View style={styles.container}>
			<View style={styles.contents}>
				<Text>Usua	rio Conectado: { isAuthenticated ? 'sim' : 'naao'}</Text>
			</View>

			<Button title='Entrar' onPress={handleAuthentication}/>
    </View>
  );
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},

	contents: {
		display: "flex",
		flexDirection: "column"
	},

	button: {
		backgroundColor: "#0000",
		color: "red"
	}
})





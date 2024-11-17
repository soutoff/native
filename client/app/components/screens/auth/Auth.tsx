import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { TypeRootStackParamList } from '@/navigation/navigation.types'

const Auth: FC = () => {
	const { navigate } = useTypedNavigation()

	return (
		<View>
			<Text>Auth</Text>
			<Pressable onPress={() => navigate('Home')}>
				<Text>Go to home</Text>
			</Pressable>
		</View>
	)
}

export default Auth

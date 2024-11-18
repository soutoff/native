import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import Loader from '@/components/ui/Loader'
import Button from '@/components/ui/button/Button'

import { IAuthFormData } from '@/types/auth.inteface'

import AuthFields from './AuthFields'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		console.log(data)
		reset()
	}

	const isLoading = false

	return (
		<View className='mx-2 items-center justify-center h-full '>
			<View className='w-9/12'>
				<Text className='text-center text-3xl font-medium text-black mb-8'>
					{isReg ? 'Sign Up' : 'Login'}
				</Text>
				{isLoading ? (
					<View className='flex-row justify-center items-center'>
						<Loader />
					</View>
				) : (
					<>
						<AuthFields control={control} />

						<Button onPress={handleSubmit(onSubmit)}>
							Sign In
						</Button>
						<Pressable onPress={() => setIsReg(prev => !prev)}>
							<Text className='text-black text-center text-base mt-6'>
								{isReg
									? 'Alredy have an account'
									: 'Don`t have an account'}
								<Text className='text-[#47aa52]'>
									{isReg ? ' Login' : ' Sign Up'}
								</Text>
							</Text>
						</Pressable>
					</>
				)}
			</View>
		</View>
	)
}

export default Auth

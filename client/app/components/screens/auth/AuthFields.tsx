import { FC } from 'react'
import { Control } from 'react-hook-form'

import Field from '@/components/ui/field/Field'

import { IAuthFormData } from '@/types/auth.inteface'

import { validEmail } from './email.regex'

interface IAuthFields {
	control: Control<IAuthFormData>
}

const AuthFields: FC<IAuthFields> = ({ control }) => {
	return (
		<>
			<Field<IAuthFormData>
				placeholder='Enter Email'
				name='email'
				control={control}
				rules={{
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				}}
				keyboardType='email-address'
			/>
			<Field<IAuthFormData>
				placeholder='Enter Password'
				name='password'
				control={control}
				secureTextEntry
				keyboardType='default'
				rules={{
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Password should be more than 6 characters'
					}
				}}
			/>
		</>
	)
}

export default AuthFields

import cn from 'clsx'
import { Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { IField } from './field.interface'

const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
	className,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							'bg-white w-full rounded-lg pb-4 pt-2.5 px-4 my-1.5 border',
							error ? 'border-red-500' : 'border-gray-400'
						)}
					>
						<TextInput
							autoCapitalize='none'
							value={(value || '').toString()}
							onChangeText={onChange}
							onBlur={onBlur}
							placeholderTextColor='#6a6a6a'
							className='text-black text-base'
							{...rest}
						/>
					</View>
					{error && (
						<Text className='text-red-500 text-base'>
							{error.message}
						</Text>
					)}
				</>
			)}
		/>
	)
}

export default Field

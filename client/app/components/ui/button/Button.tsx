import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import React from 'react'
import { Pressable, Text } from 'react-native'

import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...res
}) => {
	return (
		<Pressable
			className={cn(
				className,
				'self-center mt-3.5 bg-[#47aa52] rounded-lg font-light py-3 w-full'
			)}
			{...res}
		>
			<Text className='text-center text-white font-medium text-lg'>
				{children}
			</Text>
		</Pressable>
	)
}

export default Button

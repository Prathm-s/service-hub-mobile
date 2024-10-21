import { Input, InputProps } from 'tamagui'

export type ThemedInputProps = InputProps & {
    lightColor: string,
    darkColor: string
}

export default function ThemedInput({
    style,
    lightColor,
    darkColor,
    ...rest
}: ThemedInputProps) {
    return (
        <Input size={'$3'} placeholder='Username' />
    )
}


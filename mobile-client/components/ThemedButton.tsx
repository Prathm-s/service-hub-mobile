import React from 'react'
import { Button, ButtonProps } from 'tamagui'

export type ThemedButtonProps = ButtonProps & {
}

function ThemedButton(props: ThemedButtonProps) {
    return (
        <Button {...props}>Continue</Button>
    )
}

export default ThemedButton

import { Button, SizableStack, SizableText, Text, YStack } from "tamagui";
import { useState } from "react";
import { OtpInput } from 'react-native-otp-entry';
import { StyleSheet } from "react-native";
import { useSession } from "@/components/AuthContext";
import { useRouter } from "expo-router";

export default function OTPScreen() {
    const mobile: number = 9420584848
    const [otp, setOTP] = useState('')
    const { signIn } = useSession()
    const router = useRouter()

    const handleConfirmation = () => {
        console.log(otp)
        signIn()
        router.replace('/');
    }

    const handleResendOTP = () => {
        console.log("Resending the Otp")
    }

    return (
        <YStack gap="$2" alignItems="center" margin={'$6'} space={'$3'}>
            <SizableText size={'$8'} fontWeight={'bold'}>Login with OTP</SizableText>
            <SizableText textAlign="center">To Confirm your mobile please enter the OTP we sent to {mobile}</SizableText>

            <OtpInput
                theme={{
                    containerStyle: styles.container,
                    inputsContainerStyle: styles.otpInput,
                }}
                numberOfDigits={6}
                onTextChange={setOTP}
            ></OtpInput>

            <YStack width={'100%'} space={'$3'}>
                <Button width={'100%'} backgroundColor={'#ff846a'} onPress={handleConfirmation}>Confirm</Button>
                <Button width={'100%'} variant="outlined" onPress={handleResendOTP}>Resend OTP  </Button>
            </YStack>
            <Text >OTP only valid for 10 minutes</Text>
        </YStack>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
    },
    otpInput: {
        padding: 10,
        margin: 10,
        fontSize: 20,
        textAlign: 'center',
    },
});
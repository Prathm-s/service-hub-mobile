import ThemedButton from '@/components/ThemedButton';
import ThemedInput from '@/components/ThemedInput';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, Redirect, useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Button, Separator, SizableText, Text, XStack, YStack } from 'tamagui';
import { Apple, Aperture, Anchor } from '@tamagui/lucide-icons'

export default function LoginScreen() {
  const router = useRouter();

  function handleContinue() {
    router.replace('/OTPScreen');
  }

  return (
    <ThemedView style={styles.container}>
      <YStack
        space={'$3'}
        justifyContent='center'
      >
        <SizableText textAlign='center' size={'$9'} fontWeight={'bold'} >India's #1 Hotel Booking App</SizableText>

        <XStack alignItems='center'>
          <Separator marginRight={10} />
          <SizableText textAlign='center'>Login or sign up</SizableText>
          <Separator marginLeft={10} />
        </XStack>
        <ThemedInput style={{}} lightColor={''} darkColor={''} placeholder='Username' />
        <ThemedButton onPress={handleContinue} />
        <XStack alignItems='center'>
          <Separator marginRight={10} />
          <SizableText textAlign='center'>or</SizableText>
          <Separator marginLeft={10} />
        </XStack>
        <XStack space={'$3'} alignContent="center" flex={1} alignSelf='center'>
          <Button icon={Apple} />
          <Button icon={Aperture} />
          <Button icon={Anchor} />
        </XStack>

      </YStack>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

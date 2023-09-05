import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

import BackgroundImage from "@assets/background.png";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import LogoSvg from "@assets/logo.svg";

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImage}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
            Crie sua conta
          </Heading>
          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="senha" secureTextEntry />
          <Button title="Criar e acessar" />
        </Center>
        <Button mt={24} title="Voltar para login" variant="outline" />
      </VStack>
    </ScrollView>
  );
}

import { HStack, Heading, Icon, Text, VStack } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={16}
        source={{ uri: "https://github.com/williamforneck.png" }}
        alt="Imagem do usuário"
        mr={4}
      />
      <VStack flex={1}>
        <Text fontSize="md" color="gray.100">
          Olá,
        </Text>
        <Heading fontSize="md" fontFamily="heading" color="gray.100">
          William
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}

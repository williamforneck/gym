import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  useToast,
} from "native-base";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AppError } from "@utils/AppError";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import BodySvg from "@assets/body.svg";
import { Button } from "@components/Button";
import { ExerciseDTO } from "@dtos/ExerciseDTO";
import { Feather } from "@expo/vector-icons";
import { Loading } from "@components/Loading";
import RepetitionsSvg from "@assets/repetitions.svg";
import SeriesSvg from "@assets/series.svg";
import { TouchableOpacity } from "react-native";
import { api } from "@services/api";

type RouteParamsProps = {
  exerciseId: string;
};

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const route = useRoute();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingExerciseRegister, setIsLoadingExerciseRegister] =
    useState(false);
  const [exercise, setExercise] = useState({} as ExerciseDTO);

  const { exerciseId } = route.params as RouteParamsProps;

  const handleGoBack = () => {
    navigation.goBack();
  };

  async function getExercise() {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/exercises/${exerciseId}`);
      setExercise(data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os detalhes do exercício.";

      toast.show({
        title,
        bgColor: "red.500",
        placement: "top",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleExerciseHistoryRegister() {
    try {
      setIsLoadingExerciseRegister(true);
      await api.post("/history", { exercise_id: exerciseId });
      toast.show({
        title: "Parabéns! Exercício registrado no seu histórico.",
        bgColor: "green.700",
        placement: "top",
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível registrar o exercício.";

      toast.show({
        title,
        bgColor: "red.500",
        placement: "top",
      });
    } finally {
      setIsLoadingExerciseRegister(false);
    }
  }

  useEffect(() => {
    getExercise();
  }, [exerciseId]);

  return (
    <VStack flex={1}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <VStack px={8} bg="gray.600" pt={12}>
            <TouchableOpacity onPress={handleGoBack}>
              <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
            </TouchableOpacity>
            <HStack
              justifyContent="space-between"
              mt={4}
              mb={8}
              alignItems="center"
            >
              <Heading
                color="gray.100"
                fontSize="lg"
                flexShrink={1}
                fontFamily="heading"
              >
                {exercise.name}
              </Heading>
              <HStack>
                <BodySvg />
                <Text color="gray.200" ml={1} textTransform="capitalize">
                  {exercise.group}
                </Text>
              </HStack>
            </HStack>
          </VStack>
          <ScrollView>
            <VStack p={8}>
              <Box mb={3} rounded="lg" overflow="hidden">
                <Image
                  w="full"
                  h={80}
                  source={{
                    uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`,
                  }}
                  alt="Imagem do exercício"
                  resizeMode="cover"
                />
              </Box>

              <Box bg="gray.600" rounded="md" pb={4} px={4}>
                <HStack
                  alignItems="center"
                  justifyContent="space-around"
                  mb={6}
                  mt={5}
                >
                  <HStack>
                    <SeriesSvg />
                    <Text color="gray.200" ml={2}>
                      {exercise.series} séries
                    </Text>
                  </HStack>
                  <HStack>
                    <RepetitionsSvg />
                    <Text color="gray.200" ml={2}>
                      {exercise.repetitions} repetições
                    </Text>
                  </HStack>
                </HStack>
                <Button
                  title="Marcar como realizado"
                  isLoading={isLoadingExerciseRegister}
                  onPress={handleExerciseHistoryRegister}
                />
              </Box>
            </VStack>
          </ScrollView>
        </>
      )}
    </VStack>
  );
}

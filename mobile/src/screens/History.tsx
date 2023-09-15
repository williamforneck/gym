import { Heading, SectionList, Text, VStack } from "native-base";

import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { useState } from "react";

export function History() {
  const [exercises, setExercises] = useState([
    { title: "14.09.2023", data: ["Puxada frontal", "Remada unilateral"] },
    { title: "15.09.2023", data: ["Puxada frontal"] },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />
      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            fontFamily="heading"
            color="gray.200"
            fontSize="md"
            mt={10}
            mb={3}
          >
            {section.title}
          </Heading>
        )}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. {"\n"} Vamos fazer exercicios
            hoje?
          </Text>
        )}
        contentContainerStyle={
          !exercises.length && { flex: 1, justifyContent: "center" }
        }
        px={8}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}

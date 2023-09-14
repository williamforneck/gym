import { FlatList, HStack, Heading, Text, VStack } from "native-base";

import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useState } from "react";

export function Home() {
  const [groups, setGroups] = useState([
    "Costas",
    "Ombro",
    "Bíceps",
    "Tríceps",
  ]);
  const [exercises, setExercises] = useState([
    "Puxada unilatetral",
    "te",
    "tteee",
    "assfa",
    "awegasg",
    "asfgaw",
  ]);

  const [groupSelected, setGroupSelected] = useState("Costas");

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
            name={item}
          />
        )}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          paddingBottom={20}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </VStack>
  );
}

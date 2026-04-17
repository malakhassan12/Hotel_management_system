import { Container, Title, Text, SimpleGrid, Stack } from "@mantine/core";

import useFavoritesStore from "../../Store/favoritesStore"
import RoomCard from "../../Components/Card/Room/RoomCard";

const Favourites = () => {
  const { favorites } = useFavoritesStore();

  return (
    <Container size="xl" py="md">
      <Stack gap="xs" mb="lg">
        <Title order={2}>My Favorites</Title>
        <Text c="dimmed">
          Your saved rooms for future booking
        </Text>
      </Stack>

      {favorites.length === 0 ? (
        <Text c="dimmed" ta="center" mt="xl">
          No favorite rooms yet ❤️
        </Text>
      ) : (
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="lg"
        >
          {favorites.map((room) => (
            <RoomCard
              key={room.id}
              item={room}
              role="customer"
            />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default Favourites;
// import { Card, Image, Text, Title, Group, Badge, Stack } from "@mantine/core";

// const BookingSummaryCard = ({ room ,totalPrice}) => {
//   if (!room) {
//     return (
//       <Card shadow="sm" padding="lg" radius="md" withBorder>
//         Loading room details...
//       </Card>
//     );
//   }

//   return (
//     <Card shadow="sm" padding="lg" radius="md" withBorder>
//       <Card.Section>
//         <Image
//           src={room.image}           
//           height={240}
//           alt={room.name}
//           fit="cover"
//           fallbackSrc="https://picsum.photos/id/1015/600/300" 
//         />
//       </Card.Section>

//       <Stack mt="md" gap="md">
//         <Group justify="space-between" align="flex-start">
//           <Title order={3}>{room.name}</Title>
//           <Badge color="gold" variant="light" size="md">
//             {room.type}
//           </Badge>
//         </Group>

//         <Text size="sm" c="dimmed" lineClamp={2}>
//           {room.description}
//         </Text>

//         <Stack gap="xs">
//           <Group justify="space-between">
//             <Text size="sm" c="dimmed">Price per night</Text>
//             <Text fw={700} size="lg">${room.price}</Text>
//           </Group>

//           <Group justify="space-between">
//             <Text size="sm" c="dimmed">Max Guests</Text>
//             <Text fw={600}>{room.maxGuests || 4}</Text>
//           </Group>

//           {room.view && (
//             <Group justify="space-between">
//               <Text size="sm" c="dimmed">View</Text>
//               <Text fw={500}>{room.view}</Text>
//             </Group>
//           )}
//         </Stack>

//         <Text size="xl" fw={700} mt="xl" ta="right" c="gold">
//           Total: <span>${totalPrice}</span>
//         </Text>
//       </Stack>
//     </Card>
//   );
// };

// export default BookingSummaryCard;

import { Card, Image, Text, Title, Group, Badge, Stack } from "@mantine/core";

const BookingSummaryCard = ({ room, totalPrice = 0 }) => {
  if (!room) {
    return <Card shadow="sm" padding="lg" radius="md" withBorder>Loading room details...</Card>;
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={room.image}
          height={240}
          alt={room.name}
          fit="cover"
        />
      </Card.Section>

      <Stack mt="md" gap="md">
        <Group justify="space-between" align="flex-start">
          <Title order={3}>{room.name}</Title>
          <Badge color="gold" variant="light">{room.type}</Badge>
        </Group>

        <Text size="sm" c="dimmed" lineClamp={3}>
          {room.description}
        </Text>

        <Stack gap="xs">
          <Group justify="space-between">
            <Text size="sm" c="dimmed">Price per night</Text>
            <Text fw={700}>${room.price}</Text>
          </Group>

          <Group justify="space-between">
            <Text size="sm" c="dimmed">Max Guests</Text>
            <Text fw={600}>{room.maxGuests || 4}</Text>
          </Group>
        </Stack>

        <Text size="xl" fw={700} mt="xl" ta="right" c="gold">
          Total: ${totalPrice}
        </Text>
      </Stack>
    </Card>
  );
};

export default BookingSummaryCard;
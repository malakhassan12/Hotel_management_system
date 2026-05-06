import { Container, Title, Text, Stack, Grid, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import BookForm from "../../Components/Forms/BookForm";
import BookingSummaryCard from "../../Components/Card/Booking/BookingSummaryCard";
import { useBook } from "../../Hooks/Customer/useBook";
const BookRoom = () => {
  const navigate = useNavigate();
  
   
   const {
    formData,
    handleInputChange,
    handleSubmit,
    loadingSubmit,
    totalPrice,
    room,
  } = useBook();



  return (
    <Container size="lg" py="xl">
      <Group mb="xl">
        <Button variant="subtle" onClick={() => navigate(-1)}>
          ← Back 
        </Button>
      </Group>

      <Title order={1} mb="xs">Complete Your Booking</Title>
      <Text c="dimmed" size="lg" mb="xl">
        Fill in your details and select dates
      </Text>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 7 }}>
        <BookForm
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
            loading={loadingSubmit}
            totalPrice={totalPrice}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <BookingSummaryCard room={room} totalPrice={totalPrice}  />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default BookRoom;
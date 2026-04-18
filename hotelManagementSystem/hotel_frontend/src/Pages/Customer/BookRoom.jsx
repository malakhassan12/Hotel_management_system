import { Container, Title, Text, Stack, Grid, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import BookForm from "../../Components/Forms/BookForm";
import BookingSummaryCard from "../../Components/Card/Booking/BookingSummaryCard";
import { useBook } from "../../Hooks/useBook";




const BookRoom = () => {
  const navigate = useNavigate();
  
   
  const { 
   room,
    formData,
    handleInputChange,
    handleSubmit,
    loadingSubmit,
    nights,
    totalPrice,} = useBook();



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
  nights={nights}
  totalPrice={totalPrice}
  room={room}
/>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 5 }}>
          <BookingSummaryCard room={room} totalPrice={totalPrice} nights={nights} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default BookRoom;
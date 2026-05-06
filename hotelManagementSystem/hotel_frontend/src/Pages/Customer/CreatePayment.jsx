import React, { useEffect,  } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Paper, Title, Text, Loader, Center, Alert, Stack } from '@mantine/core';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';

import useGetOneBooking from '../../Hooks/Customer/useGetOneBooking';
import useGetRoom from '../../Hooks/Room/useGetRoom';
import useAuthStore from '../../Store/authStore';
import usePaymentMutations from '../../Hooks/Payement/usePaymentMutations';

const CreatePayment = () => {
  const { roomId } = useParams();
  const { user } = useAuthStore();

  // 1. جلب بيانات الحجز والغرفة
  const { data: booking, isLoading: loadingBooking } = useGetOneBooking(user?.userId, roomId);
  console.log(booking)
  const { data: room, isLoading: loadingRoom } = useGetRoom(roomId);
  console.log(room)
  
  // 2. الـ Mutation
  const { createPaymentMutation } = usePaymentMutations();

  useEffect(() => {
    const triggerPayment = async () => {
      if (
        booking?.id && 
        booking?.totalPrice && 
        !createPaymentMutation.isPending && 
        !createPaymentMutation.isSuccess 
      ) {
        try {
          console.log("Initiating Payment for Booking:", booking.id);
          
          const result = await createPaymentMutation.mutateAsync({
            bookingId: booking.id,
            amount: booking.totalPrice,
          });

          console.log("Success! Client Secret:", result);
        } catch (error) {
          console.error("Payment Error:", error);
        }
      }
    };

    triggerPayment();
  }, []);

  // حالة التحميل
  if (loadingBooking || loadingRoom) {
    return (
      <Center style={{ height: '50vh' }}>
        <Stack align="center">
          <Loader size="lg" />
          <Text>Preparing your secure payment...</Text>
        </Stack>
      </Center>
    );
  }

  return (
    <Container size="sm" py="xl">
      <Paper shadow="md" p="xl" withBorder radius="md">
        <Title order={2} mb="lg" align="center" color="blue">
          Payment Confirmation
        </Title>

        <Stack spacing="md">
          <Paper p="sm" withBorder bg="gray.0">
            <Text size="sm" color="dimmed">Booking ID: #{booking?.id}</Text>
            <Text size="lg" weight={700}>Total Amount: {booking?.totalPrice} EGP</Text>
          </Paper>

          {createPaymentMutation.isPending && (
            <Alert icon={<IconAlertCircle size="1rem" />} title="Processing" color="blue">
              Connecting to payment gateway...
            </Alert>
          )}

       

          {createPaymentMutation.isError && (
            <Alert icon={<IconAlertCircle size="1rem" />} title="Failed" color="red">
              Could not initiate payment. Please try again later.
            </Alert>
          )}
        </Stack>
      </Paper>
    </Container>
  );
};

export default CreatePayment;
import { 
  TextInput, 
  NumberInput, 
  Button, 
  Stack, 
  Title,
  Select,
  Alert 
} from "@mantine/core";

import { DateInput } from "@mantine/dates";
import { IconAlertCircle } from "@tabler/icons-react";

const BookForm = ({ formData, onChange, onSubmit, loading, totalPrice}) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const hasDateError = formData.checkInDate && 
                      formData.checkOutDate && 
                      new Date(formData.checkOutDate) <= new Date(formData.checkInDate);

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="lg">
        <Title order={3}>Personal Details</Title>

        <Title order={3} mt="md">Select Dates</Title>

          <DateInput
          label="Check-in Date"
          placeholder="Pick a date"
          value={formData.checkInDate ? new Date(formData.checkInDate) : null}
          onChange={(date) => {
  const formatted = date
    ? new Date(date).toISOString().split("T")[0]
    : "";

  onChange("checkInDate", formatted);
}}
          minDate={today}
          required
        />

        <DateInput
          label="Check-out Date"
          placeholder="Pick a date"
          value={formData.checkOutDate ? new Date(formData.checkOutDate) : null}
         onChange={(date) => {
  const formatted = date
    ? new Date(date).toISOString().split("T")[0]
    : "";

  onChange("checkOutDate", formatted);
}}
          minDate={formData.checkInDate ? new Date(formData.checkInDate) : today}
          required
        />

        {hasDateError && (
          <Alert 
            icon={<IconAlertCircle size={16} />} 
            color="red" 
            variant="light"
            title="Invalid Date"
          >
            Check-out date must be after Check-in date
          </Alert>
        )}

        <Button 
          type="submit" 
          size="lg" 
          radius="md" 
          fullWidth 
          loading={loading}
          disabled={hasDateError || !formData.checkInDate || !formData.checkOutDate}
          mt="xl"
        >
          Complete Booking — ${totalPrice || 0}
        </Button>
      </Stack>
    </form>
  );
};

export default BookForm;
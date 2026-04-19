// import { 
//   TextInput, 
//   NumberInput, 
//   Button, 
//   Stack, 
//   Title,
//   Select,
//   Alert 
// } from "@mantine/core";

// import { DateInput } from "@mantine/dates";
// import { IconAlertCircle } from "@tabler/icons-react";

// const BookForm = ({ formData, onChange, onSubmit, loading, totalPrice, room }) => {
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const hasDateError = formData.checkInDate && 
//                       formData.checkOutDate && 
//                       new Date(formData.checkOutDate) <= new Date(formData.checkInDate);

//   return (
//     <form onSubmit={onSubmit}>
//       <Stack gap="lg">
//         <Title order={3}>Personal Details</Title>

//         <TextInput
//           label="Full Name"
//           placeholder="Enter your full name"
//           value={formData.fullName}
//           onChange={(e) => onChange("fullName", e.target.value)}
//           required
//         />

//         <TextInput
//           label="Email"
//           placeholder="Enter your email"
//           type="email"
//           value={formData.email}
//           onChange={(e) => onChange("email", e.target.value)}
//           required
//         />

//         <TextInput
//           label="Phone Number"
//           placeholder="Enter your phone number"
//           value={formData.phone}
//           onChange={(e) => onChange("phone", e.target.value)}
//           required
//         />

//         <NumberInput
//           label="Number of Guests"
//           min={1}
//           max={room?.maxGuests || 4}
//           value={formData.guests}
//           onChange={(val) => onChange("guests", val)}
//           required
//         />

//         <Title order={3} mt="md">Select Dates</Title>

//         <DateInput
//           label="Check-in Date"
//           placeholder="Pick a date"
//           value={formData.checkInDate ? new Date(formData.checkInDate) : null}
//           onChange={(date) => {
//   const formatted = date
//     ? new Date(date).toISOString().split("T")[0]
//     : "";

//   onChange("checkInDate", formatted);
// }}
//           minDate={today}
//           required
//         />

//         <DateInput
//           label="Check-out Date"
//           placeholder="Pick a date"
//           value={formData.checkOutDate ? new Date(formData.checkOutDate) : null}
//          onChange={(date) => {
//   const formatted = date
//     ? new Date(date).toISOString().split("T")[0]
//     : "";

//   onChange("checkOutDate", formatted);
// }}
//           minDate={formData.checkInDate ? new Date(formData.checkInDate) : today}
//           required
//         />

//         {hasDateError && (
//           <Alert 
//             icon={<IconAlertCircle size={16} />} 
//             color="red" 
//             variant="light"
//             title="Invalid Date"
//           >
//             Check-out date must be after Check-in date
//           </Alert>
//         )}

//         <Title order={3} mt="md">Payment Method</Title>

//         <Select
//           label="Choose Payment Method"
//           placeholder="Select payment method"
//           data={[
//             { value: "online", label: "Online Payment - Pay securely with card" },
//             { value: "hotel", label: "Pay at Hotel - Pay cash upon arrival" },
//           ]}
//           value={formData.paymentMethod}
//           onChange={(value) => onChange("paymentMethod", value)}
//           required
//         />

//         <Button 
//           type="submit" 
//           size="lg" 
//           radius="md" 
//           fullWidth 
//           loading={loading}
//           disabled={hasDateError || !formData.checkInDate || !formData.checkOutDate}
//           mt="xl"
//         >
//           Complete Booking — ${totalPrice || 0}
//         </Button>
//       </Stack>
//     </form>
//   );
// };

// export default BookForm;
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

const BookForm = ({ formData, onChange, onSubmit, loading, totalPrice, room }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const hasDateError = formData.checkInDate && 
                      formData.checkOutDate && 
                      new Date(formData.checkOutDate) <= new Date(formData.checkInDate);

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="lg">
        <Title order={3}>Personal Details</Title>

        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          required
        />

        <TextInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          required
        />

        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          required
        />

        <NumberInput
          label="Number of Guests"
          min={1}
          max={room?.maxGuests || 4}
          value={formData.guests}
          onChange={(val) => onChange("guests", val)}
          required
        />

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


        <Title order={3} mt="md">Payment Method</Title>

        <Select
          label="Choose Payment Method"
          placeholder="Select payment method"
          data={[
            { value: "online", label: "Online Payment - Pay securely with card" },
            { value: "hotel", label: "Pay at Hotel - Pay cash upon arrival" },
          ]}
          value={formData.paymentMethod}
          onChange={(value) => onChange("paymentMethod", value)}
          required
        />

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
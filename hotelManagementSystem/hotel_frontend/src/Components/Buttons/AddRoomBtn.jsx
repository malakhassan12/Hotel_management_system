// ******************************** Mantline UI ********************************

import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// ******************************** Icons ********************************

import { IconCircleDashedPlus } from "@tabler/icons-react";
// ******************************** Componenets ********************************

import ManageRoomModal from "../Modal/Room/ManageRoomModal";

const AddRoomBtn = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const onSubmit = () => {};

  return (
    <div>
      <ManageRoomModal opened={opened} close={close} mode={"create"} />
      <Button leftSection={<IconCircleDashedPlus size={14} />} onClick={open}>
        Add Room
      </Button>
    </div>
  );
};

export default AddRoomBtn;

import React from "react";
import useFavouritesMutations from "../../Hooks/Favourites/useFavouritesMutations";
import useAuthStore from "../../Store/authStore";
import useGetAllFavourites from "../../Hooks/Favourites/useGetAllFavourites";
import { ActionIcon } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

const WishListBtn = ({ room }) => {
  // Handel later!!!
  const { addToFavouritesMutation, deleteItemFromFavouritesMutation } =
    useFavouritesMutations();

  const { user } = useAuthStore();

  const { data: favorite } = useGetAllFavourites(user?.userId);

  console.log(favorite);
  const liked = true;
  const removeFromFavorites = (roomId) => {
    const finalFav = Array.isArray(favorite) ? favorite : [];

    const wish = finalFav.includes(roomId);

    deleteItemFromFavouritesMutation.mutate(wish?.wishId);
  };
  const addToFavorites = (room) => {
    const data = {
      userId: user?.userId,
      roomId: room?.id,
    };

    addToFavouritesMutation.mutate(data);
  };
  return (
    <>
      <ActionIcon
        variant="light"
        color="red"
        size="md"
        radius="xl"
        onClick={() => {
          if (liked) {
            removeFromFavorites(room.id);
          } else {
            addToFavorites(room);
          }
        }}
      >
        {liked ? <IconHeartFilled size={18} /> : <IconHeart size={18} />}
      </ActionIcon>
    </>
  );
};

export default WishListBtn;

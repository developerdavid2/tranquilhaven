import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateEditCabin(cabinToEdit) {
  const { id: editId, ...editValues } = cabinToEdit || {};
  const isEditSession = Boolean(editId);

  const queryClient = useQueryClient();

  const { mutate: saveCabin, isLoading: isWorking } = useMutation({
    mutationFn: async (data) => {
      const image = typeof data.image === "string" ? data.image : data.image[0];
      const payload = { ...data, image };

      if (isEditSession) {
        return createEditCabin(payload, editId);
      } else {
        return createEditCabin(payload);
      }
    },
    onSuccess: () => {
      toast.success(
        isEditSession
          ? "Cabin successfully edited"
          : "New cabin successfully created"
      );
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditSession, saveCabin, isWorking, editValues };
}

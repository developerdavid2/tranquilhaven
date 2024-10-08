import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("Logged in successfully");
      navigate("/dashboard", { replace: true });
      queryClient.setQueryData(["user"], user.user);
    },

    onError: (err) => {
      toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isLoading };
}

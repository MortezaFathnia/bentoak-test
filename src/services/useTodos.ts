import { useQuery } from "@tanstack/react-query";
import axiosClient from "../configs/axiosConfig";

const getTodos = async () => {
  const { data } = await axiosClient.get("/todos");
  return data;
};

export default function useTodos() {
  return useQuery({ queryKey: ['todos'], queryFn: () => getTodos()})
  ;
}
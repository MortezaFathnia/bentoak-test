import { useQuery } from "@tanstack/react-query";
import axiosClient from "../configs/axiosConfig";

const getPosts = async () => {
  const { data } = await axiosClient.get("/posts");
  return data;
};

export default function usePosts() {
  return useQuery({ queryKey: ['posts'], queryFn: () => getPosts()})
  ;
}
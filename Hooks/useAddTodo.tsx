import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

export const useAddTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const { data, error }: any = await supabase.from("todos").select("*");
      if (error) throw new Error(error.message);
      setTodos(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return { todos, fetchTodos };
};

import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import { InputTotoFrom } from "../components/InputTodoForm";
import { TodoList } from "../components/ToDoList";

const Home: React.FC = () => {
  return (
    <>
      <InputTotoFrom />
      <TodoList />
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { useAddTodo } from "../Hooks/useAddTodo";

export const TodoList: React.FC = () => {
  const { todos } = useAddTodo();

  return (
    <>
      <h1>todoリスト</h1>
      <ul className="list">
        {todos.map((todo: any) => {
          return (
            <li key={todo.id}>{todo.title}</li>
          );
        })}
      </ul>
    </>
  );
};

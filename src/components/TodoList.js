import React from "react";
import styled from "styled-components";
import {useTodoState} from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px 32px;
  overflow-y: auto;
  background: white;
`;

function TodoList() {
	const todos = useTodoState();

	return (
		<TodoListBlock>
			{todos.map(
				todo => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						done={todo.done}
						text={todo.text}
					/>
				))}
		</TodoListBlock>
	);
}

export default TodoList;
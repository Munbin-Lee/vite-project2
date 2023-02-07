import TodoListItem from "./TodoListItem";
import { TodoItem } from "~/types";

interface Props {
  todoList: TodoItem[];
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todoList, deleteTodo }: Props) => {
  return (
    <div>
      {todoList.map((todoItem) => {
        return (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;

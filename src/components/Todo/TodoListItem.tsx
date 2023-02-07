import { TodoItem } from "~/types";

interface Props {
  todoItem: TodoItem;
  deleteTodo: (id: number) => void;
}

const TodoListItem = ({ todoItem, deleteTodo }: Props) => {
  return (
    <div>
      <div>{todoItem.text}</div>
      <div onClick={() => deleteTodo(todoItem.id)}>X</div>
    </div>
  );
};

export default TodoListItem;

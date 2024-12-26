import { create } from "zustand";

interface State {
  todoLists: List[];
  createList: (list: List) => void;
  deleteList: (id: number) => void;
}

interface List {
  taskCount: number;
  createdDate: Date;
  title: string;
  id: number;
}

const initialLists: List[] = [
  {id: 1, createdDate: new Date(), taskCount: 0, title: 'Мой список дел'},
  {id: 2, createdDate: new Date(), taskCount: 0, title: 'Мой список дел 2'}
]


export const useStore = create<State>((set) => ({
  todoLists: initialLists,
  createList: (list) =>
    set((state) => ({
      todoLists: [...state.todoLists, list],
    })),
  deleteList: (id) =>
    set((state) => ({
      todoLists: state.todoLists.filter((list) => list.id !== id),
    })),
}));

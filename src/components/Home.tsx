import { useStore } from '../store/store.ts'
import styled from 'styled-components'
import { COLORS } from '../shared/colors.ts'


const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${COLORS.primary_bg};
  border-radius: 7px;
  width: 50%;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
  justify-self: center;
`

const ListItem = styled.li`
 display: flex;
 flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid ${COLORS.border_bg};
  max-width: 450px;
`

const Title = styled.div`
  font-size: 18px;
  padding: 10px;
`

const CreatedDate = styled.div`
margin-left: auto;
font-size: 14px;
font-style: italic;
`


export default function HomeComponent() {
  const todoLists = useStore(state => state.todoLists)
  return (
    <div>
      {/* Обзор Списков Дел:
   - Список всех Todo-листов: Отображение всех списков дел с краткой информацией (например, количество задач, количество выполненных).
   - Кнопка добавления нового списка: Для быстрого создания нового списка дел. */}
      <List>
        {todoLists.map(list => <ListItem key={list.id}>
          <Title>{list.title}</Title>
          <CreatedDate>
            <div>Создан: {list.createdDate.toLocaleDateString()}</div>
          </CreatedDate>
        </ListItem>)}
      </List>
    </div>
  )
}
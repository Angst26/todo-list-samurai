import styled from "styled-components"

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus{
    border-color: #3498db;
    outline: none;
  }
`

export const SearchComponent = () => (
  <SearchContainer>
            <SearchInput type='text' placeholder='Введите название задачи'/>
          </SearchContainer>
)

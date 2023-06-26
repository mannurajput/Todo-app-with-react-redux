import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteData,editData } from './stores/slices/ReduxSlices'
 import { useSelector } from 'react-redux/es/hooks/useSelector'
const TodoList = () => {
    const dispatch = useDispatch()
    const todoData = useSelector((state) => {
        return state.users;
    })
    const deleteFn = (id) => {
        dispatch(deleteData(id))
    }
    const editFn = (id) => {
          dispatch(editData(id));
      };
  return (
      <div>{
          todoData.map((item, id) => {
              return (
                  <ul key={id}>
                      <li>{item}
                          <button onClick={()=>editFn(id)} >Edit</button>
                          <button onClick={()=>deleteFn(id)}>Delete</button>
                      </li>
                  </ul>
              )
          })
      }
        </div>
  )
}

export default TodoList
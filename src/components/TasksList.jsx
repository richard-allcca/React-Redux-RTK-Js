import { useDeleteTasksMutation, useGetTasksQuery, useUpdateTaskMutation } from "../api/apiSlice";


export const TasksList = () => {

   const { data, isError, isLoading, error } = useGetTasksQuery();
   const [ deleteTask ] = useDeleteTasksMutation()
   const [ updateTask ] = useUpdateTaskMutation()

   if (isLoading) return <div>Loading...</div>
   else if (isError) return <div>Error: { error.message }</div>

   const onUpdateTask = (newTask) => {
      // console.log(newTask)
      updateTask(newTask)
   }

   const onDeleted = (id) => {
      // console.log(id)
      deleteTask(id);
   }

   return (
      <ul>
         {
            data.map((task, i) => (
               <li key={ i }>
                  <h3>{ task.name }</h3>
                  <p>{ task.description }</p>

                  <button onClick={ () => onDeleted(task.id) } >delete</button>

                  <input
                     type="checkbox"
                     id={ task.id }
                     checked={ task.completed }
                     onChange={ (e) => onUpdateTask({
                        ...task,
                        completed: e.target.checked
                     }) }
                  />
                  <label htmlFor={ task.id }>completed</label>
               </li>
            ))
         }
      </ul>
   )
}

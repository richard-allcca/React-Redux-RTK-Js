import { useCreateTasksMutation } from "../api/apiSlice";


export const TaskForm = () => {

   const [ createTask ] = useCreateTasksMutation()

   const handleSubmit = (e) => {
      e.preventDefault();

      const name = e.target.name.value
      const description = e.target.description.value
      const completed = e.target.completed.value

      createTask({
         name,
         description,
         completed
      })
   }

   return (
      <form onSubmit={ handleSubmit }>
         <input type="text" name="name" />
         <input type="text" name="description" />
         <input type="checkbox" name="completed" />
         <button>Add Task</button>
      </form>
   )
}

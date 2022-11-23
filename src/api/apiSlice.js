
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
   endpoints: (builder) => ({
      getTasks: builder.query({
         query: () => '/tasks',
         transformResponse: res => res.sort((a, b) => b.id - a.id),
         providesTags: [ "Tasks" ]
      }),
      createTasks: builder.mutation({
         query: (newTask) => ({
            url: "/tasks",
            method: "POST",
            body: newTask
         }),
         invalidatesTags: [ "Tasks" ],
      }),
      deleteTasks: builder.mutation({
         query: (id) => ({
            url: `/tasks/${id}`,
            method: "DELETE"
         }),
         invalidatesTags: [ "Tasks" ]
      }),
      updateTask: builder.mutation({
         query: (newTask) => ({
            url: `/tasks/${newTask.id}`,
            method: 'PATCH',
            body: newTask
         }),
         invalidatesTags: [ "Tasks" ]
      })
   })
})

export const {
   useGetTasksQuery,
   useCreateTasksMutation,
   useDeleteTasksMutation,
   useUpdateTaskMutation
} = apiSlice;

// NOTE - prividesTags: le da un nombre a la petición get para usarlo en las sgtes
// NOTE - invalidatesTags: usa el nombre dado en providesTags para volver a ejecutar esa peticion (algo parecido a actualizar el estado)
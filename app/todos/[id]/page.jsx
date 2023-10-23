


export const metadata = {
    title: 'Meu Todo',
    description: 'Descrição do meu Todo',
  }



export default async function todos({ params}) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const todo = await data.json()
    return (
        <h2>Todo { todo.title } </h2>
    )
}
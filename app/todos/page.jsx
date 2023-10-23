export const metadata = {
    title: 'Lista de Todos',
    description: 'Página onde são exibidos os Todos',
  }

const getData = async function() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos", {
        next: {
            revalidate: 60
        }
    })
    const todos = await data.json()
    return todos
}

export default async function todos() {
    const todos = await getData()
    return (
        <>
            <h2>Todos </h2>
            <ul>
                {todos.map(todo => <li>{todo.title}</li> )}
            </ul>            
        </>        
    )
}
import usePosts from "../../services/usePosts"
import useTodos from "../../services/useTodos";

import BarChartPosts from "./components/BarChartPosts";
import PieChartTodos from "./components/PieChartPosts";
export default function Charts() {
  const { data:posts } = usePosts()
  const { data:todos } = useTodos()

  return (
    <>
      <div style={{ display: 'grid', height: '100vh', width: '100%', gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <h2>Post By User</h2>
          <BarChartPosts data={posts} />
        </div>
        <div>
          <h2>Completed Todos</h2>
          <PieChartTodos data={todos} />
        </div>
      </div>
    </>
  )
}
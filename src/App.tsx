import { useQuery } from "@tanstack/react-query"
import { getUser } from "./services"
import { PositionsList } from "./components/PositionsList"

function App() {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser
  })

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen text-gray-500">Loading...</div>
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">Error: {error.message}</div>
  }

  if (user) return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="w-full md:max-w-4xl lg:max-w-7xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Job Applications</h1>
          <p className="text-gray-600">
            Welcome, <span className="font-medium text-gray-900">{user.firstName} {user.lastName}</span> ({user.email})
          </p>
        </header>

        <main>
          <PositionsList user={user} />
        </main>
      </div>
    </div>
  )
}

export default App

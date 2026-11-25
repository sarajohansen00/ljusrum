import { createFileRoute } from '@tanstack/react-router'
import { WorkshopCard } from '../components/WorkshopCard'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <h1>Fotoworkshopen</h1>
      <WorkshopCard />
    </>
  )
}

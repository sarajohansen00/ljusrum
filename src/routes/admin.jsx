import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: Admin,
  head: () => ({ meta: [{ title: 'Admin · Fotoworkshopen' }] }),
})

function Admin() {
  return (
    <>
      <h1>Kurstillfällen</h1>
      <p>Här bygger du arrangörens vy för tillfällen och bokningar.</p>
    </>
  )
}

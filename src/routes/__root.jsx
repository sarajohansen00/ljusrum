import { createRootRoute, HeadContent, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Layout,
  head: () => ({ meta: [{ title: 'Fotoworkshopen' }] }),
  notFoundComponent: () => <h1>Sidan finns inte</h1>,
})

function Layout() {
  return (
    <div className="site">
      <HeadContent />
      <nav aria-label="Huvudmeny">
        <Link to="/" activeOptions={{ exact: true }}>Hem</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <main><Outlet /></main>
    </div>
  )
}

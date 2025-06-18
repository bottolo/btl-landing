import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/substack/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about"!</div>
}

import { createFileRoute, redirect } from '@tanstack/react-router'

// Old address kept so existing links to /ai-lab still land on /lab.
export const Route = createFileRoute('/ai-lab')({
  beforeLoad: () => {
    throw redirect({ to: '/lab', statusCode: 301 })
  },
})

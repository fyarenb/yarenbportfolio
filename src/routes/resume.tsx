import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/resume')({ component: ResumeRedirect })

function ResumeRedirect() {
  return <Navigate to="/about" replace />
}

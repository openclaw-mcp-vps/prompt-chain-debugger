import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Chain Debugger — Debug AI Prompt Chains Visually',
  description: 'Visual debugger for complex AI prompt chains showing token flow, costs, and failure points. Built for AI engineers and prompt engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e079cdd4-5eb7-4fc4-9670-be15d421dec4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}

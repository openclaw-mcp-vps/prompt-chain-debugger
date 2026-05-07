export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-24">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-mono px-3 py-1 rounded-full mb-6">
          AI Development Tool
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Debug Multi-Step AI Prompt Chains{' '}
          <span className="text-[#58a6ff]">Visually</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          See exactly where your prompt chains break. Track token flow, measure costs per step, and pinpoint failures in real time — no more guessing.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Debugging — $29/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149]"></span>
            <span className="w-3 h-3 rounded-full bg-[#d29922]"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950]"></span>
            <span className="text-[#8b949e] text-xs ml-2">chain-debug.log</span>
          </div>
          <div className="space-y-2 text-xs">
            <div><span className="text-[#3fb950]">✓</span> <span className="text-[#8b949e]">Step 1 — System Prompt</span> <span className="text-[#58a6ff]">312 tokens</span> <span className="text-[#8b949e]">$0.0009</span></div>
            <div><span className="text-[#3fb950]">✓</span> <span className="text-[#8b949e]">Step 2 — Context Injection</span> <span className="text-[#58a6ff]">1,204 tokens</span> <span className="text-[#8b949e]">$0.0036</span></div>
            <div><span className="text-[#f85149]">✗</span> <span className="text-[#8b949e]">Step 3 — Summarizer</span> <span className="text-[#f85149]">context_length_exceeded</span></div>
            <div><span className="text-[#8b949e]">  └─ Expected: &lt;4096 tokens · Got: 5,812 tokens</span></div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] text-sm font-semibold mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to debug prompt chains at scale.</p>
          <ul className="space-y-3 text-sm mb-8">
            {[
              'Visual chain diagram with React Flow',
              'Real-time token & cost tracking',
              'Failure point detection & alerts',
              'WebSocket live debugging sessions',
              'Export chains as JSON or YAML',
              'Unlimited chains & steps'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What AI providers are supported?',
              a: 'OpenAI, Anthropic, Mistral, and any OpenAI-compatible endpoint. Bring your own API keys — we never store them.'
            },
            {
              q: 'How does real-time debugging work?',
              a: 'Each chain step streams results via WebSocket. You see token counts, latency, and output as each node executes — no page refresh needed.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing dashboard at any time. You keep access until the end of your billing period.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-[#30363d] pb-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}

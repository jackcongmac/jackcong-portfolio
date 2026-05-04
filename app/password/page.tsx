'use client'

import { useState, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'

export default function PasswordPage() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const from = searchParams.get('from') ?? '/'
    const res = await fetch(`/api/auth?from=${encodeURIComponent(from)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: value }),
    })

    setLoading(false)

    if (res.ok) {
      router.push(from)
      router.refresh()
    } else {
      setError('Incorrect password. Please try again.')
      setValue('')
      inputRef.current?.focus()
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'var(--color-canvas)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm"
      >
        {/* Logo / Name */}
        <p
          className="text-xs tracking-[0.25em] uppercase mb-12 text-center"
          style={{ color: 'var(--color-secondary)', fontFamily: 'var(--font-gt-extended)' }}
        >
          Jack Cong
        </p>

        {/* Title */}
        <h1
          className="text-2xl mb-2 text-center"
          style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-gt-standard)' }}
        >
          Private Portfolio
        </h1>
        <p
          className="text-sm mb-10 text-center"
          style={{ color: 'var(--color-secondary)', fontFamily: 'var(--font-gt-standard)' }}
        >
          Enter the password to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Password"
              required
              autoFocus
              className="w-full px-4 py-3 bg-transparent border text-sm outline-none transition-colors placeholder:opacity-40"
              style={{
                borderColor: error ? '#e05c5c' : 'var(--color-line)',
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-gt-standard)',
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = error ? '#e05c5c' : 'var(--color-gold)')
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = error ? '#e05c5c' : 'var(--color-line)')
              }
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs"
              style={{ color: '#e05c5c', fontFamily: 'var(--font-gt-standard)' }}
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={loading || !value}
            className="py-3 text-xs tracking-[0.2em] uppercase transition-opacity disabled:opacity-40"
            style={{
              background: 'var(--color-gold)',
              color: 'var(--color-canvas)',
              fontFamily: 'var(--font-gt-extended)',
            }}
          >
            {loading ? 'Verifying…' : 'Enter'}
          </button>
        </form>

        {/* Divider */}
        <div className="mt-16 border-t" style={{ borderColor: 'var(--color-line)' }} />
        <p
          className="mt-4 text-xs text-center"
          style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-gt-standard)' }}
        >
          © {new Date().getFullYear()} Jack Cong
        </p>
      </motion.div>
    </main>
  )
}

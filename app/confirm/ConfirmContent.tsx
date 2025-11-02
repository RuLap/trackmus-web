'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ConfirmContent() {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const userId = searchParams.get('userId')

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')

  useEffect(() => {
    if (!code || !userId) {
      setStatus('error')
      return
    }

    const confirmEmail = async () => {
      try {
        const res = await fetch(`https://api.trackmus.ru/auth/email/confirm`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code, userId }),
        })

        if (!res.ok) throw new Error('Ошибка подтверждения')

        setStatus('success')
      } catch (err) {
        setStatus('error')
      }
    }

    confirmEmail()
  }, [code, userId])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'
    }}>
      {status === 'loading' && <p>Подтверждение почты...</p>}
      {status === 'success' && <p>Почта успешно подтверждена! Теперь можно вернуться в приложение.</p>}
      {status === 'error' && <p>Ошибка подтверждения. Попробуйте снова.</p>}
    </div>
  )
}
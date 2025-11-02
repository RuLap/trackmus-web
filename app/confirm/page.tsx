import { Suspense } from 'react'
import ConfirmContent from './ConfirmContent'

export default function ConfirmPage() {
  return (
    <Suspense fallback={<div>Подтверждение почты...</div>}>
      <ConfirmContent />
    </Suspense>
  )
}
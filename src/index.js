import subscribe from 'callbag-subscribe'
import { useEffect, useState } from 'react'

export default function useCallbag(factory) {
  const [state, setState] = useState()
  useEffect(() => subscribe(setState)(factory()), [])
  return state
}

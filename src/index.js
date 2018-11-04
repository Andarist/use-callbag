import subscribe from 'callbag-subscribe'
import { useEffect, useState } from 'react'

const ONCE = []

export default function useCallbag(initialState, factory) {
  const [state, setState] = useState(initialState)
  useEffect(() => subscribe(setState)(factory(initialState)), ONCE)
  return state
}

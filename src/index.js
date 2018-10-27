import { useEffect, useState } from 'react'
import subscribe from 'callbag-subscribe'

export default factory => {
  const [state, setState] = useState()
  useEffect(() => subscribe(setState)(factory()), [])
  return state
}

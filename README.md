# use-callbag

Use callbag as React hook.

## Example

```jsx
import interval from 'callbag-interval'
import map from 'callbag-map'
import pipe from 'callbag-pipe'
import useCallbag from 'use-callbag'

export default function Counter({ initialCount }) {
  const count = useCallbag(initialCount, () =>
    pipe(
      interval(1000),
      map(i => initialCount + i + 1),
    ),
  )
  return <span>{`Counter: ${count}`}</span>
}
```

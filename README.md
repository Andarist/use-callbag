# use-callbag

Use callbag as React hook.

## Example

```jsx
import interval from 'callbag-interval'
import map from 'callbag-map'
import pipe from 'callbag-pipe'
import useCallbag from 'use-callbag'

export default function Counter(props) {
  const count = useCallbag(0, () =>
    pipe(
      interval(1000),
      map(i => i + 1),
    ),
  )
  return <span>{`Counter: ${count}`}</span>
}
```

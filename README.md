# use-callbag

Use callbag as React hook.

## Example

```jsx
import interval from 'callbag-interval'
import useCallbag from 'use-callbag'

export default function Counter(props) {
  const count = useCallbag(() => interval(1000))
  return <span>{`Counter: ${count}`}</span>
}
```

import { Source } from 'callbag'

export default function useCallbag<T>(initialState: T, factory: (initialState: T) => Source<T>): T

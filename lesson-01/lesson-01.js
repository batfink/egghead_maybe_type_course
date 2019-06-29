import { inc } from '../utils'
import Maybe from 'crocks/Maybe'

const safeNum = (val) =>
  typeof val === 'number' ? Maybe.Just(val) : Maybe.Nothing

const input = safeNum(6)
const result = input.map(inc)

console.log(result)

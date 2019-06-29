import { inc, toUpper } from '../utils'
import Maybe from 'crocks/Maybe'
import safe from 'crocks/Maybe/safe'
import isNumber from 'crocks/predicates/isNumber'
import isString from 'crocks/predicates/isString'

const safeNum = safe(isNumber)

const inputN = safeNum(5)
const resultN = inputN.map(inc) //?

const inputS = safe(isString, 'test')
const resultS = inputS.map(toUpper) //?

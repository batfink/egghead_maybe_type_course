import safe from 'crocks/Maybe/safe'
import isNumber from 'crocks/predicates/isNumber'
import compose from 'crocks/helpers/compose'
import { inc, dbl } from '../utils'

const incDbl = (n) =>
  safe(isNumber, n)
    .map(
      compose(
        dbl,
        inc,
      ),
    )
    .option(0)

const result = incDbl(2) //?

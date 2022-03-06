import { isDate, parse } from 'date-fns'

export const parseDateString = <T, Y>(
  _val: Y,
  originalValue: T | string
): Date => {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue as string, 'yyyy-MM-dd', new Date())

  return parsedDate as Date
}

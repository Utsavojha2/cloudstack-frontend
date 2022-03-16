import { isDate, parse } from 'date-fns'
import i18n from 'i18next'

export const parseDateString = <T, Y>(
  _val: Y,
  originalValue: T | string
): Date => {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue as string, 'yyyy-MM-dd', new Date())

  return parsedDate as Date
}

export const isRequiredValidation = (key: string) =>
  i18n.t('requiredValidation', { key: i18n.t(key) })

import { isDate, parse } from 'date-fns';
import i18n from 'i18next';

export const parseDateString = <T, Y>(
  _val: Y,
  originalValue: T | string
): Date => {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue as string, 'yyyy-MM-dd', new Date());

  return parsedDate as Date;
};

export const isRequiredValidation = (key: string) =>
  i18n.t('requiredValidation', { key: i18n.t(key) });

type IErrorResponse = {
  errormessage: string;
  top: number;
};

// mui only allows one toast message at a time
// for toast messages to stack on top of each other
export const getToastErrorMessages = (errors: string[]) => {
  return errors.reduce<Array<IErrorResponse>>((accumulator, msgItem, idx) => {
    if (!idx || idx === 1) {
      accumulator[idx] = { errormessage: msgItem, top: !idx ? 24 : 84 };
      return accumulator;
    }
    accumulator[idx] = {
      errormessage: msgItem,
      top:
        accumulator[idx - 1].top +
        (accumulator[idx - 1].top - accumulator[idx - 2].top),
    };

    return accumulator;
  }, []);
};

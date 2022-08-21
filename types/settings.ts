export enum IModalType {
  PROFILE_RESIZE_MODAL = 'profile-resize-modal',
  COVER_RESIZE_MODAL = 'cover-resize-modal',
  FORM_EXIT_MODAL = 'form-exit-modal',
}

export enum IDateType {
  START_DATE = 'startDate',
  END_DATE = 'endDate',
}

interface IEmploymentHistoryInfo {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  isCurrentlyWorkingHere?: boolean;
}

export interface ISettingsInfo {
  fullName: string;
  emailAddress: string;
  location: string;
  role: string;
  countryCode: string;
  bio?: string;
  imageScale: number;
  employmentHistory: Array<IEmploymentHistoryInfo> | null;
}

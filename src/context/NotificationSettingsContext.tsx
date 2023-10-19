import {createContext, Dispatch, SetStateAction} from 'react';

export interface INotificationSettings {
  [key: string]: boolean;
}

export const NotificationSettingsContext =
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  createContext<[INotificationSettings, Dispatch<SetStateAction<INotificationSettings>>]>();

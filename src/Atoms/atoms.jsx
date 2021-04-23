import {
    atom,
    atomFamily,
    DefaultValue,
    selector,
    selectorFamily,
  } from "recoil";
  
// notification
export const commonNotification = atom({
    key: 'commonNotification',
    default: {
      isVisible: false,
      message: ''
    }
  })
  
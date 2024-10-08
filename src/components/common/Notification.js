// src/components/common/Notification.js
import { toast } from "react-toastify";

// Success Notification
export const notifySuccess = (message) => {
  toast.success(message, {
    position: "top-right",
  });
};

// Error Notification
export const notifyError = (message) => {
  toast.error(message, {
    position: "top-right",
  });
};

// Info Notification
export const notifyInfo = (message) => {
  toast.info(message, {
    position: "top-right",
  });
};

// Warning Notification
export const notifyWarning = (message) => {
  toast.warn(message, {
    position: "top-right",
  });
};

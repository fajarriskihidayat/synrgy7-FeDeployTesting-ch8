import { ToastOptions, toast as showToast } from "react-toastify";

const toast = (msg: string, options?: ToastOptions) => {
  return showToast(msg, options);
};

export default toast;

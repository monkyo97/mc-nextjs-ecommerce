import { toast } from "react-toastify";

export class NotificacionToastComponent {
  static getInfo(message: string): void {
    toast.info(message, {
      position: "top-right",
      autoClose: 500,
    });
  }

  static getWarning(message: string): void {
    toast.warning(message, {
      position: "top-right",
      autoClose: 1000,
    });
  }

  static getSuccess(message: string): void {
    toast.success(message, {
      position: "top-right",
      autoClose: 1000,
    });
  }
}

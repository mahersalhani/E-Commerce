import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// to make notifications to any components
const notify = (msg, type) => {
  if (type === "success") {
    toast.success(msg);
  }
  if (type === "warn") {
    toast.warn(msg);
  }
  if (type === "error") {
    toast.error(msg);
  }
};

export default notify;

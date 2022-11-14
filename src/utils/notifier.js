import { toast } from 'react-toastify';

class Toast {
    success(message) {
        toast.success(message);
    }

    info(message) {
        toast.info(message);
    }

    warning(message) {
        toast.warning(message);
    }

    error(message) {
        toast.error(message);
    }
}

const notifier = new Toast();

export default notifier;

import Swal, { SweetAlertIcon } from "sweetalert2";

export const showMessage = (msg = '', type = 'success') => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: type as SweetAlertIcon,
        title: msg,
        padding: '10px 20px',
    });
};

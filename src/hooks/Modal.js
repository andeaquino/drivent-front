import Swal from "sweetalert2";

export function Modal(message) {
  return Swal.fire({
    text: message,
    icon: "question",
    showDenyButton: true,
    confirmButtonText: "Sim",
    denyButtonText: "Não",
    confirmButtonColor: "#ED6796",
    denyButtonColor: "#FFD680",
  });
}

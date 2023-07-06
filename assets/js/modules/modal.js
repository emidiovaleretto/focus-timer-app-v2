const Modal = {
  modalContainer: document.querySelector(".feedback-form"),
  btnClose: document.querySelector(".btn-close"),
  open() {
    Modal.modalContainer.classList.remove("hidden")
  },
  close() {
    Modal.modalContainer.classList.add("hidden")
    Modal.modalContainer.querySelector("form").reset()
  },
}

Modal.btnClose.addEventListener("click", Modal.close)

export default Modal

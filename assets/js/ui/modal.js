// Modal logic
window.addEventListener("DOMContentLoaded", () => {
    const modalBtn = document.querySelectorAll("[modal-trigger-id]");
    const allModal = document.querySelectorAll("[modal-id]");

    allModal.forEach((modal) => {
        const modalContent = modal.querySelector(".modal-content");
        const modalWidth = modal.getAttribute("modal-width")?.trim();

        if (modalContent) {
            modalContent.style.maxWidth = modalWidth || "50rem";

            const modalCloseBtn = document.createElement("button");
            modalCloseBtn.className = "modal-close-btn";

            const modalCloseIcon = document.createElement("iconify-icon");
            modalCloseIcon.setAttribute("icon", "ic:round-close");
            modalCloseBtn.appendChild(modalCloseIcon);

            modalContent.appendChild(modalCloseBtn);

            modalCloseBtn.addEventListener("click", () => {
                modal.classList.remove("show-modal");
            });
        }
    });

    modalBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            const modalBtnID = btn.getAttribute("modal-trigger-id")?.trim();

            allModal.forEach((modal) => {
                const modalID = modal.getAttribute("modal-id")?.trim();

                if (modalID === modalBtnID) {
                    modal.classList.toggle("show-modal");

                    const clickOutsideHandler = (e) => {
                        if (e.target === modal) {
                            modal.classList.remove("show-modal");
                            window.removeEventListener("click", clickOutsideHandler);
                        }
                    };
                    window.addEventListener("click", clickOutsideHandler);

                    const keyDownHandler = (e) => {
                        if (e.key === "Escape") {
                            modal.classList.remove("show-modal");
                            document.removeEventListener("keydown", keyDownHandler);
                        }
                    };
                    document.addEventListener("keydown", keyDownHandler);
                }
            });
        });
    });
});

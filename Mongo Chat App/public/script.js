
function confirmDelete(event) {
    const isConfirmed = confirm("Are you sure you want to delete this chat?");
    if (!isConfirmed) {
        event.preventDefault(); 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const deleteForms = document.querySelectorAll(".delete-form");
    deleteForms.forEach((form) => {
        form.addEventListener("submit", confirmDelete);
    });
});

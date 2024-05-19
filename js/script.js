
document.addEventListener("DOMContentLoaded", () => {
  const mailItems = document.querySelectorAll(".mail-item");
  const markReadButton = document.getElementById("mark-read");
  const counter = document.querySelector(".counter");

  // update unread messages counter
  const updateCounter = () => {
    const unreadCount = document.querySelectorAll(".mail-item.unread").length;
    counter.textContent = unreadCount;
  };

  // mark individual email as read on click
  mailItems.forEach((mail) => {
    mail.addEventListener("click", () => {
      mail.classList.remove("unread");
      mail.classList.add("read");
      updateCounter();
    });
  });

  // mark all emails as read on button click
  markReadButton.addEventListener("click", () => {
    mailItems.forEach((mail) => {
      mail.classList.remove("unread");
      mail.classList.add("read");
    });
    updateCounter();
  });

  // initialize counter
  updateCounter();
});

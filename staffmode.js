const form = document.querySelector("form");
      const submitBtn = document.querySelector(".primary-btn");

      if (submitBtn) {
        submitBtn.addEventListener("click", () => {
          const memberId = document.getElementById("memberId")?.value || "";
          const bookId = document.getElementById("bookId")?.value || "";
          const actionType = document.getElementById("actionType")?.value || "Check out";

          if (!memberId || !bookId) {
            alert("Please fill in the member and book information.");
            return;
          }

          alert(`${actionType} submitted for ${memberId} on ${bookId}.`);
          form.reset();
        });
      }
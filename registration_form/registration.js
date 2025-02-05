// https://www.linkedin.com/in/atakangk/
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
  if (animating) return false;

  // Validation for the first fieldset
  if ($(this).parent().find("#fullName").length > 0) {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const dob = document.getElementById("dob").value.trim();

    const fullNameError = document.getElementById("fullNameError");
    const emailError = document.getElementById("emailError");
    const phoneNumberError = document.getElementById("phoneNumberError");
    const dobError = document.getElementById("dobError");

    let isValid = true;

    // Validate full name (letters only)
    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      fullNameError.style.display = "block";
      isValid = false;
    } else {
      fullNameError.style.display = "none";
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Validate phone number (11 digits)
    if (!/^\d{11}$/.test(phoneNumber)) {
      phoneNumberError.style.display = "block";
      isValid = false;
    } else {
      phoneNumberError.style.display = "none";
    }

    // Validate date of birth
    if (!dob) {
      dobError.style.display = "block";
      isValid = false;
    } else {
      dobError.style.display = "none";
    }

    if (!isValid) {
      return false;
    }
  }

  // Validation for the second fieldset
  if ($(this).parent().find("#archdeaconry").length > 0) {
    const archdeaconry = document.getElementById("archdeaconry").value;
    const churchName = document.getElementById("churchName").value.trim();

    const archdeaconryError = document.getElementById("archdeaconryError");
    const churchNameError = document.getElementById("churchNameError");

    let isValid = true;

    // Validate archdeaconry selection
    if (!archdeaconry) {
      archdeaconryError.style.display = "block";
      isValid = false;
    } else {
      archdeaconryError.style.display = "none";
    }

    // Validate church name (at least 10 characters)
    if (churchName.length < 10) {
      churchNameError.style.display = "block";
      isValid = false;
    } else {
      churchNameError.style.display = "none";
    }

    if (!isValid) {
      return false;
    }
  }

  // Validation for the third fieldset (photo upload)
  if ($(this).parent().find("#photoUpload").length > 0) {
    const photoUpload = document.getElementById("photoUpload").files[0];
    const errorMessage = document.getElementById("errorMessage");
    const photoError = document.getElementById("photoError");

    let isValid = true;

    // Validate photo upload
    if (!photoUpload) {
      photoError.style.display = "block";
      isValid = false;
    } else {
      photoError.style.display = "none";
      if (photoUpload.size > 2.5 * 1024 * 1024) {
        // 2.5MB in bytes
        errorMessage.style.display = "block";
        isValid = false;
      } else {
        errorMessage.style.display = "none";
      }
    }

    if (!isValid) {
      return false;
    }
  }

  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = now * 50 + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          transform: "scale(" + scale + ")",
          position: "absolute",
        });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //deactivate current step on progressbar
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity,
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

// Handle form submission
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Validation for the third fieldset (photo upload)
    const photoUpload = document.getElementById("photoUpload").files[0];
    const errorMessage = document.getElementById("errorMessage");
    const photoError = document.getElementById("photoError");

    let isValid = true;

    // Validate photo upload
    if (!photoUpload) {
      photoError.style.display = "block";
      isValid = false;
    } else {
      photoError.style.display = "none";
      if (photoUpload.size > 2.5 * 1024 * 1024) {
        // 2.5MB in bytes
        errorMessage.style.display = "block";
        isValid = false;
      } else {
        errorMessage.style.display = "none";
      }
    }

    if (!isValid) {
      return false;
    }

    // Log form data and image URL to console
    const formData = new FormData(document.querySelector("#registrationForm"));
    const reader = new FileReader();
    reader.onload = function (e) {
      formData.append("photoUpload", e.target.result);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // Show thank you alert
      alert("Thank you for submitting.");

      // Reset the form and go back to the first fieldset
      document.querySelector("#registrationForm").reset();
      $("fieldset")
        .css({ opacity: 1, transform: "scale(1)", position: "relative" })
        .hide();
      $("fieldset").first().show();
      $("#progressbar li").removeClass("active");
      $("#progressbar li").first().addClass("active");

      // Reset the photo preview
      document.getElementById("photoPreview").innerHTML =
        "<span>No photo uploaded</span>";
      animating = false;
    };
    reader.readAsDataURL(photoUpload);
  });

document
  .getElementById("photoUpload")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const errorMessage = document.getElementById("errorMessage");
    const photoPreview = document.getElementById("photoPreview");

    if (file) {
      if (file.size > 2.5 * 1024 * 1024) {
        // 2.5MB in bytes
        errorMessage.style.display = "block";
        photoPreview.innerHTML = "<span>No photo uploaded</span>";
      } else {
        errorMessage.style.display = "none";
        const reader = new FileReader();
        reader.onload = function (e) {
          photoPreview.innerHTML =
            '<img src="' +
            e.target.result +
            '" style="max-width: 100%; max-height: 100%;" />';
        };
        reader.readAsDataURL(file);
      }
    } else {
      photoPreview.innerHTML = "<span>No photo uploaded</span>";
    }
  });

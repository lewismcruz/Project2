$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const firstName = $("input#firstName-input");
  const lastName = $("input#lastName-input");
  const weight = $("input#weight-input");
  const height = $("input#height-input");
  const gender = $("input#gender-input");



  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim(),
      weight: weight.val().trim(),
      height: height.val().trim(),
      gender: gender.val().trim()
    };
    if (!userData.email || !userData.password) {
      return;
    }
    // eslint-disable-next-line prettier/prettier
    console.log (userData.email, userData.password, userData.firstName, userData.lastName, userData.weight, userData.height, userData.gender)
    // If we have an email and password, run the signUpUser function
    // eslint-disable-next-line prettier/prettier
    signUpUser(userData.email, userData.password, userData.firstName, userData.lastName, userData.weight, userData.height, userData.gender);
    emailInput.val("");
    passwordInput.val("");
    firstName.val("");
    lastName.val("");
    weight.val("");
    height.val("");
    gender.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  // eslint-disable-next-line prettier/prettier
  function signUpUser(email, password, firstName, lastName, weight, height, gender) {
    $.post("/api/signup", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      weight: weight,
      height: height,
      gender: gender
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

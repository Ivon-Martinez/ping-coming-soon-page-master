function validateEmail(email) {
    let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return res.test(email);
  }
  function validate() {
    let result = $("#result");
    let email = $("#email").val();
    result.text("");
    if(validateEmail(email)) {
      result.text(email + " is valid");
      result.css("color", "blue");
    } else {
      result.text(email + " is not valid");
      result.css("color", "red");
    }
    return false;
  }
  $("#validate").on("click", validate);
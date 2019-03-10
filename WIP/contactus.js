function validate_email (field, alerttxt) {
   with (field) {
      apos = value.indexOf ("@");
      dotpos = value.lastIndexOf (".");
      
      if (apos < 1 || dotpos - apos<2) {
        alert(alerttxt);
        return false;
      } else {
         return true;
      }
   }
}
   
function fname_valid (field, alerttxt) {
   with (field) {
      if (value == null || value == "") {
         alert (alerttxt);
         return false;
      } else {
         return true;
      }
   }
}

function f7_valid (field, alerttxt) {
   with (field) {
      if (value == null || value == "") {
         alert (alerttxt);
         return false;
      } else {
         return true;
      }
   }
}

function validate_form (thisform) {
   with (thisform) {
      if (fname_valid (firstname, "Please Enter Your First Name!") == false) {
         firstname.focus();
         return false;
      } else if (fname_valid (lastname, "Please Enter Your Last Name!") == false) {
         lastname.focus();
         return false;
      } else if (fname_valid (address, "Please Enter Your Address!") == false) {
         address.focus();
         return false;
      } else if (fname_valid (city, "Please Enter Your City!") == false) {
         city.focus();
         return false;
      } else if (fname_valid (state, "Please Enter State!") == false) {
         state.focus();
         return false;
      } else if (fname_valid (zip, "Please Enter Zip!") == false) {
         zip.focus();
         return false;
      } else if (f7_valid (areacode, "Please Enter Area Code!") == false) {
         areacode.focus();
         return false;
      } else if (f7_valid (phone, "Please Enter Your Phone No.") == false) {
         phone.focus();
         return false
      } else if (validate_email (email, "Not a valid e-mail address!") == false) {
         email.focus();
         return false;
      } else if (fname_valid (interests, "Please Enter Your Interests!") == false) {
         interests.focus();
         return false;
      }
   }
}

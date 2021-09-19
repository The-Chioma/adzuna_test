    const validate = () => {
        //getting the form elements by their IDs from the HTML
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const notes = document.getElementById("notes").value;
        const error_message = document.getElementById("error_message");
        
        error_message.style.padding = "10px";
        
        //this checks to see that the name inputes is more than 4 characters
        if(name.length < 4){
          let text = "Please Enter A Valid Name";
          error_message.innerHTML = text;
          return false;
        }
        //this validates the email
        if(email.indexOf("@") == -1 || email.length < 6){
          let text = "Please Enter A Valid Email";
          error_message.innerHTML = text;
          return false;
        }
        //this checks that the notes are at least 20 characters long
        if(notes.length <= 20){
          let text = "Please Enter At Least 20 Characters In Notes";
          error_message.innerHTML = text;
          return false;
        }
        //if all conditions are met, this clears the form and replaces it with a thank you message
        document.getElementById('wrapper').innerHTML = 'Thank you for completing the form!';
        return true;
      }  

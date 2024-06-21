document.addEventListener("DOMContentLoaded", function() {
    // Social media links
    const socialLinks = {
      github: "https://github.com/Sandhyaranipoola",
      linkedin: "https://linkedin.com/in/sandhya-rani-poola-7183922b6/",
      facebook: "https://facebook.com/profile.php?id=61561462313519",
      instagram: "https://instagram.com/sandhya_rani_always",
      
    };
 // Add event listeners to social icons
    document.getElementById("github").addEventListener("click", function() {
      window.open(socialLinks.github, "_blank");
    });
    document.getElementById("linkedin").addEventListener("click", function() {
      window.open(socialLinks.linkedin, "_blank");
    });
    document.getElementById("facebook").addEventListener("click", function() {
      window.open(socialLinks.facebook, "_blank");
    });
    document.getElementById("instagram").addEventListener("click", function() {
      window.open(socialLinks.instagram, "_blank");
    });
   
// Copy email to clipboard
    document.getElementById("copyEmail").addEventListener("click", function() {
      const emailText = document.getElementById("email").innerText;
      navigator.clipboard.writeText(emailText).then(function() {
        alert("Email address copied to clipboard");
      }, function(err) {
        console.error("Could not copy text: ", err);
      });
    });
  });

// contact
document.getElementById('send-message').addEventListener('click', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
// Validate form fields
  if (!firstName || !lastName || !email || !subject) {
      alert('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Message sent successfully!');
// Clear form fields after submission
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  });
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

//cv download
document.addEventListener('DOMContentLoaded', function() {
  var downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', function() {

      var fileUrl = 'https://1drv.ms/b/s!AjWWpz2AAjulbb2Wf23jYcRNG0w?e=AXX12L'; 
      
      var a = document.createElement('a');
      a.href = fileUrl;
      a.download = 'sandhyaresume.pdf'; 
      document.body.appendChild(a);
      a.click();
      
      document.body.removeChild(a);
  });
});


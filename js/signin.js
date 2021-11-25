const user_data = [
    {
        email,
      password,
    },
  ];
  
  if (localStorage.getItem("user_data") == null) {
    localStorage.setItem("user_data", JSON.stringify(user_data));
  }
  
  function check(e) {
    e.preventDefault();
  
    const form = document.getElementById("login");
  
    const email = getElementById("data1").value;
    const password = getElementById("data2").value;
  
    const admins = JSON.parse(localStorage.getItem("user_data"));
  
    for (let i = 0; i < admins.length; i++) {
      let u = admins[i].email;
      let p = admins[i].password;
      if (u === email && p === password) {
        window.location.href = "homepage.html";
        break;
      } else {
          alert("invalid Credentials");
          break;
      }
    }
  }
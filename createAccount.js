function store(e) {
    e.preventDefault();
    
  
    let email = document.getElementById("Email").value;
    console.log(email);
    let first_name = document.getElementById("first").value;
    let last_name = document.getElementById("last").value;
    let password = document.getElementById("createPassword").value;
    let Mobile = document.getElementById("Mobile").value;
  
    let user = {
      email,
      first_name,
      last_name,
      password,
      Mobile,
      // all_orders: []
    };
  
    let arr;
    arr = localStorage.getItem("all_users_data"); //locations
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("all_users_data"));
    }
  
    let flag = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (user.email == arr[i].email) {
        console.log("In the if condition")
        alert("User already exists, please login.")
        flag = 1;
        break;
      }
    }
  
    if (flag == 0) {
      arr.push(user);
      localStorage.setItem("all_users_data", JSON.stringify(arr));
    }
  
    window.location.href = 'signin.html';
  }
const supabase = window.supabase.createClient(
  "https://czkopmjmiksqmyqfuayz.supabase.co",
  "sb_publishable_2aXFNtKT0HdkMy26WiJ8Zg_OrAEmJAR"
);

document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name
      }
    }
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Registration Successful!");
    window.location.href = "login.html";
  }
});
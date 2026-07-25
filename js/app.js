const supabaseUrl = "https://czkopmjmiksqmyqfuayz.supabase.co";
const supabaseKey = "sb_publishable_2aXFNtKT0HdkMy26WiJ8Zg_OrAEmJAR";

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: name
      }
    }
  });

  if (error) {
    alert("Register Failed: " + error.message);
  } else {
    alert("Registration Successful! Check your email to verify your account.");
    window.location.href = "login.html";
  }
});
const supabaseUrl = "https://czkopmjmiksqmyqfuayz.supabase.co";
const supabaseKey = "sb_publishable_2aXFNtKT0HdkMy26WiJ8Zg_OrAEmJAR";

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

console.log("Supabase Connected");

document.getElementById("loginBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Login Failed: " + error.message);
  } else {
    alert("Login Successful!");
    window.location.href = "dashboard.html";
  }
});
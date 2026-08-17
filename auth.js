/* =========================================================
   LOK SEWA PREP NEPAL - SUPABASE AUTH
   ========================================================= */
const SUPABASE_URL = "https://lsupfbhjydrgsnlipyet.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_yb6j5sS3Qqo8P3tJC5S3dw_BWfgHwMg";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const $ = (id) => document.getElementById(id);

function setAuthMessage(text, type = "info") {
  const el = $("authMessage");
  if (!el) return;
  el.textContent = text;
  el.className = "auth-message show " + type;
}

function clearAuthMessage() {
  const el = $("authMessage");
  if (!el) return;
  el.textContent = "";
  el.className = "auth-message";
}

function togglePassword(id, btn) {
  const input = $(id);
  if (!input) return;
  input.type = input.type === "password" ? "text" : "password";
  if (btn) btn.textContent = input.type === "password" ? "👁" : "🙈";
}

function setLoading(form, loading, isLogin) {
  if (!form) return;
  const btn = form.querySelector(".auth-submit");
  if (!btn) return;
  btn.disabled = loading;
  btn.innerHTML = loading
    ? "⏳ Please wait..."
    : (isLogin ? "🔐 Login" : "🚀 Account बनाउनुहोस्");
}

function openAuthModal(mode = "login") {
  const modal = $("authModal");
  if (!modal) {
    if (mode === "signup") {
      window.location.href = "login.html?mode=signup";
    } else {
      window.location.href = "login.html";
    }
    return;
  }
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  showAuthMode(mode);
}

function closeAuthModal() {
  const modal = $("authModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showAuthMode(mode) {
  const loginForm = $("loginForm");
  const signupForm = $("signupForm");
  const loginTab = $("loginTab");
  const signupTab = $("signupTab");
  const title = $("authTitle");

  const isLogin = mode !== "signup";

  if (loginForm) loginForm.classList.toggle("hidden", !isLogin);
  if (signupForm) signupForm.classList.toggle("hidden", isLogin);
  if (loginTab) loginTab.classList.toggle("active", isLogin);
  if (signupTab) signupTab.classList.toggle("active", !isLogin);

  if (title) {
    title.textContent = isLogin
      ? "तपाईंको तयारीमा Login गर्नुहोस्"
      : "नयाँ Account बनाउनुहोस्";
  }
  clearAuthMessage();
}

async function createProfile(user, name, email) {
  if (!user) return;
  const { error } = await supabaseClient
    .from("profiles")
    .upsert(
      {
        id: user.id,
        full_name: name,
        email: email
      },
      { onConflict: "id" }
    );

  if (error) {
    console.warn("Profile save:", error.message);
  }
}

async function handleSignup(event) {
  event.preventDefault();

  const form = $("signupForm");
  const name = ($("signupName")?.value || "").trim();
  const email = ($("signupEmail")?.value || "").trim();
  const password = $("signupPassword")?.value || "";

  if (!name || !email || !password) {
    setAuthMessage("कृपया सबै जानकारी भर्नुहोस्।", "error");
    return;
  }

  if (password.length < 6) {
    setAuthMessage("Password कम्तीमा ६ अक्षरको हुनुपर्छ।", "error");
    return;
  }

  setLoading(form, true, false);
  clearAuthMessage();

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name }
    }
  });

  if (error) {
    setLoading(form, false, false);
    setAuthMessage("❌ " + error.message, "error");
    return;
  }

  if (data?.user) {
    await createProfile(data.user, name, email);
  }

  setLoading(form, false, false);
  form.reset();

  if (data?.session) {
    setAuthMessage("🎉 Account तयार भयो! तपाईं Login हुनुहुन्छ।", "success");
    await refreshAuthUI();
    setTimeout(() => {
      if ($("authModal")) closeAuthModal();
      if (window.location.pathname.endsWith("/login.html")) {
        window.location.href = "index.html";
      }
    }, 900);
  } else {
    setAuthMessage(
      "✅ Account तयार भयो। Email verification आवश्यक भए आफ्नो email जाँच गर्नुहोस्।",
      "success"
    );
  }
}

async function handleLogin(event) {
  event.preventDefault();

  const form = $("loginForm");
  const email = ($("loginEmail")?.value || "").trim();
  const password = $("loginPassword")?.value || "";

  if (!email || !password) {
    setAuthMessage("Email र password भर्नुहोस्।", "error");
    return;
  }

  setLoading(form, true, true);
  clearAuthMessage();

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  setLoading(form, false, true);

  if (error) {
    setAuthMessage("❌ " + error.message, "error");
    return;
  }

  setAuthMessage("🎉 Login सफल भयो!", "success");
  form.reset();
  await refreshAuthUI();

  setTimeout(() => {
    if ($("authModal")) closeAuthModal();
    if (window.location.pathname.endsWith("/login.html")) {
      window.location.href = "index.html";
    }
  }, 700);
}

async function handleLogout() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    setAuthMessage(error.message, "error");
    return;
  }

  const userBox = $("userBox");
  const authTabs = $("authTabs");
  const loginForm = $("loginForm");
  const signupForm = $("signupForm");
  const authNavBtn = $("authNavBtn");

  if (userBox) userBox.classList.add("hidden");
  if (loginForm) loginForm.classList.remove("hidden");
  if (signupForm) signupForm.classList.add("hidden");
  if (authTabs) authTabs.classList.remove("hidden");
  if (authNavBtn) authNavBtn.textContent = "👤 Login";

  showAuthMode("login");
  setAuthMessage("तपाईं Logout हुनुभयो।", "success");
}

async function refreshAuthUI() {
  const { data: { user } } = await supabaseClient.auth.getUser();

  const authNavBtn = $("authNavBtn");
  const userBox = $("userBox");

  if (!user) {
    if (authNavBtn) authNavBtn.textContent = "👤 Login";
    if (userBox) userBox.classList.add("hidden");
    return;
  }

  let name =
    user.user_metadata?.full_name ||
    user.email?.split("@")[0] ||
    "User";

  const { data: profile } = await supabaseClient
    .from("profiles")
    .select("full_name,email")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.full_name) name = profile.full_name;

  if (authNavBtn) authNavBtn.textContent = "👤 " + name;

  if ($("userName")) $("userName").textContent = name;
  if ($("userEmail")) $("userEmail").textContent = user.email || "";
  if ($("userAvatar")) $("userAvatar").textContent = (name.trim()[0] || "👤").toUpperCase();

  if (userBox) userBox.classList.remove("hidden");

  if ($("loginForm")) $("loginForm").classList.add("hidden");
  if ($("signupForm")) $("signupForm").classList.add("hidden");
  if ($("authTabs")) $("authTabs").classList.add("hidden");
}

function initStandaloneLoginPage() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("mode") === "signup") showAuthMode("signup");

  const close = $("standaloneClose");
  if (close) {
    close.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  refreshAuthUI();
  initStandaloneLoginPage();

  const authNavBtn = $("authNavBtn");
  if (authNavBtn) {
    authNavBtn.addEventListener("click", async () => {
      const { data: { user } } = await supabaseClient.auth.getUser();
      openAuthModal(user ? "login" : "login");
      if (user) await refreshAuthUI();
    });
  }

  supabaseClient.auth.onAuthStateChange(() => {
    setTimeout(refreshAuthUI, 0);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAuthModal();
  });
});


/* ===== PREMIUM / ADMIN ACCESS ===== */
async function getMyProfile() {
  const { data: { user } } = await supabaseClient.auth.getUser();
  if (!user) return { user: null, profile: null };
  const { data: profile, error } = await supabaseClient
    .from("profiles")
    .select("id,full_name,email,is_premium,premium_until,is_admin")
    .eq("id", user.id)
    .maybeSingle();
  return { user, profile, error };
}

function premiumIsActive(profile) {
  if (!profile?.is_premium) return false;
  if (!profile.premium_until) return true;
  return new Date(profile.premium_until).getTime() > Date.now();
}

function updatePremiumUI(profile) {
  const status = $("premiumStatus");
  const cta = $("premiumLoginBtn");
  if (!status) return;

  if (!profile) {
    status.className = "premium-status";
    status.textContent = "🔒 Login to see whether your account has Premium access.";
    if (cta) cta.textContent = "👤 Login to check Premium";
    return;
  }

  if (premiumIsActive(profile)) {
    status.className = "premium-status active";
    const until = profile.premium_until
      ? new Date(profile.premium_until).toLocaleDateString("en-GB")
      : "Lifetime";
    status.textContent = "👑 Premium Active • Valid until " + until;
    if (cta) {
      cta.textContent = "👑 Premium Active";
      cta.disabled = true;
    }
  } else if (profile.is_premium) {
    status.className = "premium-status expired";
    status.textContent = "⚠️ Your Premium access has expired.";
    if (cta) {
      cta.disabled = false;
      cta.textContent = "👑 Renew Premium";
    }
  } else {
    status.className = "premium-status";
    status.textContent = "⭐ Free account • Premium access is not active.";
    if (cta) {
      cta.disabled = false;
      cta.textContent = "👑 View Premium Options";
    }
  }
}

async function refreshPremiumAndAdminUI() {
  const { user, profile } = await getMyProfile();
  updatePremiumUI(profile);

  const adminLink = $("adminNavLink");
  if (adminLink) {
    adminLink.classList.toggle("hidden", !(profile?.is_admin === true));
  }

  return { user, profile };
}

/* Re-run after the original auth UI finishes loading. */
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(refreshPremiumAndAdminUI, 150);
});

supabaseClient.auth.onAuthStateChange(() => {
  setTimeout(refreshPremiumAndAdminUI, 100);
});

export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) => res.send("logout", { pageTitle: "Logout" });
export const users = (req, res) => res.send("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.send("userDetail", { pageTitle: "User Details" });
export const editProfile = (req, res) =>
  res.send("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.send("changePassword", { pageTitle: "Change Password" });

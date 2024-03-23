/**
 * Функция входа в аккаунт
 */
export function login() {
  localStorage.setItem("user", "created");
  window.location.href = "/";
}

/**
 * Функция выхода из аккаунта
 */
export function logout() {
  localStorage.removeItem("user");
  window.location.href = "/";
}

export function currentUser() {
  let user: boolean = false;

  if (localStorage.getItem("user")) {
    user = true;
  }

  return user;
}

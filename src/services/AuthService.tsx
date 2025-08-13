export interface User {
  username: string;
  email?: string;
}

const USER_KEY = "user";

export const authService = {
  saveUser(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  getUser(): User | null {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  },
  removeUser() {
    localStorage.removeItem(USER_KEY);
  },
  isLoggedIn() {
    return !!localStorage.getItem(USER_KEY);
  },
};

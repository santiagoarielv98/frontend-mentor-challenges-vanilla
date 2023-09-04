export const Theme = {
  DARK: "dark",
  LIGHT: "light",
};

export const toggleTheme = () => {
  const theme = localStorage.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
  document.documentElement.classList.toggle(Theme.DARK, theme === Theme.DARK);
  localStorage.theme = theme;
};

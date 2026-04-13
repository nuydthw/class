import create from 'zustand';

const useThemeStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setDarkMode: (isDark) => set({ darkMode: isDark }),
}));

// Detect system preference for dark mode
if (window.matchMedia) {
  const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  useThemeStore.setState({ darkMode: darkModePreference });
}

export default useThemeStore;

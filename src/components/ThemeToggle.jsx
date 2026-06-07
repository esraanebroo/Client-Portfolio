import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// ThemeToggle now delegates entirely to ThemeContext
// (ThemeContext handles localStorage, data-theme attr, and CSS classes)
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600 hover:text-black transition-colors" />
      )}
    </button>
  );
}
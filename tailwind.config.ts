import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        scroll: "scroll 30s linear infinite",
        'scroll-slow': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",

          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          },
        },
      },
      colors: {
        // Существующие shadcn цвета
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          blue: '#0070f3',
          lightBlue: '#00a8ff',
          green: '#10b981',
          yellow: '#f59e0b',
          orange: '#f97316',
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Дополнительные цвета из дизайн-системы
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        semantic: {
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#3b82f6',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '8rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        'card': '0 4px 14px 0 rgb(0 118 255 / 39%)',
        'card-hover': '0 6px 20px rgba(0, 118, 255, 0.23)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export const textStyles = {
  // Заголовки
  h1: 'text-6xl font-bold text-white',
  h2: 'text-6xl font-bold mb-4',
  h3: 'text-4xl font-bold text-white',
  h4: 'text-3xl font-bold text-white',
  h5: 'text-2xl font-bold text-white',
  h6: 'text-xl font-bold text-white',

  // Подзаголовки
  subtitle1: 'text-2xl text-white',
  subtitle2: 'text-xl text-white',

  // Основной текст
  body1: 'text-xl text-white mb-4',
  body2: 'text-lg text-white',
  bodyLast: 'text-xl text-white',

  // Мелкий текст
  caption: 'text-sm text-gray-400',
  overline: 'text-xs uppercase tracking-wide text-gray-400',

  // Специальные стили
  lead: 'text-2xl text-white font-light',
  quote: 'text-xl text-white italic',
  code: 'text-sm font-mono bg-gray-800 px-2 py-1 rounded text-gray-300',

  // Градиентный текст
  gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600',
  gradientGold: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400',
} as const;

export const components = {
  button: {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white transition-all duration-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200',
    ghost: 'text-blue-600 hover:bg-blue-100 transition-all duration-200',
    danger: 'bg-red-600 hover:bg-red-700 text-white transition-all duration-200',
  },
  card: {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg',
    elevated: 'bg-white dark:bg-gray-800 shadow-lg rounded-lg',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-lg',
  },
  input: {
    default: 'w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
    error: 'w-full px-4 py-2 border border-red-300 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200',
  }
} as const;

export const animations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  scaleIn: 'animate-scale-in',
  spotlight: 'animate-spotlight',
  bounce: 'animate-bounce',
  pulse: 'animate-pulse',
  spin: 'animate-spin',
  ping: 'animate-ping',
  transition: {
    fast: 'transition-all duration-150',
    normal: 'transition-all duration-200',
    slow: 'transition-all duration-300',
  },
  hover: {
    scale: 'hover:scale-105',
    scaleDown: 'hover:scale-95',
    bounce: 'hover:animate-bounce',
    pulse: 'hover:animate-pulse',
  }
} as const;

export const shadows = {
  sm: 'shadow-sm',
  default: 'shadow',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  inner: 'shadow-inner',
  none: 'shadow-none',
  glow: 'shadow-glow',
  glowLg: 'shadow-glow-lg',
  glowPurple: 'shadow-glow-purple',
  card: 'shadow-card',
  cardHover: 'shadow-card-hover',
} as const;

export const colors = {
  // Темная тема
  dark: {
    background: 'bg-gray-900',
    surface: 'bg-gray-800',
    card: 'bg-gray-800',
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      muted: 'text-gray-400',
    },
    border: 'border-gray-700',
  },
  // Светлая тема
  light: {
    background: 'bg-white',
    surface: 'bg-gray-50',
    card: 'bg-white',
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-700',
      muted: 'text-gray-500',
    },
    border: 'border-gray-200',
  },
  // Эффекты
  effects: {
    glowHover: 'hover:shadow-glow-lg',
    glowPurpleHover: 'hover:shadow-glow-purple',
    cardHover: 'hover:shadow-card-hover',
    blur: 'backdrop-blur-md',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20',
    backdrop: {
      blur: 'backdrop-blur-md',
      blurSm: 'backdrop-blur-sm',
      blurLg: 'backdrop-blur-lg',
      brightness: 'backdrop-brightness-50',
    }
  },
  // Текстовые стили
  text: {
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600',
    gradientGold: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400',
    gradientPurple: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600',
    gradientGreen: 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500',
  },
  // Градиенты фонов
  gradients: {
    blue: 'bg-gradient-to-r from-blue-400 to-blue-600',
    purple: 'bg-gradient-to-r from-purple-400 to-pink-600',
    gold: 'bg-gradient-to-r from-yellow-400 to-orange-400',
    green: 'bg-gradient-to-r from-green-400 to-blue-500',
    dark: 'bg-gradient-to-r from-gray-800 to-gray-900',
    card: 'bg-gradient-to-br from-gray-800 to-gray-900',
    cardHover: 'bg-gradient-to-br from-gray-700 to-gray-800',
    glass: 'bg-gradient-to-br from-white/10 to-white/5',
    radial: 'bg-radial-gradient from-blue-400 via-purple-500 to-pink-500',
    conic: 'bg-conic-gradient from-blue-400 via-purple-500 to-pink-500',
  },
  // Состояния
  status: {
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    info: 'text-blue-500',
  }
} as const;

export default config;
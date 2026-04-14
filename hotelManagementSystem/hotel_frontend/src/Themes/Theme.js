import { createTheme, localStorageColorSchemeManager } from "@mantine/core";

const Theme = createTheme({
  colors: {
    // Warm gold/amber - Primary brand color
    gold: [
      "#fff9e6",
      "#fef0cc",
      "#fde199",
      "#fcd266",
      "#fbc33a",
      "#fab81e",
      "#f9b10a",
      "#df9900",
      "#c88800",

      "#b07500",
    ],
    blue: [
      "#eef3fc", // 0 - أزرق فاتح جداً
      "#dce8f8", // 1
      "#b8d0f0", // 2
      "#94b8e8", // 3
      "#70a0e0", // 4
      "#4c88d8", // 5
      "#2c6ed0", // 6 - أزرق أساسي
      "#2358a6", // 7
      "#1a325e", // 8 (Added)
      "#112c53", // 9 - أزرق غامق
    ],

    // Earthy terracotta - Secondary color
    terracotta: [
      "#fef5f2",
      "#fde8e3",
      "#fbd0c4",
      "#f8b5a2",
      "#f59a7f",
      "#f28563",
      "#f0764f",
      "#d6623e",
      "#c05535",
      "#a9482d",
    ],

    // Warm gray - Neutral backgrounds
    warmGray: [
      "#faf9f8",
      "#f2f0ee",
      "#e5e2df",
      "#d6d2ce",
      "#c8c3be",
      "#bcb6b1",
      "#b3aca6",
      "#9e9690",
      "#8d8480",
      "#7d7470",
    ],

    // Soft green - Success/available rooms
    sage: [
      "#f2f7f2",
      "#e3efe3",
      "#c7dec7",
      "#a8cda8",
      "#8ebe8e",
      "#7cb47c",
      "#71af71",
      "#5d995d",
      "#518851",
      "#457745",
    ],

    // Warm orange - Warnings/notifications
    sunset: [
      "#fff7f0",
      "#ffeed9",
      "#ffddb3",
      "#ffcb8a",
      "#ffbb66",
      "#ffb04d",
      "#ffa83d",
      "#e4922d",
      "#cb8125",
      "#b26f1c",
    ],

    // Rich burgundy - Luxury/executive
    burgundy: [
      "#fdf2f4",
      "#fae3e7",
      "#f4c6cf",
      "#eda5b4",
      "#e7899d",
      "#e3778e",
      "#e16d86",
      "#c75b71",
      "#b24f63",
      "#9c4255",
    ],

    // Keep default colors but modify for hotel use
    dark: [
      "#f8f9fa",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
      "#1a1e24",
    ],

    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#6c757d",
      "#495057",
      "#343a40",
    ],
    deepDark: [
      "#e1e1e1", // 0
      "#c1c1c1", // 1
      "#a1a1a1", // 2
      "#616161", // 3
      "#414141", // 4
      "#2c2c2c", // 5 - Medium Dark
      "#1f1f1f", // 6 - Card Background in Dark
      "#1a1a1a", // 7 - Main Background
      "#141414", // 8 - Deepest
      "#0d0d0d", // 9 - Total Black
    ],

    // لون "أزرق ليلي" فخم جداً مع الدهبي
    midnight: [
      "#eef1f7",
      "#d1d9e7",
      "#a3b2cf",
      "#748cb7",
      "#4d6da4",
      "#385a99",
      "#2d5194", // 6
      "#22427c",
      "#1a325e",
      "#111f3b", // 9 - Luxury Dark Background
    ],
  },

  primaryColor: "gold",
  primaryShade: 6, // Rich gold shade for primary elements

  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.05)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.07), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.03)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.12)",
  },

  headings: {
    fontFamily: "Poppins, 'Segoe UI', Roboto, sans-serif",
    fontWeight: "600",
    sizes: {
      h1: { fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: "1.2" },
      h2: { fontSize: "clamp(1.5rem, 4vw, 2.25rem)", lineHeight: "1.3" },
      h3: { fontSize: "clamp(1.25rem, 3vw, 1.875rem)", lineHeight: "1.4" },
      h4: { fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)", lineHeight: "1.4" },
      h5: { fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: "1.5" },
      h6: { fontSize: "clamp(0.875rem, 1.5vw, 1rem)", lineHeight: "1.5" },
    },
  },

  fontFamily: "Inter, 'Segoe UI', Roboto, sans-serif",
  fontFamilyMonospace: "Monaco, 'Cascadia Code', monospace",

  fontSizes: {
    xs: "clamp(0.75rem, 1.5vw, 0.8125rem)",
    sm: "clamp(0.875rem, 2vw, 0.9375rem)",
    md: "clamp(1rem, 2.5vw, 1.0625rem)",
    lg: "clamp(1.125rem, 3vw, 1.1875rem)",
    xl: "clamp(1.25rem, 3.5vw, 1.375rem)",
  },

  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
  },

  radius: {
    xs: "0.25rem",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
  },

  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "2.5rem",
    "3xl": "3rem",
  },

  breakpoints: {
    xs: "30em", // 480px
    sm: "48em", // 768px
    md: "64em", // 1024px
    lg: "74em", // 1184px
    xl: "90em", // 1440px
  },

  autoContrast: true,
  luminanceThreshold: 0.45, // Adjusted for better contrast with warm colors

  defaultGradient: {
    from: "gold",
    to: "terracotta",
    deg: 135,
  },

  defaultRadius: "md",

  activeClassName: "active",
  focusClassName: "focus",

  components: {
    Button: {
      defaultProps: {
        radius: "md",
      },
      styles: (theme) => ({
        root: {
          fontWeight: 600,
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: theme.shadows.md,
          },
        },
      }),
    },

    Card: {
      defaultProps: {
        radius: "lg",
        padding: "lg",
        withBorder: true,
      },
      // In v7, 'styles' should return an object where keys are the component's internal parts
      styles: () => ({
        root: {
          transition: "all 0.3s ease",
          cursor: "pointer",

          // This works in Mantine's 'styles' API because it's processed by their internal engine
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "var(--mantine-shadow-lg)",
          },

          // Use CSS variables for colors instead of checking colorScheme manually
          backgroundColor: "var(--mantine-color-body)",
          borderColor: "var(--mantine-color-default-border)",
        },
      }),
    },

    Modal: {
      defaultProps: {
        radius: "lg",
        padding: "xl",
      },
    },

    Input: {
      defaultProps: {
        radius: "md",
      },
      styles: (theme) => ({
        input: {
          transition: "all 0.2s ease",
          "&:focus": {
            borderColor: theme.colors.gold[6],
            boxShadow: `0 0 0 2px ${theme.colors.gold[2]}`,
          },
        },
      }),
    },

    Select: {
      defaultProps: {
        radius: "md",
      },
    },

    Tabs: {
      defaultProps: {
        color: "gold",
      },
    },

    Badge: {
      defaultProps: {
        radius: "xl",
      },
    },

    Notification: {
      defaultProps: {
        radius: "md",
      },
    },

    Text: {
      defaultProps: {
        radius: "md",
        color: "red",
      },
    },
  },

  other: {
    // Hotel-specific custom values
    hotelTheme: {
      luxury: "#8B7355", // Warm brown for luxury
      welcome: "#D4A574", // Sand/beige for welcome areas
      executive: "#800020", // Burgundy for executive lounge
      standard: "#F5E6D3", // Cream for standard rooms
      premium: "#C5A059", // Premium gold
      spa: "#A3C1AD", // Soft sage for spa
      restaurant: "#D2691E", // Chocolate for dining
    },

    gradients: {
      hero: "linear-gradient(135deg, #F9B10A 0%, #D6623E 100%)",
      card: "linear-gradient(135deg, #FFF9E6 0%, #FEF0CC 100%)",
      footer: "linear-gradient(135deg, #343A40 0%, #212529 100%)",
    },

    shadows: {
      card: "0 10px 40px rgba(0, 0, 0, 0.08)",
      button: "0 2px 4px rgba(0, 0, 0, 0.1)",
      dropdown: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },

    animations: {
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },
});

const colorSchemeManager = localStorageColorSchemeManager({
  key: "my-app-color-scheme",
});

// Simplified resolver without optional chaining issues
const resolver = (theme) => {
  // Safe access with fallbacks
  const getColor = (colorName, index, fallback) => {
    try {
      return theme.colors[colorName]?.[index] || fallback;
    } catch {
      return fallback;
    }
  };

  return {
    variables: {},
    light: {
      "--mantine-color-body": getColor("warmGray", 0, "#faf9f8"),
      "--mantine-color-text": getColor("dark", 9, "#1a1e24"),
    },
    dark: {
      "--mantine-color-body": getColor("midnight", 9, "#111f3b"),
      "--mantine-color-dark-filled": getColor("midnight", 8, "#1a325e"),
      "--mantine-color-text": getColor("warmGray", 1, "#f2f0ee"),
      "--mantine-color-dark-outline": getColor("midnight", 7, "#22427c"),
    },
  };
};
// import { useMantineTheme } from '@mantine/core';

// function Demo() {
//   const theme = useMantineTheme();
//   return <div style={{ background: theme.colors.blue[5] }} />;
// }

export { Theme, colorSchemeManager, resolver };

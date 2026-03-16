import { createGlobalStyle } from "styled-components";

/**
 * THEME — single source of truth for all colors.
 *
 * To change the color scheme, edit the values here only.
 * `colors` is used for JSX props (icon colors, SVG strokes).
 * `GlobalTheme` injects CSS variables used by all styled-components.
 */
export const colors = {
  bg: "#ebebeb",
  text: "#484848",
  textSecondary: "#777777",
  accent: "#848484",
  border: "rgba(61, 59, 56, 0.18)",
  borderStrong: "rgba(61, 59, 56, 0.22)",
  surface: "#ffffff",
  navBg: "#ebebeb",
  placeholder: "#989898",
};

export const GlobalTheme = createGlobalStyle`
  :root {
    --bg: ${colors.bg};
    --text: ${colors.text};
    --text-secondary: ${colors.textSecondary};
    --accent: ${colors.accent};
    --border: ${colors.border};
    --border-strong: ${colors.borderStrong};
    --surface: ${colors.surface};
    --nav-bg: ${colors.navBg};
    --placeholder: ${colors.placeholder};
  }
`;

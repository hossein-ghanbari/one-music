import logoImg from "../assets/images/logo.svg";
import logoTypeImg from "../assets/images/logoType.svg";

const urls = {
  baseUrl: "http://localhost:3000",
};

const images = {
  logo: logoImg,
  logoType: logoTypeImg,
};

const fontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
};

const colors = {
  backgroundColor: "#fff",
  statusBarColor: "#fff",
  primary: "#B4001D",
  primaryLighten: "#B4001D33",
  secondary: "#50020f",
  secondaryLighten: "#50020f66",
  white: "#fff",
  dark: "#333",
  darkLighten: "#777",
  light: "#eaeaea",
  lightLighten: "#f5f5f5",
  red: "#dc3545",
  green: "#28a745",
  blue: "#007bff",
};

export { urls, images, fontSize, colors };

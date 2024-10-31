import { Routes } from "Router";
import { AuthProvider } from "context";

import "./index.scss";

import i18n from "./locales/config";
i18n.init();

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;

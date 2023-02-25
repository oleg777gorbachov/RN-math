import i18next from "i18next";
import { translate } from "./localization/translate";
import Navigation from "./navigation";
import "intl-pluralrules";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

i18next.use(initReactI18next).init(translate);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

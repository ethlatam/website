import React, { createContext, useContext, useState } from 'react';
import messages_en from '../translations/en.json'
import messages_es from '../translations/es.json'
import messages_pt from '../translations/pt.json'
import { IntlProvider } from 'react-intl'

const LanguageContext = createContext();

export function useLanguage() {
    return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {

    const messages = {
        es: messages_es,
        en: messages_en,
        pt: messages_pt,
      }

    const [locale, setLocale] = useState('es');

    const changeLanguage = (newLocale) => {
        setLocale(newLocale);
    };

    return (
        <LanguageContext.Provider value={{ locale, changeLanguage }}>
            <IntlProvider
                locale={locale}
                messages={messages[locale]}
            >
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
}
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const LanguageSelector = () =>
{
    const [t, i18n] = useTranslation('common')

    return (
        <div className="lang-selector-container">
            <button className={i18n.language == 'pl' ? 'lang-selector lang-selector-selected' : 'lang-selector'} onClick={() => i18n.changeLanguage('pl')}>{t('language-selector.languages.pl')}</button>
            <button className={i18n.language == 'en' ? 'lang-selector lang-selector-selected' : 'lang-selector'} onClick={() => i18n.changeLanguage('en')}>{t('language-selector.languages.en')}</button>
        </div>
    )
}
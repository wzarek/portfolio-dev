import React from 'react'
import { useTranslation } from "react-i18next"

function Footer() {
  const [t] = useTranslation('common');

  return (
    <footer>
        <p>{t('app.footer.text')} Maciej Krawczyk &copy; <a href="http://www.wzarek.me">wzarek.me</a></p>
    </footer>
  )
}

export default Footer

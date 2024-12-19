import React from 'react'
import { useParams } from 'react-router'

const ENGLISH_LANGUAGE_CODE = 'en'
const SPANISH_LANGUAGE_CODE = 'es'

export type Lang = typeof ENGLISH_LANGUAGE_CODE | typeof SPANISH_LANGUAGE_CODE

const fallbackLang: Lang = ENGLISH_LANGUAGE_CODE

// get the preferred language from the browser simplified to 2-digit string
const browserLang = navigator.language.split('-')[0].toLowerCase()

// Alternative for checking when user has multiple preferred languages
// const browserLangsIncludeSpanish = navigator.languages.some((language) => {
//   const splitLang = language.split('-') // e.g. 'es-AR' -> ['es', 'AR']
//   const splitLangCode = splitLang[0].toLowerCase() // e.g. 'es'
//   return splitLangCode === SPANISH_LANGUAGE_CODE
// })

// if the browser language is supported, use it, otherwise default to 'en'
export const defaultLang: Lang = langCodeIsSupportedLang(browserLang)
  ? browserLang
  : fallbackLang

function langCodeIsSupportedLang(langCode: string): langCode is Lang {
  return [ENGLISH_LANGUAGE_CODE, SPANISH_LANGUAGE_CODE].includes(langCode)
}

export const LANG_PARAM = 'lang'

export const useLang = (): Lang => {
  const params = useParams()
  return params[LANG_PARAM] as Lang
}

const setHtmlLang = (lang: Lang): void => {
  document.documentElement.lang = lang
}

export const useSetHtmlLang = () => {
  const lang = useLang()
  React.useEffect(() => {
    setHtmlLang(lang)
  }, [lang])
}

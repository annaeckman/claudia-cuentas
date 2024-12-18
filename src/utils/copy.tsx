import { Link } from 'react-router'

type Copy = {
  en: React.ReactNode
  es: React.ReactNode
}

export const title: Copy = {
  en: 'English',
  es: 'Español',
}

export const claudiaDescription: Copy = {
  en: (
    <>
      Claudia Cuentas is a Peruvian immigrant, a bilingual and bicultural artist, a license marriage and family therapist, a researcher and an educator, specializing in the intersectionality of art, healing trauma, trauma recovery, cultural identity, indigenous knowledge and decolonization of healing. <Link to="services">services</Link>
    </>
  ),
  es: (<>Claudia Cuentas es una inmigrante peruana, artista bilingüe y bicultural, terapeuta matrimonial y familiar con licencia, investigadora y educadora, especializada en la interseccionalidad del arte, la curación del trauma, la recuperación del trauma, la identidad cultural, el conocimiento indígena y la descolonización de la curación. <Link to="services">services</Link></>),
}


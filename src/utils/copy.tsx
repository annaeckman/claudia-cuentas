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
      Claudia is a financial assistant that helps you manage your money. Learn
      more at <Link to="services">services</Link>
    </>
  ),
  es: 'Claudia es una asistente financiera que te ayuda a gestionar tu dinero.',
}

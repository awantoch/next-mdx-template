import { SITE_CONFIG } from '../constants'

export default function Footer() {
  return (
    <footer className="mb-16">
      <p className="mt-8 text-neutral-300">
        © {new Date().getFullYear()} {SITE_CONFIG.title}
      </p>
    </footer>
  )
}

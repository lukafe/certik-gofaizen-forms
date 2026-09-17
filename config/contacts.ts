export type Contact = {
  name: string;
  title: string;
  company: string;
  email: string;
  telegram?: string;
  whatsapp?: string;
  linkedin?: string;
  /** Photo under /public/photos/ — a neutral placeholder ships by default */
  photo: string;
};

/** Contact cards. All [bracketed] values are placeholders to replace. */
export const contacts: Contact[] = [
  {
    name: "Lucas Ceccon",
    title: "Director of New Business",
    company: "CertiK",
    email: "[lucas@certik.com]",
    telegram: "[@telegram-handle]",
    whatsapp: "[+0 000 000 0000]",
    linkedin: "[linkedin.com/in/...]",
    photo: "/photos/lucas.svg",
  },
  {
    name: "Joe [Surname]",
    title: "[Title]",
    company: "CertiK",
    email: "[joe@certik.com]",
    telegram: "[@telegram-handle]",
    whatsapp: "[+0 000 000 0000]",
    linkedin: "[linkedin.com/in/...]",
    photo: "/photos/joe.svg",
  },
];

/** Calendly (or other scheduler) URL — placeholder until provided. */
export const bookCallUrl = "https://calendly.com/[your-calendly]/intro-call";

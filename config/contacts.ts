export type Contact = {
  name: string;
  title: string;
  company: string;
  email: string;
  telegram?: string;
  linkedin?: string;
  /** Photo under /public/photos/ — falls back to the placeholder avatar if missing */
  photo: string;
  fallbackPhoto: string;
};

export const contacts: Contact[] = [
  {
    name: "Lucas Ceccon",
    title: "Director of New Business",
    company: "CertiK",
    email: "lucas.ceccon@certik.com",
    telegram: "@LucasCecconn",
    linkedin: "https://www.linkedin.com/in/lucas-ceccon-023a3a240/",
    photo: "/photos/lucas.jpg",
    fallbackPhoto: "/photos/lucas.svg",
  },
  {
    name: "Joe Suzuki",
    title: "[Title]",
    company: "CertiK",
    email: "joe.suzuki@certik.com",
    telegram: "@josukisuki",
    linkedin: "https://www.linkedin.com/in/joe-suzuki-5a0851243/",
    photo: "/photos/joe.jpg",
    fallbackPhoto: "/photos/joe.svg",
  },
];

/** Calendly (or other scheduler) URL — placeholder until provided. */
export const bookCallUrl = "https://calendly.com/[your-calendly]/intro-call";

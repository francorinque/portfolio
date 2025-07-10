const LINKS = [
  {
    id: 1,
    text: "Inicio",
    href: "#",
  },
  {
    id: 2,
    text: "Sobre mi",
    href: "#about",
  },
  {
    id: 3,
    text: "Proyectos",
    href: "#projects",
  },
];

export const Nav = () => {
  return (
    <header>
      <nav className="container mx-auto h-20">
        <ul className="h-full flex items-center gap-6 justify-center">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="hover:text-text-hover transition-colors duration-300"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

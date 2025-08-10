export const ButtonSocial = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group inline-flex items-center px-4 py-2 rounded-md border border-light-blue/70
       backdrop-blur-md text-white transition duration-300 overflow-hidden hover:scale-[1.02]"
    >
      {/* Destello animado */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-light-blue/40 to-transparent
       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2s] ease-in-out 
       animate-shimmer pointer-events-none"
      />
      {/* Contenido */}
      <span className="relative z-10 flex items-center gap-2 text-light-blue md:text-[16px] sm:text-sm">
        {children}
      </span>
    </a>
  );
};

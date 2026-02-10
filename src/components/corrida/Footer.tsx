const Footer = () => {
  return (
    <footer className="section-dark py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-heading text-xl font-bold text-gold mb-2">
          CORRIDA DIAMOND
        </p>
        <p className="text-sm" style={{ color: "hsl(0 0% 60%)" }}>
          Um desafio do Ecossistema Diamond Global
        </p>
        <div className="gold-divider mx-auto my-6" />
        <p className="text-xs" style={{ color: "hsl(0 0% 45%)" }}>
          © 2026 Diamond Global. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-1" style={{ color: "hsl(0 0% 35%)" }}>
          Este site não é afiliado, associado, autorizado, endossado ou de qualquer forma conectado oficialmente à BMW Group.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

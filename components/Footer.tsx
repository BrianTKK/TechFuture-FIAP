
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} TechFuture. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

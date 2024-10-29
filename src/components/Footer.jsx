import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center p-4">
      <p>
        Challenge created by { }
        <a
          href="https://github.com/julienbouze"
          target="_blank"
          rel="noopener noreferrer"
          className='underline underline-offset-2 hover:text-cyan-300'
        >
          Julien Bouze
        </a>
      </p>
    </footer>
  );
};

export default Footer;
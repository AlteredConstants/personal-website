import React from 'react';

export default function MainSection({ title, children }) {
  return (
    <section>
      <style jsx>{`
        section {
          padding: 0 1rem;
        }
        header h1 {
          font-size: 1.2rem;
          border-bottom: 2px solid #df9739;
          color: #df9739;
          padding: 0 1rem;
          margin: 1rem -1rem;
        }
      `}</style>
      <header>
        <h1 className="header-font">{title}</h1>
      </header>
      {children}
    </section>
  );
}

MainSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

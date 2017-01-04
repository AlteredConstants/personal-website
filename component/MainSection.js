import React from 'react';

export default function MainSection({ title, children }) {
  return (
    <section>
      <style jsx>{`
        section {
          padding: 0 1em;
        }
        header h1 {
          font-size: 1.2em;
          border-bottom: 2px solid #df9739;
          color: #df9739;
          padding-left: 1em;
          margin-left: -1em;
          margin-right: -1em;
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

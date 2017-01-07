import React from 'react';
import Link from 'next/prefetch';

export default function NavLink({ href, children, isPrimary, isCurrent }) {
  const className = ['header-font'];
  if (isPrimary) className.push('primary');
  if (isCurrent) className.push('current');
  return (
    <Link href={href}>
      <a className={className.join(' ')}>
        <style jsx>{`
          a {
            box-sizing: content-box;
            display: block;
            width: 9em;
            padding-left: 1em;
            font-size: 1.4rem;
            line-height: 1.2em;
            border: 2px solid transparent;
            border-radius: 0 5em 0 0;
          }
          a:hover {
            text-decoration: none;
          }

          a:not(.primary) {
            color: #fff;
            border-bottom-color: #fff;
          }

          a:hover:not(.primary) {
            background-color: #fff;
            color: #548bd2;
          }

          a:not(.primary).current {
            border: 2px solid #fff;
          }

          a.primary {
            width: 9em;
            height: 3.2em;
            padding-top: 2em;
            background-color: #df9739;
            color: #dfd7b7;
            font-weight: bold;
            border-bottom-color: #df9739;
          }

          a:hover.primary {
            color: #fff;
          }

          @media (min-width: 768px) {
            a:not(.primary) {
              width: 9em;
              height: 3.2em;
              padding-top: 2em;
            }
          }
        `}</style>
        {children}
      </a>
    </Link>
  );
}

NavLink.propTypes = {
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  isPrimary: React.PropTypes.bool,
  isCurrent: React.PropTypes.bool,
};

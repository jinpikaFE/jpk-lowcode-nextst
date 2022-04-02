import { FC } from 'react';
import Link from 'next/link';

const Sidebar: FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        <Link href="/views/home">
          <a
            style={{
              fontSize: 22,
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            EXAMPLE APP
          </a>
        </Link>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link href="/views/home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/views/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/views/blog" prefetch={false}>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/views/test" prefetch={false}>
            <a>Test</a>
          </Link>
        </li>
        <li>
          <Link href="/views/utils/request" prefetch={false}>
            <a>hh</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

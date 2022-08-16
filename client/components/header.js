import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Registrarse', href: '/auth/signup' },
    !currentUser && { label: 'Logear', href: '/auth/signin' },
    currentUser && { label: 'Crear Proyecto', href: '/tickets/new' },
    currentUser && { label: 'Mis Proyectos', href: '/orders' },
    currentUser && { label: 'Salir', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">Proyectos</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};

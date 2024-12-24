import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Create breadcrumb items array for schema
  const breadcrumbItems = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    const name = value.charAt(0).toUpperCase() + value.slice(1);
    return { name, to };
  });

  // Add home as first item
  breadcrumbItems.unshift({ name: 'Home', to: '/' });

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@id": `https://yourdomain.com${item.to}`,
                "name": item.name
              }
            }))
          })}
        </script>
      </Helmet>
      <nav aria-label="breadcrumb" className="py-2 px-4">
        <ol className="flex space-x-2 text-sm text-gray-600">
          {breadcrumbItems.map((item, index) => (
            <li key={item.to} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900">{item.name}</span>
              ) : (
                <Link to={item.to} className="hover:text-yellow-800">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;

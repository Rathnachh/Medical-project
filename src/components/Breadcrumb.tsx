"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumbs as MUIBreadcrumbs, Typography } from '@mui/material';
import { AiFillHome } from 'react-icons/ai';
import { MdChevronRight } from 'react-icons/md';

interface BreadcrumbItem {
  label: string;
  href: string;
}

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    'about': 'About Us',

  };

  const breadcrumbItems: BreadcrumbItem[] = pathnames.map((segment, index) => {
    const href = `/${pathnames.slice(0, index + 1).join('/')}`;
    return { label: breadcrumbNameMap[segment] || segment, href };
  });

  return (
    <nav className="py-3" aria-label="breadcrumb">
      <MUIBreadcrumbs separator={<MdChevronRight />} aria-label="breadcrumb">
        <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
          <AiFillHome className="mr-1 text-xl" />
        </Link>
        {breadcrumbItems.map((item, index) => (
          index === breadcrumbItems.length - 1 ? (
            <Typography key={index} color="textPrimary" className="flex items-center text-green-500">
              {item.label}
            </Typography>
          ) : (
            <Link key={index} href={item.href} className="text-green-600 hover:text-green-800">
              {item.label}
            </Link>
          )
        ))}
      </MUIBreadcrumbs>
    </nav>
  );
};

export default Breadcrumb;

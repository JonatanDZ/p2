// components/AdminAppWrapper.jsx
'use client';

import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('./AdminApp'), { ssr: false });

const AdminAppWrapper = () => <AdminApp />;

export default AdminAppWrapper;

import Card from '@/components/card';
import Link from 'next/link';
import React from 'react';

const ArchivedNotification = () => {
  return (
    <Card>
      <h1>Archived Notification</h1>
      <div>
        <Link href="/dashboard">Default</Link>
      </div>
    </Card>
  );
};

export default ArchivedNotification;
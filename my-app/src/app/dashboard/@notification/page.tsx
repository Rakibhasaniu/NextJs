import Card from '@/components/card';
import Link from 'next/link';
import React from 'react';

const NotificationAnalytics = () => {
  return (
    <Card>
      <h1>Notification</h1>
      <div>
        <Link href="dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
};

export default NotificationAnalytics;
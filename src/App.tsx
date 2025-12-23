import React, { useEffect, useState } from 'react';
import { ComingSoonPage } from './components/ComingSoonPage';
const products = [
  { name: 'Payroll Anomalies', targetDate: new Date('2025-11-01T00:00:00Z') },
  { name: 'Guard Privacy', targetDate: new Date('2025-11-01T00:00:00Z') },
  { name: 'HCM QA Automation', targetDate: new Date('2025-11-01T00:00:00Z') },
  { name: 'HCM Release Certification', targetDate: new Date('2025-11-01T00:00:00Z') }
];

export function App() {
  const [productIndex, setProductIndex] = useState(0);

  // Change product every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProductIndex(prevIndex => (prevIndex + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return <ComingSoonPage productName={products[productIndex].name} targetDate={products[productIndex].targetDate} />;
}
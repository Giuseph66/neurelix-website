import type { Metadata } from 'next';
import SolutionsClient from './SolutionsClient';

export const metadata: Metadata = {
  title: 'Soluções - Neurelix',
  description: 'Soluções sob medida para vender mais, atender melhor e automatizar seu negócio.',
};

export default function SolutionsPage() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER || '5566999999999';
  return <SolutionsClient whatsappNumber={whatsappNumber} />;
}

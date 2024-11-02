import React from 'react';
import { Download } from 'lucide-react';
import type { VCard } from '../../types/vcard';

interface SaveContactProps {
  vcard: VCard;
}

const SaveContact = ({ vcard }: SaveContactProps) => {
  const handleDownload = () => {
    // TODO: Implement vCard file generation and download
    console.log('Downloading contact:', vcard);
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
    >
      <Download className="h-5 w-5" />
      <span>Save Contact</span>
    </button>
  );
};

export default SaveContact;
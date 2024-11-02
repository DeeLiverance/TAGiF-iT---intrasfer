import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import type { VCard } from '../../types/vcard';

interface ContactInfoProps {
  vcard: VCard;
}

const ContactInfo = ({ vcard }: ContactInfoProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Phone className="h-5 w-5 text-gray-500" />
        <a href={`tel:${vcard.phone}`} className="text-blue-600 hover:underline">
          {vcard.phone}
        </a>
      </div>
      
      <div className="flex items-center space-x-3">
        <Mail className="h-5 w-5 text-gray-500" />
        <a href={`mailto:${vcard.email}`} className="text-blue-600 hover:underline">
          {vcard.email}
        </a>
      </div>

      {vcard.url && (
        <div className="flex items-center space-x-3">
          <Globe className="h-5 w-5 text-gray-500" />
          <a href={vcard.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {vcard.url}
          </a>
        </div>
      )}

      <div className="flex items-start space-x-3">
        <MapPin className="h-5 w-5 text-gray-500 mt-1" />
        <div>
          <p className="text-gray-800">{vcard.address.street}</p>
          <p className="text-gray-800">
            {vcard.address.city}, {vcard.address.state} {vcard.address.zip}
          </p>
          <p className="text-gray-800">{vcard.address.country}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
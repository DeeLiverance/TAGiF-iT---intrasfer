import React from 'react';
import { Building2, Phone, Calendar } from 'lucide-react';
import type { VCard } from '../../types/vcard';

interface HotelInfoProps {
  hotelInfo: NonNullable<VCard['hotelInfo']>;
}

const HotelInfo = ({ hotelInfo }: HotelInfoProps) => {
  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Hotel Information</h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Building2 className="h-5 w-5 text-gray-500 mt-1" />
          <div>
            <p className="font-medium text-gray-900">{hotelInfo.name}</p>
            <p className="text-gray-800">{hotelInfo.address.line1}</p>
            {hotelInfo.address.line2 && (
              <p className="text-gray-800">{hotelInfo.address.line2}</p>
            )}
            <p className="text-gray-800">
              {hotelInfo.address.city}, {hotelInfo.address.state} {hotelInfo.address.zip}
            </p>
            <p className="text-gray-800">{hotelInfo.address.country}</p>
          </div>
        </div>

        {hotelInfo.phone && (
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-500" />
            <a href={`tel:${hotelInfo.phone}`} className="text-blue-600 hover:underline">
              {hotelInfo.phone}
            </a>
          </div>
        )}

        {(hotelInfo.checkIn || hotelInfo.checkOut) && (
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-gray-500" />
            <div>
              {hotelInfo.checkIn && (
                <p className="text-gray-800">
                  Check-in: {new Date(hotelInfo.checkIn).toLocaleDateString()}
                </p>
              )}
              {hotelInfo.checkOut && (
                <p className="text-gray-800">
                  Check-out: {new Date(hotelInfo.checkOut).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelInfo;
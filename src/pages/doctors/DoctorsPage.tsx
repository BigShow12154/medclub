import React from 'react';
import { Link } from 'react-router-dom';
import { UserRound, Star, MapPin, Calendar } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  location: string;
  availableSlots: number;
  imageUrl: string;
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    rating: 4.8,
    location: 'New York, NY',
    availableSlots: 3,
    imageUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    rating: 4.9,
    location: 'Boston, MA',
    availableSlots: 5,
    imageUrl: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    rating: 4.7,
    location: 'Miami, FL',
    availableSlots: 2,
    imageUrl: 'https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg'
  }
];

export default function DoctorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find a Doctor</h1>
        <div className="relative">
          <input
            type="search"
            placeholder="Search doctors..."
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Link
            key={doctor.id}
            to={`/doctors/${doctor.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative h-48">
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
              <p className="text-gray-600 mb-4">{doctor.specialty}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  <span>{doctor.rating} Rating</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <span>{doctor.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <span>{doctor.availableSlots} slots available</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Calendar, Clock, Phone, Mail, Award } from 'lucide-react';

const doctorDetails = {
  id: '1',
  name: 'Dr. Sarah Wilson',
  specialty: 'Cardiologist',
  rating: 4.8,
  location: 'New York, NY',
  experience: '15+ years',
  education: 'Harvard Medical School',
  certifications: ['American Board of Internal Medicine', 'Cardiovascular Disease'],
  availableSlots: [
    { date: '2025-02-20', times: ['09:00 AM', '11:00 AM', '2:00 PM'] },
    { date: '2025-02-21', times: ['10:00 AM', '3:00 PM'] },
    { date: '2025-02-22', times: ['09:00 AM', '1:00 PM', '4:00 PM'] }
  ],
  imageUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg',
  phone: '+1 (555) 123-4567',
  email: 'dr.wilson@healthcare.com'
};

export default function DoctorDetailPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={doctorDetails.imageUrl}
              alt={doctorDetails.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:w-2/3">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctorDetails.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{doctorDetails.specialty}</p>
              </div>
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="font-semibold">{doctorDetails.rating}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <span>{doctorDetails.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 text-gray-400 mr-2" />
                <span>{doctorDetails.experience} Experience</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <span>{doctorDetails.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <span>{doctorDetails.email}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Education & Certifications</h2>
              <p className="text-gray-700 mb-2">{doctorDetails.education}</p>
              <ul className="list-disc list-inside text-gray-600">
                {doctorDetails.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Available Appointments</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {doctorDetails.availableSlots.map((slot, dateIndex) => (
                  <div key={dateIndex} className="border rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="font-medium">{slot.date}</span>
                    </div>
                    <div className="space-y-2">
                      {slot.times.map((time, timeIndex) => (
                        <button
                          key={timeIndex}
                          className="w-full py-2 px-4 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors flex items-center justify-center"
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
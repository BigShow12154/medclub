import React from 'react';
import { MapPin, Calendar, Clock, MoreVertical } from 'lucide-react';
import { format, parseISO } from 'date-fns';

interface Appointment {
  id: number;
  doctorName: string;
  specialty: string;
  date: string;
  hospital: string;
  image: string;
}

interface UpcomingAppointmentProps {
  appointment: Appointment;
}

const UpcomingAppointment: React.FC<UpcomingAppointmentProps> = ({ appointment }) => {
  const date = parseISO(appointment.date);
  const formattedDate = format(date, 'MMMM d, yyyy');
  const formattedTime = format(date, 'h:mm a');
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0 h-24 md:h-auto md:w-24 overflow-hidden">
          <img 
            className="w-full h-full object-cover"
            src={appointment.image} 
            alt={appointment.doctorName} 
          />
        </div>
        <div className="p-6 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{appointment.doctorName}</h3>
              <p className="text-primary">{appointment.specialty}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={18} />
            </button>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={16} className="mr-2 text-gray-400" />
              {formattedDate}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock size={16} className="mr-2 text-gray-400" />
              {formattedTime}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin size={16} className="mr-2 text-gray-400" />
              {appointment.hospital}
            </div>
          </div>
          
          <div className="mt-4 flex gap-2">
            <button className="px-3 py-1.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-dark">
              Confirm
            </button>
            <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50">
              Reschedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointment;
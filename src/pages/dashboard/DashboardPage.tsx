import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Heart, 
  ArrowRight, 
  Zap, 
  Moon, 
  BarChart3, 
  Calendar, 
  Clock,
  Users,
  Plus
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import LineChart from '../../components/charts/LineChart';
import StatCard from '../../components/ui/StatCard';
import UpcomingAppointment from '../../components/dashboard/UpcomingAppointment';

const DashboardPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('health');
  
  // Mock data
  const healthData = {
    heartRate: {
      current: 72,
      data: Array.from({ length: 7 }, (_, i) => ({ 
        date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric' 
        }),
        value: 70 + Math.floor(Math.random() * 10)
      }))
    },
    bloodPressure: {
      systolic: 120,
      diastolic: 80,
      data: Array.from({ length: 7 }, (_, i) => ({
        date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric' 
        }),
        systolic: 115 + Math.floor(Math.random() * 15),
        diastolic: 75 + Math.floor(Math.random() * 10)
      }))
    },
    sleep: {
      duration: 6.5,
      quality: 'Good',
      data: Array.from({ length: 7 }, (_, i) => ({
        date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric' 
        }),
        value: 5 + Math.random() * 3
      }))
    }
  };
  
  const familyMembers = [
    { id: 1, name: 'Sarah Johnson', relation: 'Spouse', alerts: 1 },
    { id: 2, name: 'Alex Johnson', relation: 'Child', alerts: 0 },
    { id: 3, name: 'Robert Smith', relation: 'Parent', alerts: 2 },
  ];
  
  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. Emily Chen',
      specialty: 'Cardiologist',
      date: '2025-07-18T10:30:00',
      hospital: 'Medical City Hospital',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      doctorName: 'Dr. James Wilson',
      specialty: 'Neurologist',
      date: '2025-07-25T14:00:00',
      hospital: 'Central Medical Center',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];
  
  return (
    <div className="pb-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome, {user?.name}</h1>
        <p className="text-gray-600">Here's an overview of your health data and upcoming appointments</p>
      </div>
      
      <div className="mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden mb-4">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'health' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('health')}
          >
            My Health
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'family' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('family')}
          >
            Family
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'appointments' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('appointments')}
          >
            Appointments
          </button>
        </div>
        
        {/* Health Tab */}
        {activeTab === 'health' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <StatCard
                title="Heart Rate"
                value={`${healthData.heartRate.current} bpm`}
                icon={<Heart className="text-red-500" />}
                trend="+2%"
                trendDirection="up"
              />
              <StatCard
                title="Blood Pressure"
                value={`${healthData.bloodPressure.systolic}/${healthData.bloodPressure.diastolic}`}
                icon={<Activity className="text-blue-500" />}
                trend="Stable"
                trendDirection="neutral"
              />
              <StatCard
                title="Sleep"
                value={`${healthData.sleep.duration} hrs`}
                icon={<Moon className="text-indigo-500" />}
                trend="-4%"
                trendDirection="down"
                info="Below recommended"
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Heart Rate History</h3>
                  <Link to="/health-reports" className="text-primary text-sm flex items-center hover:underline">
                    View Report
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
                <div className="h-64">
                  <LineChart 
                    data={healthData.heartRate.data} 
                    xKey="date" 
                    yKey="value" 
                    color="#EF4444"
                    unit="bpm"
                  />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Sleep Duration</h3>
                  <Link to="/health-reports" className="text-primary text-sm flex items-center hover:underline">
                    View Report
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
                <div className="h-64">
                  <LineChart 
                    data={healthData.sleep.data} 
                    xKey="date" 
                    yKey="value" 
                    color="#818CF8"
                    unit="hrs"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Health Recommendations</h3>
                <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full">Based on your data</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Zap className="text-amber-500" size={24} />,
                    title: "Increase Activity",
                    description: "Your activity level has decreased. Aim for 30 minutes of exercise today."
                  },
                  {
                    icon: <Moon className="text-indigo-500" size={24} />,
                    title: "Improve Sleep",
                    description: "You're getting less sleep than recommended. Try going to bed 30 minutes earlier."
                  },
                  {
                    icon: <Heart className="text-red-500" size={24} />,
                    title: "Heart Health",
                    description: "Your heart rate variability is lower than usual. Consider stress reduction techniques."
                  }
                ].map((recommendation, i) => (
                  <div key={i} className="p-4 border rounded-lg bg-gray-50">
                    <div className="flex items-start">
                      <div className="mr-3">{recommendation.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-900">{recommendation.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{recommendation.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Family Tab */}
        {activeTab === 'family' && (
          <div className="animate-fade-in">
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Family Members</h3>
                <Link 
                  to="/family" 
                  className="flex items-center text-sm font-medium text-primary hover:text-primary-dark"
                >
                  <Plus size={16} className="mr-1" />
                  Add Member
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {familyMembers.map((member) => (
                  <div key={member.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.relation}</p>
                      </div>
                      <div className="flex items-center">
                        {member.alerts > 0 && (
                          <span className="bg-red-100 text-red-800 text-xs py-1 px-2 rounded-full">
                            {member.alerts} alert{member.alerts > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between">
                      <Link to={`/family/${member.id}`} className="text-sm text-primary hover:underline">
                        View Health Data
                      </Link>
                      <button className="text-sm text-gray-600 hover:text-gray-900">
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Family Health Overview</h3>
                <Link to="/family" className="text-primary text-sm flex items-center hover:underline">
                  View All
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
              
              <div className="p-4 border rounded-lg bg-yellow-50 border-yellow-200 mb-4">
                <div className="flex items-start">
                  <div className="bg-yellow-200 p-2 rounded-full mr-3">
                    <Users size={20} className="text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800">Family Health Alert</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Robert Smith's blood pressure readings have been elevated for the past 3 days. 
                      Consider scheduling a doctor's appointment.
                    </p>
                    <div className="mt-2">
                      <button className="text-sm bg-primary text-white py-1 px-3 rounded-md hover:bg-primary-dark">
                        Schedule Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">Upcoming Family Check-ups</h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Calendar size={18} className="text-gray-500 mr-2" />
                      <div>
                        <span className="font-medium">Annual Check-up - Sarah Johnson</span>
                        <p className="text-sm text-gray-500">Scheduled for August 15, 2025</p>
                      </div>
                    </div>
                    <button className="text-primary text-sm hover:underline">Reschedule</button>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Calendar size={18} className="text-gray-500 mr-2" />
                      <div>
                        <span className="font-medium">Dental Check-up - Alex Johnson</span>
                        <p className="text-sm text-gray-500">Scheduled for July 28, 2025</p>
                      </div>
                    </div>
                    <button className="text-primary text-sm hover:underline">Reschedule</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {/* Appointments Tab */}
        {activeTab === 'appointments' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {appointments.map((appointment) => (
                <UpcomingAppointment key={appointment.id} appointment={appointment} />
              ))}
              
              <Link to="/doctors" className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center hover:border-primary hover:bg-blue-50 transition-colors">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <Plus size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Schedule New Appointment</h3>
                <p className="text-gray-500 text-sm text-center mt-2">
                  Find doctors and schedule your next appointment
                </p>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Appointment History</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  Last 30 days
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Doctor
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        doctor: 'Dr. Michael Brown',
                        date: 'Jul 5, 2025',
                        type: 'General Check-up',
                        status: 'Completed'
                      },
                      {
                        doctor: 'Dr. Lisa Johnson',
                        date: 'Jun 22, 2025',
                        type: 'Dental',
                        status: 'Completed'
                      },
                      {
                        doctor: 'Dr. David Lee',
                        date: 'Jun 15, 2025',
                        type: 'Dermatology',
                        status: 'Cancelled'
                      }
                    ].map((item, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.doctor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            item.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                            item.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-primary hover:text-primary-dark mr-3">
                            View Report
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            Reschedule
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
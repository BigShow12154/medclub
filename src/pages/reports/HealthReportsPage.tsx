import React from 'react';
import { LineChart } from '../../components/charts/LineChart';

const HealthReportsPage = () => {
  return (
    <div className="container-responsive">
      <h1 className="mb-6">Health Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="medical-card">
          <h3 className="mb-4">Recent Health Metrics</h3>
          <div className="chart-container">
            <LineChart />
          </div>
        </div>

        <div className="medical-card">
          <h3 className="mb-4">Health Summary</h3>
          <div className="space-y-4">
            <p className="text-gray-600">
              Your comprehensive health reports and metrics will be displayed here, 
              providing insights into your well-being over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthReportsPage;
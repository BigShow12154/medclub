import React from 'react';

const FamilyMembersPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Family Members</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Family Circle</h2>
          <p className="text-gray-600">Manage your family members' health profiles and access their medical records all in one place.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* This is a placeholder for family member cards */}
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <span className="text-2xl text-blue-600">JD</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">John Doe</h3>
            <p className="text-sm text-gray-500">Father • 45 years old</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              View Profile
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
              <span className="text-2xl text-pink-600">MD</span>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Mary Doe</h3>
            <p className="text-sm text-gray-500">Mother • 42 years old</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              View Profile
            </button>
          </div>

          <div className="border border-dashed border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Add Family Member</h3>
              <p className="text-sm text-gray-500 mt-2">Click to add a new family member to your circle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyMembersPage;
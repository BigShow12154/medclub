import { useState } from 'react';
import { AlarmClock, Pill, Clock, ChevronRight, PanelRight, X } from 'lucide-react';

// Symptom categories by body part
const symptomsByBodyPart = {
  head: ['Headache', 'Dizziness', 'Vision problems', 'Hearing issues', 'Cognitive difficulties'],
  chest: ['Chest pain', 'Shortness of breath', 'Heart palpitations', 'Cough', 'Breathing difficulty'],
  abdomen: ['Abdominal pain', 'Nausea', 'Vomiting', 'Diarrhea', 'Constipation', 'Bloating'],
  arms: ['Pain', 'Weakness', 'Numbness', 'Tingling', 'Limited mobility', 'Swelling'],
  legs: ['Pain', 'Weakness', 'Numbness', 'Tingling', 'Limited mobility', 'Swelling', 'Joint problems'],
  back: ['Lower back pain', 'Upper back pain', 'Spine issues', 'Muscle tension', 'Posture problems'],
};

const BodyMapPage = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<Record<string, string[]>>({});
  const [symptomDetails, setSymptomDetails] = useState('');
  const [symptomDuration, setSymptomDuration] = useState('');
  const [detailsPanelOpen, setDetailsPanelOpen] = useState(false);
  
  const handleBodyPartClick = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart);
    setDetailsPanelOpen(true);
  };
  
  const handleSymptomToggle = (symptom: string) => {
    if (!selectedBodyPart) return;
    
    setSelectedSymptoms(prev => {
      const currentSymptoms = prev[selectedBodyPart] || [];
      
      if (currentSymptoms.includes(symptom)) {
        // Remove symptom if already selected
        return {
          ...prev,
          [selectedBodyPart]: currentSymptoms.filter(s => s !== symptom)
        };
      } else {
        // Add symptom if not already selected
        return {
          ...prev,
          [selectedBodyPart]: [...currentSymptoms, symptom]
        };
      }
    });
  };
  
  const handleSubmit = () => {
    console.log('Submitted symptoms:', {
      selectedSymptoms,
      symptomDetails,
      symptomDuration
    });
    
    // In a real application, this would send the data to a backend service
    alert('Your symptoms have been recorded. A healthcare professional will review them shortly.');
    
    // Reset form
    setSelectedBodyPart(null);
    setSelectedSymptoms({});
    setSymptomDetails('');
    setSymptomDuration('');
    setDetailsPanelOpen(false);
  };
  
  return (
    <div className="container-responsive">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Symptom Checker</h1>
        <p className="text-gray-600">Click on the body part where you're experiencing symptoms</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Body Map Container */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <div className="relative w-full max-w-sm">
            {/* Simple SVG body map */}
            <svg viewBox="0 0 200 400" className="w-full h-auto">
              {/* Head */}
              <circle 
                cx="100" cy="50" r="40" 
                fill={selectedBodyPart === 'head' ? '#3B82F6' : '#E5E7EB'} 
                stroke="#374151" 
                strokeWidth="2"
                className="body-part hover:fill-blue-300 cursor-pointer transition-colors"
                onClick={() => handleBodyPartClick('head')}
              />
              
              {/* Torso */}
              <rect 
                x="70" y="90" width="60" height="100" 
                fill={selectedBodyPart === 'chest' ? '#3B82F6' : '#E5E7EB'} 
                stroke="#374151" 
                strokeWidth="2"
                className="body-part hover:fill-blue-300 cursor-pointer transition-colors"
                onClick={() => handleBodyPartClick('chest')}
              />
              
              {/* Abdomen */}
              <rect 
                x="70" y="190" width="60" height="60" 
                fill={selectedBodyPart === 'abdomen' ? '#3B82F6' : '#E5E7EB'} 
                stroke="#374151" 
                strokeWidth="2"
                className="body-part hover:fill-blue-300 cursor-pointer transition-colors"
                onClick={() => handleBodyPartClick('abdomen')}
              />
              
              {/* Left Arm */}
              <rect 
                x="40" y="90" width="30" height="120" 
                fill={selectedBodyPart === 'arms' ? '#3B82F6' : '#E5E7EB'} 
                stroke="#374151" 
                strokeWidth="2"
                className="body-part hover:fill-blue-300 cursor-pointer transition-colors"
                onClick={() => handleBodyPartClick('arms')}
              />
              
              {/* Right Arm */}
              <rect 
                x="130" y="90" width="30" height="120" 
                fill={selectedBodyPart === 'arms' ? '#3B82F6' : '#E5E7EB'} 
                stroke="#374151" 
                strokeWidth="2"
                className="body-part hover:fill-blue-300 cursor-pointer transition-colors"
                onClick={() => handleBodyPartClick('arms')}
              />
              
              {/* Left Leg */}
              <rect 
                x="70" y="250" width="25" height="130" 
                fill={selectedBodyPart === 'legs' ? '#3B82F6' : '#E5E7EB'} 
                stroke="#374151" 
                strokeWidth="2"
                className="body-part hover:fill-blue-300 cursor-pointer transition-colors"
                onClick={() => handleBodyPartClick('legs')}
              />
              
              {/* Right Leg */}
              <rect 
                x="105" y="250" width="25" height="130" 
                fill={selectedBodyPart === 'legs' ? '#3B82F6' : '#E5E7EB'} 
                stroke="#374151" 
                strokeWidth="2"
                className="body-part hover:fill-blue-300 cursor-pointer transition-colors"
                onClick={() => handleBodyPartClick('legs')}
              />
              
              {/* Back */}
              <rect 
                x="70" y="90" width="60" height="160" 
                fill={selectedBodyPart === 'back' ? '#3B82F6' : 'transparent'} 
                fillOpacity="0.3"
                stroke="transparent"
                className="body-part hover:fill-blue-300 hover:fill-opacity-30 cursor-pointer transition-colors"
                onClick={() => handleBodyPartClick('back')}
              />
            </svg>
            
            <div className="mt-6 text-center font-medium">
              {selectedBodyPart ? `Selected: ${selectedBodyPart.charAt(0).toUpperCase() + selectedBodyPart.slice(1)}` : 'Select a body part'}
            </div>
          </div>
          
          <div className="mt-8 w-full">
            <h3 className="text-lg font-semibold mb-4">Your Selected Symptoms</h3>
            
            {Object.keys(selectedSymptoms).length > 0 ? (
              <div className="space-y-4">
                {Object.entries(selectedSymptoms).map(([bodyPart, symptoms]) => (
                  symptoms.length > 0 && (
                    <div key={bodyPart} className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium capitalize mb-2">{bodyPart}</h4>
                      <div className="flex flex-wrap gap-2">
                        {symptoms.map(symptom => (
                          <span key={symptom} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {symptom}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                ))}
                
                <button
                  onClick={handleSubmit}
                  className="mt-4 w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  Submit Symptoms
                </button>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>No symptoms selected yet</p>
                <p className="text-sm mt-2">Click on body parts and select your symptoms</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Symptom Selection Panel - Visible on larger screens or when opened on mobile */}
        <div className={`
          fixed inset-y-0 right-0 z-20 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out
          lg:relative lg:inset-auto lg:transform-none lg:opacity-100 lg:shadow-md lg:rounded-xl lg:max-w-md lg:flex-shrink-0
          ${detailsPanelOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `}>
          <div className="h-full flex flex-col p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">
                {selectedBodyPart ? `${selectedBodyPart.charAt(0).toUpperCase() + selectedBodyPart.slice(1)} Symptoms` : 'Select a body part'}
              </h2>
              <button 
                onClick={() => setDetailsPanelOpen(false)}
                className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            
            {selectedBodyPart ? (
              <div className="flex-1 overflow-y-auto">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Select Your Symptoms</h3>
                  <div className="space-y-2">
                    {symptomsByBodyPart[selectedBodyPart as keyof typeof symptomsByBodyPart]?.map((symptom) => (
                      <div key={symptom} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`symptom-${symptom}`}
                          checked={selectedSymptoms[selectedBodyPart]?.includes(symptom) || false}
                          onChange={() => handleSymptomToggle(symptom)}
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor={`symptom-${symptom}`} className="ml-2 text-sm text-gray-700">
                          {symptom}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Provide Additional Details</h3>
                  <label htmlFor="symptomDetails" className="block text-sm font-medium text-gray-700 mb-1">
                    Describe your symptoms
                  </label>
                  <textarea
                    id="symptomDetails"
                    value={symptomDetails}
                    onChange={(e) => setSymptomDetails(e.target.value)}
                    rows={4}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                    placeholder="Describe how you feel, when it started, and any factors that make it better or worse..."
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Symptom Duration</h3>
                  <div className="flex space-x-2">
                    {['Today', 'Few days', '1-2 weeks', '1+ month'].map((duration) => (
                      <button
                        key={duration}
                        type="button"
                        onClick={() => setSymptomDuration(duration)}
                        className={`flex items-center justify-center px-3 py-2 rounded-lg text-sm ${
                          symptomDuration === duration
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {duration === 'Today' && <AlarmClock size={14} className="mr-1" />}
                        {duration === 'Few days' && <Clock size={14} className="mr-1" />}
                        {duration}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <button
                    onClick={() => setDetailsPanelOpen(false)}
                    className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center"
                  >
                    Continue
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                <PanelRight size={48} className="mb-4 opacity-30" />
                <p>Please select a body part</p>
                <p className="text-sm mt-2">Then you can specify your symptoms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyMapPage;
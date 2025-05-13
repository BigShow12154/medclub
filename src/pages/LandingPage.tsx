import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Users, 
  Activity, 
  ShoppingBag,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-dark to-primary py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-white p-1.5 rounded-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" 
                    stroke="#1A7AB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="#1A7AB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="#1A7AB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold text-white">HealthHub</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-white hover:text-blue-100 font-medium text-sm">
                Sign In
              </Link>
              <Link to="/register" className="bg-white text-primary hover:bg-blue-50 px-4 py-2 rounded-lg font-medium text-sm">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary-light text-white py-16 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Your Health Journey, Personalized and Connected
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Track symptoms, connect with doctors, and manage health data for you and your family in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="btn bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-base">
                  Start Your Journey
                </Link>
                <a href="#features" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-base">
                  Explore Features
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Healthcare professional with digital tablet" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Health Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              HealthHub provides all the tools you need to track, understand, and improve your health.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-12 h-12 text-primary" />,
                title: "Symptom Checker",
                description: "Identify potential health issues with our interactive body map and AI-powered symptom analyzer."
              },
              {
                icon: <Heart className="w-12 h-12 text-primary" />,
                title: "Connect with Doctors",
                description: "Find and schedule appointments with qualified healthcare professionals specialized in your needs."
              },
              {
                icon: <Users className="w-12 h-12 text-primary" />,
                title: "Family Health Management",
                description: "Monitor and manage the health of your loved ones in one secure platform."
              },
              {
                icon: <Activity className="w-12 h-12 text-primary" />,
                title: "Health Reports",
                description: "Access detailed health analytics and personalized recommendations."
              },
              {
                icon: <Shield className="w-12 h-12 text-primary" />,
                title: "Secure Data Storage",
                description: "Your health data is encrypted and securely stored, accessible only to you and authorized healthcare providers."
              },
              {
                icon: <ShoppingBag className="w-12 h-12 text-primary" />,
                title: "Health Products",
                description: "Shop for trusted health and wellness products recommended by healthcare professionals."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-105">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How HealthHub Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience a seamless health management journey with our easy-to-use platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Sign up and fill in your health information to get personalized recommendations."
              },
              {
                step: "02",
                title: "Track Your Health",
                description: "Use our interactive tools to monitor symptoms, record health data, and track progress."
              },
              {
                step: "03",
                title: "Connect & Improve",
                description: "Connect with healthcare providers, access insights, and take action to improve your health."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-50 rounded-2xl p-8 h-full">
                  <div className="absolute -top-5 -left-5 bg-primary text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/register" className="inline-flex items-center bg-primary text-white hover:bg-primary-dark px-8 py-3 rounded-lg font-semibold text-base">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from people who have transformed their health journey with HealthHub.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "HealthHub has completely changed how I manage my family's health. The symptom checker is remarkably accurate!",
                name: "Sarah Johnson",
                role: "Mother of three"
              },
              {
                quote: "As someone with multiple chronic conditions, having all my health data in one place has been life-changing.",
                name: "Michael Chen",
                role: "Patient"
              },
              {
                quote: "The ability to connect with specialists and track my recovery progress has made my post-surgery journey much smoother.",
                name: "Amelia Rodriguez",
                role: "Recovery patient"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Health Journey Today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of users who are taking control of their health with HealthHub.
            </p>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
              {['Personalized Health Tracking', 'Secure Data Management', 'Professional Support'].map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Link to="/register" className="inline-block bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg">
              Create Your Free Account
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white p-1.5 rounded-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" 
                      stroke="#1A7AB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V16" stroke="#1A7AB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="#1A7AB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="ml-2 text-xl font-bold text-white">HealthHub</span>
              </div>
              <p className="mb-4">Your comprehensive health management platform.</p>
              <div className="flex space-x-4">
                {/* Social Icons */}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Symptom Checker</a></li>
                <li><a href="#" className="hover:text-white">Health Reports</a></li>
                <li><a href="#" className="hover:text-white">Doctor Connect</a></li>
                <li><a href="#" className="hover:text-white">Family Health</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>support@healthhub.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Health Street, Medical City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} HealthHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
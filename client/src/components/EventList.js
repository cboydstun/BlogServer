import React, { useEffect, useState } from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log("Fetching events...");
        const response = await fetch("http://localhost:8080/events");
        if (!response.ok) {
          throw new Error("failed to fetch events");
        }
        const result = await response.json();
        console.log("Fetched events:", result);
        setEvents(result);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("unable to fetch events. Please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);
  const handleEventSignup = async (eventId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/events/${eventId}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to sign up for event");
      }
      setSignupSuccess("Succesfully signed up for the event");
      setEmail("");
      setSelectedEvent(null);
    } catch (error) {
      setError("Unable to sign up for event, please try again.");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Upcoming Events</h2>
      {loading && (
        <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
          <svg className="animate-spin h-5 w-5 mr-3 text-blue-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-blue-700">Loading events...</span>
        </div>
      )}
      {error && (
        <div className="p-4 mb-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
          <p className="text-red-700 font-medium">{error}</p>
        </div>
      )}
      {signupSuccess && (
        <div className="p-4 mb-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
          <p className="text-green-700 font-medium">{signupSuccess}</p>
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
        {events.map((event) => (
          <div key={event._id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{event.Description}</h3>
              <div className="space-y-3 flex-grow">
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">
                    {new Date(event.Date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-700">{event.Location}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedEvent(event._id)}
                className="mt-6 w-full py-3 px-6 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <span>Sign up for this event</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
   
    {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Sign up for this event</h3>
            <form 
              onSubmit={(e) => {
                e.preventDefault(); 
                handleEventSignup(selectedEvent)
              }}
              className="space-y-4"
            >
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <button 
                type="submit" 
                className="w-full py-3 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
              >
                Sign Up
              </button>
            </form>
            <button 
              onClick={() => setSelectedEvent(null)} 
              className="mt-4 w-full py-3 px-4 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Cancel
            </button>
        </div>
        </div>
    )}
     </div>
);
};

export default EventList

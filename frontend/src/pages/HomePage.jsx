import axios from 'axios';
import React, { useState } from 'react';
// import AdminDash from './pages/AdminDash';
import back2 from '../assets/back2.png';
// import AdminDashboard from './components/AdminDashboard';

const HomePage = () => {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const [message, setMessage] = useState('');
  const [dislogin, setDislogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    try {
      const response = await axios.post('http://localhost:5080/login', {
        username,
        password,
      });
      setMessage(response.data.message);
      setLogIn(response.data.login);
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('An error occurred');
    }
  };
  return (
    <div className='bg-slate-300 relative m-auto w-full h-screen '>

          <section className={`${dislogin ? 'hidden' : ''} z-50 absolute w-[80vw] rounded m-28 py-20 bg-gray-200`}>

            <div className="container mx-auto text-center">
              <button onClick={() => { setDislogin(true) }} className=' pb-8'>Home</button>
              <h3 className="text-3xl font-bold mb-8">Login</h3>
              <form onSubmit={handleSubmit} className='grid gap-4 mt-4 px-16 justify-center'>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder='Username'
                  className='p-2 border border-gray-300 rounded'
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder='Password'
                  className='p-2 border border-gray-300 rounded'
                />
                <button type='submit' className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>Login</button>
              </form>
              {message && <p className="mt-4 text-green-600">{message}</p>}
            </div>
          </section>

          <div className={`${dislogin ? '' : 'blur-md'} min-h-screen bg-gray-100`}>
            {/* Navigation Bar */}
            <nav className="bg-blue-600 p-4">
              <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Hostel Management System</h1>
                <ul className="flex space-x-4">
                  <li><a href="#features" className="text-white hover:text-blue-200">Features</a></li>
                  <li><a href="#about" className="text-white hover:text-blue-200">About</a></li>
                  <li><a href="#contact" className="text-white hover:text-blue-200">Contact</a></li>
                </ul>
              </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-blue-200 py-20">
              <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Welcome to Our Hostel Management System</h2>
                <p className="text-lg mb-6">Streamline your hostel management with ease and efficiency.</p>
                <button onClick={() => { setDislogin(false) }} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Get Started</button>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20">
              <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-8">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-2">Room Booking</h4>
                    <p>Easy room booking process with real-time availability.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-2">Maintenance Requests</h4>
                    <p>Submit maintenance requests quickly and track their status.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold mb-2">Payment Management</h4>
                    <p>Manage payments and keep track of transactions effortlessly.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Login Form Section */}


            {/* About Section */}
            <section id="about" className=" relative">

              <img src={back2} className='w-full bg-black opacity-30 absolute' alt="" />
              <div className="container py-20 mx-auto text-center">
                <h3 className="text-3xl font-bold mb-8">About Us</h3>
                <p className="max-w-xl mx-auto mb-4">
                  Our hostel management system is designed to simplify the management of hostels for colleges, ensuring a seamless experience for students and administrators alike.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
              <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
                <p className="mb-4">For inquiries, please reach out to us at:</p>
                <p className="font-semibold">contact@hostelmanagement.com</p>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 py-4 text-center text-white">
              <p>&copy; 2024 Hostel Management System. All rights reserved.</p>
            </footer>
          </div>




        </div>
  )
}

export default HomePage
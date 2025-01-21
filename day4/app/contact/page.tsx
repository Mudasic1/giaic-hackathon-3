import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-sm text-gray-500">Home / Contact</p>
      </div>
    </header>

    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold">Get In Touch With Us</h2>
        <p className="text-gray-600 mt-2">
          For more information about our products & services, please feel free to drop us an email.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-gray-600">2200 5th St, Avenue New York, NY 10037, USA</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-600">Mobile: +1 (246) 548-6987</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Working Time</h3>
            <p className="text-gray-600">Monday-Friday: 9:00 – 20:00</p>
          </div>
        </div>

        <form className="bg-white shadow rounded-lg p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              id="name"
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-yellow-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-yellow-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              id="subject"
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-yellow-500"
              placeholder="Subject (Optional)"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-yellow-500"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
            Submit
          </button>
        </form>
      </div>
    </main>
  </div>
  )
}

export default Contact

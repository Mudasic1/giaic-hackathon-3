"use client"

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Address Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
          <address className="text-sm text-gray-600">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <p className="text-sm text-gray-500 text-center">
        2023 Funiro. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

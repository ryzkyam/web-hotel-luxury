import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import assetheader from "../asset/p.jpg";

function Contact() {
  const [state, handleSubmit] = useForm("xrbbdvvo");

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${assetheader})` }}
      >
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url('https://via.placeholder.com/1920x1080')`, // Ganti URL dengan gambar Anda
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-h-full bg-gray-100 flex items-center justify-center bg-opacity-70">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Contact Us
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Have questions or need assistance? Feel free to reach out to us.
                We are here to help!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Our Address
                  </h3>
                  <p className="text-gray-600">123 Hotel Avenue</p>
                  <p className="text-gray-600">Bali, Indonesia</p>
                  <p className="text-gray-600 mb-4">Phone: +62 123 456 789</p>
                  <p className="text-gray-600 mb-4">Email: support@hotel.com</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-lg"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook"></i> Facebook
                    </a>
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-600 text-lg"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a
                      href="#"
                      className="text-red-600 hover:text-red-800 text-lg"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i> Instagram
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="name"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="email"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your email"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 font-medium mb-2"
                      htmlFor="message"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                  {state.succeeded && (
                    <p className="text-center text-lg text-green-500 mt-4">
                      Thanks for reaching out! We'll get back to you soon.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import assetheader from "../asset/p.jpg";

function HotelReviewForm() {
  const [state, handleSubmit] = useForm("yourFormspreeID"); // Ganti 'yourFormspreeID' dengan ID Formspree Anda

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${assetheader})` }}
      >
        <div className=" py-10 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Submit Your Review
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Input Nama */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Input Rating */}
              <div>
                <label
                  htmlFor="rating"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  min="1"
                  max="5"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter a rating (1-5)"
                />
                <ValidationError
                  prefix="Rating"
                  field="rating"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Input Komentar */}
              <div>
                <label
                  htmlFor="comment"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Review
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="4"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your review here"
                ></textarea>
                <ValidationError
                  prefix="Comment"
                  field="comment"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
              >
                {state.submitting ? "Submitting..." : "Submit Review"}
              </button>

              {/* Notifikasi Berhasil */}
              {state.succeeded && (
                <p className="text-center text-lg text-green-500 mt-4">
                  Thanks for your review! We'll process it shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelReviewForm;

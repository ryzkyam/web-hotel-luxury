import React from "react";
import mainscd from "../asset/blue-bg-second-section.svg";
function mainSecond() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-100vh">
  <div className="flex flex-col items-center">
    <h1 className="text-3xl font-bold text-center mb-5">Testimoni User</h1>
    <div className="flex gap-10 flex-wrap justify-center">
      {/* Testimoni Card 1 */}
      <div className="card w-80 glass">
        <figure>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user profile"
            className="rounded-full w-20 h-20 mx-auto mt-5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Sarah Johnson</h2>
          <p className="text-center">"Pengalaman luar biasa, sangat memuaskan! Pemandangan yang indah dan layanan yang ramah."</p>
        </div>
      </div>

      {/* Testimoni Card 2 */}
      <div className="card w-80 glass">
        <figure>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user profile"
            className="rounded-full w-20 h-20 mx-auto mt-5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Michael Brown</h2>
          <p className="text-center">"Sangat menyenangkan! Perjalanan saya menjadi lebih mudah dengan platform ini."</p>
        </div>
      </div>

      {/* Testimoni Card 3 */}
      <div className="card w-80 glass">
        <figure>
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="user profile"
            className="rounded-full w-20 h-20 mx-auto mt-5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Emily Davis</h2>
          <p className="text-center">"Saya sangat merekomendasikan! Aplikasinya mudah digunakan dan sangat membantu."</p>
        </div>
      </div>
    </div>
    <div className="flex gap-10 flex-wrap justify-center mt-10">
      {/* Testimoni Card 4 */}
      <div className="card w-80 glass">
        <figure>
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="user profile"
            className="rounded-full w-20 h-20 mx-auto mt-5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Daniel Smith</h2>
          <p className="text-center">"Fasilitas yang ditawarkan sangat baik, dan perjalanan saya menjadi lebih berkesan."</p>
        </div>
      </div>

      {/* Testimoni Card 5 */}
      <div className="card w-80 glass">
        <figure>
          <img
            src="https://randomuser.me/api/portraits/women/51.jpg"
            alt="user profile"
            className="rounded-full w-20 h-20 mx-auto mt-5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Sophia Williams</h2>
          <p className="text-center">"Saya sangat menikmati pengalaman ini. Akan menggunakan layanan ini lagi di masa depan!"</p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default mainSecond;

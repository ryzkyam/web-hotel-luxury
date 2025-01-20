import React, { useState } from 'react';

const FormVillaBooking = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [noHp, setNoHp] = useState('');
  const [alamat, setAlamat] = useState('');
  const [kota, setKota] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [jumlahTamu, setJumlahTamu] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [catatanTambahan, setCatatanTambahan] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nama || !email || !noHp || !checkInDate || !checkOutDate || !jumlahTamu) {
      alert('Semua field wajib diisi!');
      return;
    }

    const totalHarga = 2500000 * 3;

    console.log({
      nama,
      email,
      noHp,
      alamat,
      kota,
      checkInDate,
      checkOutDate,
      jumlahTamu,
      promoCode,
      catatanTambahan,
      totalHarga,
    });

    setNama('');
    setEmail('');
    setNoHp('');
    setAlamat('');
    setKota('');
    setCheckInDate('');
    setCheckOutDate('');
    setJumlahTamu('');
    setPromoCode('');
    setCatatanTambahan('');
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 m-4 w-full md:w-2/5">
        <h2 className="text-3xl font-bold mb-4 text-center">Guest Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-200"
                placeholder="Nama Lengkap"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-200"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">No. HP</label>
              <input
                type="text"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-200"
                placeholder="No. HP"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Alamat</label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-200"
                placeholder="Alamat"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Kota</label>
              <input
                type="text"
                value={kota}
                onChange={(e) => setKota(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-200"
                placeholder="Kota"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 m-4 w-full md:w-2/5">
        <h2 className="text-3xl font-bold mb-4 text-center">Villa Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-in Date</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-out Date</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Jumlah Tamu</label>
              <input
                type="number"
                value={jumlahTamu}
                onChange={(e) => setJumlahTamu(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-200"
                placeholder="Jumlah Tamu"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Promo Code</label>
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-200"
                placeholder="Promo Code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Catatan Tambahan</label>
              <textarea
                value={catatanTambahan}
                onChange={(e) => setCatatanTambahan(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-200"
                placeholder="Catatan Tambahan"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-green-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-600"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 m-4 w-full md:w-1/3">
        <h2 className="text-3xl font-bold mb-4 text-center">Villa Details</h2>
        <p className="text-gray-500 mb-6 text-center">Prices may vary according to availability and dates.</p>
        <div className="flex items-center mb-4 justify-center">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.IUHAwL-MYcyxLqLkufvOvQHaFj?pid=ImgDet&w=186&h=139&c=7"
            alt="Luxury Villa"
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="ml-4 text-center">
            <h3 className="text-xl font-bold">Villa Harmony</h3>
            <p className="text-gray-500">Bandung</p>
            <p className="text-lg font-semibold text-gray-900">Rp. 3,200,000</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <p className="text-gray-500">Subtotal</p>
            <p className="text-gray-900">Rp. 2,500,000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Tax</p>
            <p className="text-gray-900">Rp. 250,000</p>
          </div>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <p>Total</p>
          <p>Rp. 2,750,000</p>
        </div>
        <p className="text-gray-500 mt-2 text-center">Total includes all applicable taxes and fees.</p>
      </div>
    </div>
  );
};

export default FormVillaBooking;

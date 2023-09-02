import Iframe from "react-iframe";

const page = () => {
  return (
    <main>
      <h1 className="text-4xl font-bold">Lokasi</h1>
      <div className="flex flex-col gap-5 mt-5 text-justify text-lg">
        <p>
          Lokasi monumen yang satu ini terletak di Taman Mumbul Nusa Dua Bali.
          Dikarenakan letaknya di tengah taman Mumbul, monumen yang satu ini
          diberi nama Monumen Perjuangan Taman Mumbul. Taman ini terletak di
          tempat yang strategis yaitu di pinggir jalan By Pass I Gusti Ngurah
          Rai. Untuk bisa sampai ke sini juga tidak terlalu sulit. Wisatawan
          cukup menyeberang ke Nusa Dua dari Bali dan melewati jalan utama.
        </p>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15772.015707808872!2d115.194214!3d-8.7856993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46591b8e6db19986!2sMonumen+Taman+Mumbul!5e0!3m2!1sen!2sid!4v1547279987779"
          width="100%"
          height="500px"
          className="m-auto border-black border"
        />
        <p>
          Ada kabar baik bagi wisatawan yang ingin datang ke taman yang satu
          ini. Pasalnya tidak ada harga tiket yang perlu dibayarkan untuk bisa
          menikmati keindahan monumen yang satu ini. Hanya saja, karena
          lokasinya berada di tengah taman, maka retribusi yang harus dibayarkan
          adalah biaya untuk masuk ke taman. Namun biaya ini juga tidak mahal
          hanya bekisar 5 ribu atau 10 ribu saja.
        </p>
        <p>
          Wisatawan juga wajib membayar biaya parkir untuk kendaraan. Namun
          jangan khawatir biaya parkir ini juga tidak mahal. Besarnya biaya
          parkir di sini adalah biaya parkir rata-rata di Bali yaitu berkisar
          antar 2 ribu hingga 5 ribu Tentu saja biaya ini sangat murah. Apalagi
          mengingat monumen ini sangat menarik untuk dikunjungi.
        </p>
      </div>
    </main>
  );
};

export default page;

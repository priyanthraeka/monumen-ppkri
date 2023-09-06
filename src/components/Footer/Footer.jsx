import Image from "next/image";
import React from "react";
import logoMonumen from "@/assets/logo/monumen.png";

import {
  FaInstagram,
  FaMapMarkerAlt,
  FaMonument,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-[#111] shadow-lg relative right-0 bottom-0 left-0 py-5">
      <div className="h-full px-5 container m-auto text-white">
        <div className="grid grid-row-2 lg:grid-cols-2 gap-10">
          <div className="p-0 lg:p-10">
            <Logo size={150} />
            <div className="flex flex-col gap-4 mt-10">
              <p className="flex gap-3">
                <FaMapMarkerAlt size={20} />
                Jl. Bypass Ngurah Rai, Jimbaran, Kec. Kuta Sel., Kabupaten
                Badung, Bali 80361
              </p>
              <p className="flex gap-3">
                <FaPhoneAlt size={20} />
                0813-3800-9501
              </p>
            </div>
          </div>
          <div className="p-0 lg:p-10">
            <h1 className="mb-3 text-2xl font-yatra-one">Pemesanan Tiket</h1>
            <hr className="border border-[#393939] mb-4" />
            <ul className="flex-col flex gap-2">
              <li>Senin - Jumat (09:00 - 17:00)</li>
              <li>
                Sabtu - Minggu (Kepentingan Mendesak dan Kegiatan Foto. Hub:
                <a href="tel:+6281353427277" className="ms-1">
                  0813-5342-7277
                </a>
                )
              </li>
              <li>
                Hari Libur / Tanggal Merah (Hub:
                <a href="tel:+6281353427277" className="ms-1">
                  0813-5342-7277
                </a>
                )
              </li>
            </ul>
          </div>
        </div>
        <hr className="border border-[#393939] mb-4 mt-10 lg:mt-0" />
        <div className="flex flex-col lg:flex-row justify-between items-start gap-2">
          <p>Monumen PPKRI 1945</p>
          <ul className="flex flex-row gap-3 items-center">
            <li>
              <a href="#">
                <FaInstagram size={22} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaWhatsapp size={22} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

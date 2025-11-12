"use client";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
//redux manipulation
import { useSelector } from "react-redux";

const Social_media = () => {
  const { officeData, status, error } = useSelector((state) => state.office);

  if (status === "loading") return <p>Loading footer...</p>;
  if (!officeData || Object.keys(officeData).length === 0)
    return <p>Add your Information.</p>;
  return (
    <nav className="navbar bg-light px-3 border">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left side: logo + office name + slogan */}
        <div className="d-flex align-items-center">
          <div className="ms-2">
            <div>
              <a>{officeData.office_phone}</a>
            </div>
          </div>
        </div>

        {/* Right side: search + flag */}
        <div className="d-flex align-items-center ">
          <a>{officeData.office_email}</a>
        </div>
      </div>
    </nav>
  );
};

export default Social_media;

"use client";
import Image from "next/image";
import logo from '../../public/assets/logo.png';
import n_flag from "../../public/assets/n_flag.gif";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOfficeData } from "@/redux/officeSlice";

const Header = () => {
    const dispatch = useDispatch();
    const {officeData, status, error} = useSelector((state) => state.office);

useEffect(() =>{
    if(status === 'idle') dispatch (fetchOfficeData());
    },[status, dispatch]);

    if(status === 'loading') return <div>Loading...</div>;
  // If still no office data after fetching
  if (!officeData || Object.keys(officeData).length === 0)
    return <div>No office data found.</div>;

    return (
        <nav className="navbar bg-light px-3 ">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Left side: logo + office name + slogan */}
                <div className="d-flex align-items-center">
                    <Image src={logo} alt="logo" width={80} height={80} />
                    <div className="ms-2">
                               <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'red' }}>
                                  {officeData.office_name}
                               </div>
                                <div style={{ fontSize: '0.9rem', fontWeight: '400', color: "red"}}>
                                    {officeData.office_slogan}
                                </div>
                    </div>  
                </div>
                {/* Right side: search + flag */}
                <div className="d-flex align-items-center">
                    <form className="d-flex me-3" role="search">
                        <input
                            className="form-control form-control-sm me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{ width: '150px' }} // small search bar
                        />
                        <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
                    </form>
                    <Image src={n_flag} alt="flag" width={70} height={70} />
                </div>
            </div>
        </nav>
    );
}

export default Header;

import React from 'react';
import { NavLink, Outlet } from 'react-router';
import ProFastLogo from '../Pages/Shared/ProFastLogo/ProFastLogo';

const DashedBoardLayout = () => {
    return (
   <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            {/* Main Content */}
            <div className="drawer-content flex flex-col">
                {/* Mobile Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden px-4 py-2">
                    <div className="flex items-center gap-2">
                        {/* Menu Icon */}
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost p-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                        {/* Dashboard Text */}
                        <span className="text-lg font-semibold">Dashboard</span>
                    </div>
                </div>

                <Outlet />
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar Items */}
                    <ProFastLogo></ProFastLogo>
                    <li><a>Home</a></li>
                    <li><a><NavLink to="/dashboard/myParcels">My Parcels</NavLink></a></li>
                </ul>
            </div>
        </div>
    );
};

export default DashedBoardLayout;
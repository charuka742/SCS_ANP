import React, { useState } from "react";

export const DropDown = () => {
  interface User {
    userId: number;
    fname: string;
    lname: string;
    telephone: string;
    userRole: string;
    role: string;
  }

  const userJson = localStorage.getItem("loggedUser");
  const user: User | null = userJson ? JSON.parse(userJson).user : null;

  // console.log("userROle>>", user);
  return (
    <div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">
          Profile
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu shadow bg-black text-[10px] rounded-box w-40"
        >
          <li>
            <a href="/userDetails">View Profile</a>
          </li>
          {user?.role === "ADMIN" && (
            <li>
              <a href="/admindashboard">Admin Dashboard</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

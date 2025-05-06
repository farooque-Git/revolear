import React, { useState, useRef, useEffect } from "react";
import { FiBell } from "react-icons/fi";

const NotificationDropdown = () => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  // Replace with real notification data
  const notifications = [];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="relative text-2xl text-black"
        onClick={() => setShow(!show)}
      >
        <FiBell />
        <span className="absolute -top-1 -right-1 bg-red-500 w-2.5 h-2.5 rounded-full border border-white" />
      </button>

      {show && (
        <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 rounded-md shadow-lg p-4 z-50">
          <h4 className="text-sm font-semibold mb-2 text-gray-700">
            Notificaciones
          </h4>
          {notifications.length > 0 ? (
            <ul className="space-y-2">
              {notifications.map((note, idx) => (
                <li key={idx} className="text-sm text-gray-600">
                  {note}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">
              No hay nuevas notificaciones.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;

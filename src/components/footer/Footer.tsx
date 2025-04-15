import React from "react";

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-2">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} JottaDev. All rights reserved.</p>
      </div>
    </footer>
  );
}
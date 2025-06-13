import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We are dedicated to providing the best service to our customers.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled ">
              <li><Link href="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link href="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link href="/contact" className="text-light text-decoration-none">Contact</Link></li>
              <li><Link href="/todos" className="text-light text-decoration-none">Todos</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">Copy 2025  Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
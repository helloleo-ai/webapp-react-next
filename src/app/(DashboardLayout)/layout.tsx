"use client";
import { styled, Container, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import '../global.css';

// ... (keep the existing code)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);

    const updateTrailPosition = (e: MouseEvent) => {
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', updateTrailPosition);

    return () => {
      document.removeEventListener('mousemove', updateTrailPosition);
      document.body.removeChild(trail);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        document.body.removeChild(ripple);
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <MainWrapper className="mainwrapper">
      {/* ... (keep the existing JSX) */}
    </MainWrapper>
  );
}

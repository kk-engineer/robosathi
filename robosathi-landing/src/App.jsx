import React from 'react';
import logo from './image.png';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      {/* Watermark Background */}
      {/*<div style={{*/}
      {/*  position: 'absolute',*/}
      {/*  top: 0,*/}
      {/*  left: 0,*/}
      {/*  right: 0,*/}
      {/*  bottom: 0,*/}
      {/*  backgroundImage: `url(${logo})`,*/}
      {/*  backgroundRepeat: 'no-repeat',*/}
      {/*  backgroundPosition: 'center',*/}
      {/*  backgroundSize: '50%',*/}
      {/*  opacity: 0.5, // Increased visibility*/}
      {/*}}></div>*/}

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header with Top-Right Logo */}
        <header style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'rgba(255,255,255,0.95)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          padding: '1rem 0',
          zIndex: 100
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <nav style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#home" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Home</a>
              <a href="#videos" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Videos</a>
              <a href="#notes" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Notes</a>
              <a href="#friend" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Friend</a>
            </nav>

            {/* Top-Right Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={logo}
                alt="RoboSathi Logo"
                style={{
                  height: '32px',
                  width: 'auto',
                  display: 'block'
                }}
              />
              <span style={{ marginLeft: '0.5rem', fontSize: '1.125rem', fontWeight: '500' }}>
                RoboSathi
              </span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{
          maxWidth: '1200px',
          margin: '2rem auto 4rem',
          padding: '0 1rem',
          width: '100%',
          backgroundColor: 'rgba(255,255,255,0.85)',
          borderRadius: '8px'
        }}>
          <section id="videos" style={{ marginBottom: '3rem', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              AI Tutorial Videos
            </h2>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Access our library of tutorial videos covering various subjects and skill levels.
            </p>
          </section>

          <section id="notes" style={{ marginBottom: '3rem', padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Study Notes
            </h2>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Comprehensive study notes to help you learn AI concepts effectively.
            </p>
          </section>

          <section id="friend" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              AI Friend
            </h2>
            <p style={{ color: '#555', lineHeight: '1.5' }}>
              Your AI friend for learning assistance and academic support.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer style={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          padding: '1.5rem 0',
          borderTop: '1px solid #eaeaea',
          textAlign: 'center',
          width: '100%'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ color: '#555', marginBottom: '0.5rem' }}>
              contact@robosathi.com
            </p>
            <p style={{ color: '#777', fontSize: '0.875rem', margin: 0 }}>
              © 2025 RoboSathi.com All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
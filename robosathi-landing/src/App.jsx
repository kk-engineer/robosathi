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
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'clamp(200px, 50%, 600px)',
        opacity: 0.5,
        zIndex: 0
      }}></div>

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
          padding: 'clamp(0.5rem, 2vw, 1rem) 0',
          zIndex: 100
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2rem)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <nav style={{
              display: 'flex',
              gap: 'clamp(0.75rem, 2vw, 1.5rem)',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <a href="#home" style={{
                color: '#333',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                whiteSpace: 'nowrap'
              }}>Home</a>
              <a href="#videos" style={{
                color: '#333',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                whiteSpace: 'nowrap'
              }}>Videos</a>
              <a href="#notes" style={{
                color: '#333',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                whiteSpace: 'nowrap'
              }}>Notes</a>
              <a href="#friend" style={{
                color: '#333',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                whiteSpace: 'nowrap'
              }}>Friend</a>
            </nav>

            {/* Top-Right Logo with Home Link */}
            <a href="/" style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto'
            }}>
              <img
                src={logo}
                alt="RoboSathi Logo"
                style={{
                  height: 'clamp(28px, 3vw, 32px)',
                  width: 'auto',
                  display: 'block'
                }}
              />
              <span style={{
                marginLeft: 'clamp(0.25rem, 1vw, 0.5rem)',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                color: '#333'
              }}>
                RoboSathi
              </span>
            </a>
          </div>
        </header>

        {/* Welcome Banner - Lighter Royal Blue with Radiant Gradient */}
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          margin: 'clamp(1rem, 3vw, 2rem) auto 0',
          padding: 'clamp(1.5rem, 5vw, 2.5rem) clamp(1rem, 3vw, 2rem)',
          background: 'radial-gradient(circle at center, #3b82f6 0%, #1d4ed8 100%)', // Lighter blues
          color: 'white',
          textAlign: 'center',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)', // Matching shadow
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle light effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
            opacity: 0.7
          }}></div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
            fontWeight: '700',
            marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            position: 'relative'
          }}>
            Welcome to RoboSathi !
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
            lineHeight: '1.5',
            margin: 0,
            fontWeight: '500',
            opacity: '0.95',
            position: 'relative'
          }}>
            Your AI learning friend - Lets start !
          </p>
        </div>

        {/* Main Content - Now matches welcome banner width */}
        <main style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto clamp(2rem, 5vw, 4rem)',
          padding: '0 clamp(1rem, 3vw, 2rem)',
          backgroundColor: 'rgba(255,255,255,0.85)',
          borderRadius: '8px',
          boxSizing: 'border-box'
        }}>
          <section id="videos" style={{
            marginBottom: 'clamp(1.5rem, 4vw, 3rem)',
            padding: 'clamp(1.5rem, 4vw, 2rem)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
            }}>
              AI Tutorial Videos
            </h2>
            <p style={{
              color: '#555',
              lineHeight: '1.5',
              fontSize: 'clamp(0.9rem, 3vw, 1rem)'
            }}>
              Access our library of tutorial videos covering various subjects and skill levels.
            </p>
          </section>

          <section id="notes" style={{
            marginBottom: 'clamp(1.5rem, 4vw, 3rem)',
            padding: 'clamp(1.5rem, 4vw, 2rem)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
            }}>
              Study Notes
            </h2>
            <p style={{
              color: '#555',
              lineHeight: '1.5',
              fontSize: 'clamp(0.9rem, 3vw, 1rem)'
            }}>
              Comprehensive study notes to help you learn AI concepts effectively.
            </p>
          </section>

          <section id="friend" style={{
            padding: 'clamp(1.5rem, 4vw, 2rem)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
            }}>
              AI Friend
            </h2>
            <p style={{
              color: '#555',
              lineHeight: '1.5',
              fontSize: 'clamp(0.9rem, 3vw, 1rem)'
            }}>
              Your AI friend for learning assistance and academic support.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer style={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          padding: 'clamp(1rem, 2vw, 1.5rem) 0',
          borderTop: '1px solid #eaeaea',
          textAlign: 'center',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2rem)'
          }}>
            <p style={{
              color: '#555',
              marginBottom: '0.5rem',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)'
            }}>
              contact@robosathi.com
            </p>
            <p style={{
              color: '#777',
              fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
              margin: 0
            }}>
              © 2025 RoboSathi.com All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
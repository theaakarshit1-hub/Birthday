"use client"

import { useState, useEffect } from "react"

export default function BirthdayPage() {
  const [step, setStep] = useState(0)
  const [lightsOn, setLightsOn] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(false)
  const [balloonsFlying, setBalloonsFlying] = useState(false)
  const [cakeVisible, setCakeVisible] = useState(false)
  const [candleLit, setCandleLit] = useState(false)
  const [showWish, setShowWish] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  const messages = [
    "Today is...",
    "as beautiful as other days",
    "but you realize",
    "another year has gone",
    "in a blink of the eyes",
    "however",
    "Do you know..?",
    "today is just special",
    "so special to you",
    "that's why",
    "Let's make it...",
    "the best celebration ever",
    "and let me share...",
    "a piece of happiness to you",
    "I made all this...",
    "as a birthday present to you",
    "Sarah, you mean the world to me",
    "thank you for being you",
    "I wish you all the best",
    "May your life be filled with joy",
    "May all your wishes come true",
    "Remember",
    "your dreams",
    "you are like a star...",
    "shining bright in my sky",
    "This year will be amazing...",
    "because you make everything better",
    "indeed..",
    "but...",
    "don't worry",
    "because...",
    "I've got your back",
    "and",
    "this year will be incredible",
    "and I know",
    "you'll find...",
    "happiness along the way",
    "keep that beautiful smile",
    "enjoy every single moment...",
    "that you experience today",
    "fill it with your most beautiful smile",
    "and make it the best memory..",
    "lastly...",
    "I'd like to wish you one more time",
    "Happy Birthday, Sarah!",
    "I love you!",
  ]

  useEffect(() => {
    if (showMessage && messageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setMessageIndex((prev) => prev + 1)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [showMessage, messageIndex, messages.length])

  const lightColors = ["#facc15", "#f87171", "#60a5fa", "#4ade80", "#f472b6", "#fb923c"]
  const balloonColors = ["#facc15", "#f87171", "#60a5fa", "#4ade80", "#f472b6", "#fb923c", "#a78bfa"]

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: lightsOn ? "#FFDAB9" : "#000000",
        transition: "background-color 1s ease",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative Lights */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          padding: "24px 16px",
        }}
      >
        {lightColors.map((color, i) => (
          <div
            key={i}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: lightsOn ? color : "#374151",
              boxShadow: lightsOn ? `0 0 30px ${color}, 0 0 60px ${color}` : "none",
              transition: "all 0.5s ease",
            }}
          />
        ))}
      </div>

      {/* Banner */}
      {bannerVisible && (
        <div
          style={{
            textAlign: "center",
            padding: "32px 16px",
            animation: "fadeIn 1s ease",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 8vw, 4rem)",
              fontWeight: "bold",
              color: "#be123c",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              marginBottom: "8px",
            }}
          >
            Happy Birthday
          </h1>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 6vw, 3rem)",
              fontWeight: "bold",
              color: "#e11d48",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Sarah!
          </h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "16px" }}>
            {["S", "A", "R", "A", "H"].map((letter, i) => (
              <span
                key={i}
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  fontWeight: "bold",
                  color: lightColors[i],
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Balloons */}
      {balloonsFlying && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${5 + (i * 6)}%`,
                bottom: "-120px",
                animation: `floatUp ${10 + (i % 5) * 2}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "65px",
                  borderRadius: "50%",
                  backgroundColor: balloonColors[i % 7],
                  boxShadow: "inset -8px -8px 20px rgba(0,0,0,0.2)",
                }}
              />
              <div
                style={{
                  width: "2px",
                  height: "60px",
                  backgroundColor: "#9ca3af",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* SARAH Letter Balloons */}
      {showWish && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "16px",
            zIndex: 10,
          }}
        >
          {["S", "A", "R", "A", "H"].map((letter, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: "60px",
                  height: "75px",
                  borderRadius: "50%",
                  backgroundColor: lightColors[i],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "white",
                  boxShadow: "inset -5px -5px 15px rgba(0,0,0,0.2)",
                }}
              >
                {letter}
              </div>
              <div
                style={{
                  width: "2px",
                  height: "40px",
                  backgroundColor: "#9ca3af",
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Cake */}
      {cakeVisible && !showMessage && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "32px 16px",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* Candles */}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "8px" }}>
              {[...Array(5)].map((_, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {candleLit && (
                    <div
                      style={{
                        width: "12px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "linear-gradient(to top, #fb923c, #facc15, #fff)",
                        boxShadow: "0 0 15px #facc15, 0 0 30px #fb923c",
                        animation: "flicker 0.3s ease-in-out infinite",
                        marginBottom: "4px",
                      }}
                    />
                  )}
                  <div
                    style={{
                      width: "10px",
                      height: "40px",
                      backgroundColor: "#fda4af",
                      borderRadius: "2px",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Cake Layers */}
            <div
              style={{
                width: "220px",
                height: "40px",
                backgroundColor: "#fce7f3",
                borderRadius: "8px 8px 0 0",
              }}
            />
            <div
              style={{
                width: "220px",
                height: "70px",
                background: "linear-gradient(to bottom, #fda4af, #be185d)",
                borderRadius: "0 0 8px 8px",
              }}
            />
            <div
              style={{
                width: "260px",
                height: "90px",
                background: "linear-gradient(to bottom, #ec4899, #9d174d)",
                borderRadius: "0 0 12px 12px",
                marginLeft: "-20px",
                marginTop: "-4px",
              }}
            />

            {/* Cake Text */}
            <div
              style={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "1.25rem",
                fontWeight: "bold",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              Sarah
            </div>
          </div>
        </div>
      )}

      {/* Message Display */}
      {showMessage && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            padding: "16px",
            gap: "24px",
          }}
        >
          {/* Couple Photo */}
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #e11d48",
              boxShadow: "0 8px 32px rgba(225,29,72,0.3)",
              animation: "fadeIn 1s ease",
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/003b387f-1857-4f21-a62f-224e1e1eb023-kxDypukUuh5wEdTlM7R6yqNdJiLVJK.jpg"
              alt="Us together"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              fontWeight: "500",
              color: "#be123c",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              animation: "fadeIn 0.5s ease",
            }}
          >
            {messages[messageIndex]}
          </p>
        </div>
      )}

      {/* Control Buttons */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px",
          backgroundColor: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(8px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {step === 0 && (
          <button
            onClick={() => {
              setLightsOn(true)
              setStep(1)
            }}
            style={{
              padding: "12px 24px",
              backgroundColor: "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(225,29,72,0.4)",
            }}
          >
            Turn On Lights
          </button>
        )}
        {step === 1 && (
          <button
            onClick={() => {
              setBannerVisible(true)
              setStep(2)
            }}
            style={{
              padding: "12px 24px",
              backgroundColor: "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(225,29,72,0.4)",
            }}
          >
            {"Let's Decorate"}
          </button>
        )}
        {step === 2 && (
          <button
            onClick={() => {
              setBalloonsFlying(true)
              setStep(3)
            }}
            style={{
              padding: "12px 24px",
              backgroundColor: "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(225,29,72,0.4)",
            }}
          >
            Release Balloons
          </button>
        )}
        {step === 3 && (
          <button
            onClick={() => {
              setCakeVisible(true)
              setStep(4)
            }}
            style={{
              padding: "12px 24px",
              backgroundColor: "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(225,29,72,0.4)",
            }}
          >
            Bring the Cake
          </button>
        )}
        {step === 4 && (
          <button
            onClick={() => {
              setCandleLit(true)
              setStep(5)
            }}
            style={{
              padding: "12px 24px",
              backgroundColor: "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(225,29,72,0.4)",
            }}
          >
            Light the Candles
          </button>
        )}
        {step === 5 && (
          <button
            onClick={() => {
              setShowWish(true)
              setStep(6)
            }}
            style={{
              padding: "12px 24px",
              backgroundColor: "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(225,29,72,0.4)",
            }}
          >
            Make a Wish!
          </button>
        )}
        {step === 6 && (
          <button
            onClick={() => {
              setShowMessage(true)
              setStep(7)
            }}
            style={{
              padding: "12px 24px",
              backgroundColor: "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(225,29,72,0.4)",
            }}
          >
            A Special Message for Sarah
          </button>
        )}
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes flicker {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"

export default function BirthdayPage() {
  const [step, setStep] = useState(0)
  const [lightsOn, setLightsOn] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(false)
  const [balloonsFlying, setBalloonsFlying] = useState(false)
  const [cakeVisible, setCakeVisible] = useState(false)
  const [candleLit, setCandleLit] = useState(false)
  const [showWish, setShowWish] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

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
    const timer = setTimeout(() => setLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showMessage && messageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setMessageIndex((prev) => prev + 1)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [showMessage, messageIndex, messages.length])

  const handleTurnOnLights = () => {
    setLightsOn(true)
    setStep(1)
  }

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {})
      setMusicPlaying(true)
    }
    setStep(2)
  }

  const handleDecorate = () => {
    setBannerVisible(true)
    setStep(3)
  }

  const handleBalloons = () => {
    setBalloonsFlying(true)
    setStep(4)
  }

  const handleCake = () => {
    setCakeVisible(true)
    setStep(5)
  }

  const handleLightCandle = () => {
    setCandleLit(true)
    setStep(6)
  }

  const handleWish = () => {
    setShowWish(true)
    setStep(7)
  }

  const handleStory = () => {
    setShowMessage(true)
    setStep(8)
  }

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-1000 ${
        lightsOn
          ? musicPlaying
            ? "animate-background-pulse"
            : "bg-[#FFDAB9]"
          : "bg-black"
      }`}
    >
      {/* Loading Screen */}
      {!loaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        </div>
      )}

      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src="/hbd.mp3" type="audio/mpeg" />
      </audio>

      {/* Main Content */}
      {loaded && (
        <div className="relative">
          {/* Decorative Lights */}
          <div className="flex justify-center gap-4 py-4 md:gap-8">
            {["yellow", "red", "blue", "green", "pink", "orange"].map((color) => (
              <div
                key={color}
                className={`h-10 w-10 rounded-full transition-all duration-500 md:h-12 md:w-12 ${
                  lightsOn
                    ? musicPlaying
                      ? `animate-bulb-${color}`
                      : `bg-${color}-400 shadow-lg shadow-${color}-400/50`
                    : "bg-gray-700"
                }`}
                style={{
                  backgroundColor: lightsOn
                    ? color === "yellow"
                      ? "#facc15"
                      : color === "red"
                        ? "#f87171"
                        : color === "blue"
                          ? "#60a5fa"
                          : color === "green"
                            ? "#4ade80"
                            : color === "pink"
                              ? "#f472b6"
                              : "#fb923c"
                    : "#374151",
                  boxShadow: lightsOn
                    ? `0 0 20px ${
                        color === "yellow"
                          ? "#facc15"
                          : color === "red"
                            ? "#f87171"
                            : color === "blue"
                              ? "#60a5fa"
                              : color === "green"
                                ? "#4ade80"
                                : color === "pink"
                                  ? "#f472b6"
                                  : "#fb923c"
                      }`
                    : "none",
                  animation: musicPlaying ? `pulse-${color} 1s ease-in-out infinite` : "none",
                }}
              />
            ))}
          </div>

          {/* Banner */}
          <div
            className={`flex justify-center py-8 transition-all duration-1000 ${
              bannerVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
            }`}
          >
            <div className="relative">
              <h1 className="text-center font-serif text-4xl font-bold text-rose-600 drop-shadow-lg md:text-6xl lg:text-7xl">
                Happy Birthday
              </h1>
              <h2 className="mt-2 text-center font-serif text-3xl font-bold text-rose-500 drop-shadow-lg md:text-5xl lg:text-6xl">
                Sarah!
              </h2>
              <div className="mt-4 flex justify-center gap-2">
                {["S", "A", "R", "A", "H"].map((letter, i) => (
                  <span
                    key={i}
                    className="text-2xl font-bold md:text-4xl"
                    style={{
                      color: ["#facc15", "#f87171", "#60a5fa", "#4ade80", "#f472b6"][i],
                      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Balloons */}
          {balloonsFlying && (
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${Math.random() * 90}%`,
                    bottom: "-100px",
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${8 + Math.random() * 4}s`,
                  }}
                >
                  <div
                    className="h-16 w-12 rounded-full md:h-24 md:w-16"
                    style={{
                      backgroundColor: ["#facc15", "#f87171", "#60a5fa", "#4ade80", "#f472b6", "#fb923c", "#a78bfa"][
                        i % 7
                      ],
                      boxShadow: "inset -5px -5px 15px rgba(0,0,0,0.2)",
                    }}
                  />
                  <div className="mx-auto h-12 w-0.5 bg-gray-400 md:h-20" />
                </div>
              ))}

              {/* SARAH balloons */}
              {showWish && (
                <div className="fixed left-1/2 top-1/4 flex -translate-x-1/2 gap-2 md:gap-4">
                  {["S", "A", "R", "A", "H"].map((letter, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className="flex h-16 w-12 items-center justify-center rounded-full text-xl font-bold text-white md:h-24 md:w-20 md:text-3xl"
                        style={{
                          backgroundColor: ["#facc15", "#f87171", "#60a5fa", "#4ade80", "#f472b6"][i],
                          boxShadow: "inset -5px -5px 15px rgba(0,0,0,0.2)",
                        }}
                      >
                        {letter}
                      </div>
                      <div className="h-8 w-0.5 bg-gray-400 md:h-12" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Cake */}
          {cakeVisible && !showMessage && (
            <div className="flex justify-center py-8">
              <div className="relative">
                {/* Candles */}
                <div className="flex justify-center gap-3 md:gap-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      {candleLit && (
                        <div
                          className="mb-1 h-4 w-3 animate-flicker rounded-full md:h-6 md:w-4"
                          style={{
                            background: "linear-gradient(to top, #fb923c, #facc15, #fff)",
                            boxShadow: "0 0 10px #facc15, 0 0 20px #fb923c",
                          }}
                        />
                      )}
                      <div className="h-8 w-2 rounded-sm bg-rose-300 md:h-12 md:w-3" />
                    </div>
                  ))}
                </div>

                {/* Cake layers */}
                <div className="mt-2 h-8 w-48 rounded-t-lg bg-pink-200 md:h-12 md:w-64" />
                <div
                  className="h-16 w-48 rounded-b-lg md:h-24 md:w-64"
                  style={{
                    background: "linear-gradient(to bottom, #fda4af, #be185d)",
                  }}
                />
                <div
                  className="-mt-1 h-20 w-52 rounded-b-lg md:h-28 md:w-72"
                  style={{
                    background: "linear-gradient(to bottom, #ec4899, #9d174d)",
                    marginLeft: "-8px",
                  }}
                />

                {/* Cake decoration */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 text-center">
                  <span className="text-lg font-bold text-white drop-shadow-lg md:text-2xl">Sarah</span>
                </div>
              </div>
            </div>
          )}

          {/* Message Display */}
          {showMessage && (
            <div className="flex min-h-[50vh] items-center justify-center px-4">
              <div className="text-center">
                <p
                  className="text-2xl font-medium text-rose-700 transition-opacity duration-500 md:text-4xl lg:text-5xl"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}
                >
                  {messages[messageIndex]}
                </p>
              </div>
            </div>
          )}

          {/* Control Buttons */}
          <div className="fixed bottom-0 left-0 right-0 bg-black/20 p-4 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center gap-2">
              {step === 0 && (
                <button
                  onClick={handleTurnOnLights}
                  className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl md:px-6 md:py-3 md:text-base"
                >
                  Turn On Lights
                </button>
              )}
              {step === 1 && (
                <button
                  onClick={handlePlayMusic}
                  className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl md:px-6 md:py-3 md:text-base"
                >
                  Play Music
                </button>
              )}
              {step === 2 && (
                <button
                  onClick={handleDecorate}
                  className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl md:px-6 md:py-3 md:text-base"
                >
                  {"Let's Decorate"}
                </button>
              )}
              {step === 3 && (
                <button
                  onClick={handleBalloons}
                  className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl md:px-6 md:py-3 md:text-base"
                >
                  Fly With Balloons
                </button>
              )}
              {step === 4 && (
                <button
                  onClick={handleCake}
                  className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl md:px-6 md:py-3 md:text-base"
                >
                  Most Delicious Cake Ever
                </button>
              )}
              {step === 5 && (
                <button
                  onClick={handleLightCandle}
                  className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl md:px-6 md:py-3 md:text-base"
                >
                  Light Candles
                </button>
              )}
              {step === 6 && (
                <button
                  onClick={handleWish}
                  className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl md:px-6 md:py-3 md:text-base"
                >
                  Happy Birthday Sarah!
                </button>
              )}
              {step === 7 && (
                <button
                  onClick={handleStory}
                  className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl md:px-6 md:py-3 md:text-base"
                >
                  A Message For You
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
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
        .animate-float {
          animation: float linear forwards;
        }
        @keyframes flicker {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        .animate-flicker {
          animation: flicker 0.3s ease-in-out infinite;
        }
        @keyframes background-pulse {
          0%,
          100% {
            background-color: #ffdab9;
          }
          25% {
            background-color: #ffe4b5;
          }
          50% {
            background-color: #ffdab9;
          }
          75% {
            background-color: #ffefd5;
          }
        }
        .animate-background-pulse {
          animation: background-pulse 8s linear infinite;
        }
      `}</style>
    </div>
  )
}

import React, { lazy, useEffect, useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./Pages/Landing";
const Login = lazy(() => import("./Pages/Login"));
const Signup = lazy(() => import("./Pages/Signup"));
import Page404 from "./Pages/Page404";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import PublicLayout from "./layouts/PublicLayout";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import authStore from "./store/authStore";

// Check for speech recognition API globally
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function App() {
  const { role } = authStore((state) => state);
  const navigate = useNavigate();
  
  const recognitionRef = useRef(null);
  const [transcript, setTranscript] = useState("");

  // Function to normalize and handle voice commands
  const handleVoiceCommand = (command) => {
    console.log("Detected voice command:", command);

    const normalizedCommand = command.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();

    if (normalizedCommand.includes("home") || normalizedCommand.includes("landing")) {
      navigate("/");
    } else if (normalizedCommand.includes("login")) {
      navigate("/login");
    } else if (normalizedCommand.includes("sign up") || normalizedCommand.includes("signup")) {
      navigate("/signup");
    } else if (normalizedCommand.includes("about")) {
      navigate("/about");
    } else if (normalizedCommand.includes("dashboard")) {
      navigate("/user/dashboard");
    } else {
      console.log("Unrecognized voice command:", command);
    }
  };

  // Start/Stop Speech Recognition safely
  const startRecognition = () => {
    if (recognitionRef.current && recognitionRef.current.start) {
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.warn("Speech recognition already running.");
      }
    }
  };

  const stopRecognition = () => {
    if (recognitionRef.current && recognitionRef.current.stop) {
      recognitionRef.current.stop();
    }
  };

  const restartRecognition = () => {
    stopRecognition();
    setTimeout(startRecognition, 1000);
  };

  // Initialize speech recognition
  useEffect(() => {
    if (!SpeechRecognition) {
      console.warn("Speech Recognition API is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const latestTranscript = event.results[event.results.length - 1][0].transcript;
      const lowerCaseCommand = latestTranscript.trim().toLowerCase();
      setTranscript(lowerCaseCommand);
      handleVoiceCommand(lowerCaseCommand);
    };

    recognition.onerror = (error) => {
      console.warn("Speech recognition error:", error);
      restartRecognition();
    };

    recognition.onend = () => {
      console.log("Speech recognition ended, restarting...");
      restartRecognition();
    };

    startRecognition();

    // Cleanup on unmount
    return () => {
      stopRecognition();
    };
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<MainLayout role="user" />}>
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Catch-All Route */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;

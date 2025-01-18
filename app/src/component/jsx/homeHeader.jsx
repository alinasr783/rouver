import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase.js";
import Badge from '@mui/material/Badge';
import Skeleton from '@mui/material/Skeleton';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/homeHeader.css";

export default function HomeHeader({ searchMode }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getGreeting = () => {
    const greetings = {
      morning: ["Good morn", "Rise & shine", "Top morning"],
      afternoon: ["Good day", "Hey there", "Lovely noon"],
      evening: ["Good eve", "Nice night", "Evening joy"],
      night: ["Sweet dreams", "Night vibes", "Good night"],
    };

    const now = new Date();
    const hour = now.getHours();
    let timePeriod;

    if (hour >= 5 && hour < 12) {
      timePeriod = "morning";
    } else if (hour >= 12 && hour < 17) {
      timePeriod = "afternoon";
    } else if (hour >= 17 && hour < 22) {
      timePeriod = "evening";
    } else {
      timePeriod = "night";
    }

    const periodGreetings = greetings[timePeriod];
    const randomIndex = Math.floor(Math.random() * periodGreetings.length);
    setGreeting(periodGreetings[randomIndex]);
    setLoading(false);
  };

  const getName = async (userEmail) => {
    try {
      const { data, error } = await supabase
        .from("identity")
        .select("first_name")
        .eq("email", userEmail)
        .single();
      if (error) throw error;
      setName(data.first_name);
    } catch (error) {
      console.error("Error fetching user name:", error.message);
      setName("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        getName(user.email);
      } else {
        setEmail(null);
        setName("");
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (!loading) {
      getGreeting();
    }
  }, [loading]);

  return (
    <div className="home-header">
      <div className="home-header-content">
        {loading ? (
          <Skeleton variant="text" width="80%" height="100%" />
        ) : (
          <div className="home-header-content-greeting">
            {greeting} {name && name}
          </div>
        )}
        <div className="home-header-content-notification">
          {loading ? (
            <Skeleton variant="circular" width={45} height={45} />
          ) : (
            <div className="home-header-content-notification-bg">
              <Badge
                badgeContent={5}
                sx={{
                  "& .MuiBadge-badge": { color: "#f4f4f4", backgroundColor: "#37474f" },
                }}
              >
                <i className="fas fa-bell"></i>
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
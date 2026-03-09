"use client";
import Cookies from "js-cookie";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "@/helper/BASE_URL";
import toast from "react-hot-toast";
import LoadingPage from "@/components/shared/LoadingPage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check user persistence on App load / reload
  useEffect(() => {
    const fetchLoggedUser = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/auth/logged-user`, {
          withCredentials: true,
        });

        if (response.data.success && response.data.data) {
          setUser(response.data.data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log("No active session found", err);
        setUser(null);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLoggedUser();
  }, []);

  const loginUser = (userData) => {
    setUser(userData);
  };

  // const logoutUser = async () => {
  //   try {
  //     const res = await axios.get(`${BASE_URL}/auth/logout`, {
  //       withCredentials: true,
  //     });
  //     if (res.data.success) {
  //       toast.success(res.data.message || "Logged out successfully");

  //       setUser(null);

  //       setTimeout(() => {
  //         window.location.replace("/");
  //       }, 500);
  //     }

  //     // if (res.data.success) {
  //     //   toast.success(res.data.message );

  //     //   setUser(null);

  //     //   window.location.replace("/");
  //     // }
  //   } catch (err) {
  //     console.error("Logout failed", err);
  //     toast.error("Logout failed. Please try again.");

  //     setUser(null);
  //     window.location.href = "/";
  //   }
  // };

  const logoutUser = async () => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/logout`, {}, {
      withCredentials: true,
    });
    
    if (res.data.success) {
      toast.success(res.data.message || "Logged out successfully");
      setUser(null);
      setTimeout(() => {
        window.location.replace("/");
      }, 500);
    }
  } catch (err) {
    console.error("Logout failed", err);
    // যদি রাউট খুঁজে না পায় (404), তাহলে হয়তো URL ভুল বা ব্যাকএন্ডে POST করা হয়নি
    setUser(null);
    window.location.href = "/";
  }
};

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        error,
        loginUser,
        logoutUser,
      }}
    >
      {!loading ? (
        children
      ) : (
        <div className="flex h-screen items-center justify-center text-lg font-medium">
          <LoadingPage />
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

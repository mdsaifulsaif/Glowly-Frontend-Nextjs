"use client";

import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingPage from "@/components/shared/LoadingPage";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {

    if (!loading && !user) {
      router.push("/login");
      return;
    }


    if (!loading && user && user.role !== "admin") {
    
      router.push("/");
    }
  }, [user, loading, router]);

 
  if (loading) {
    return <LoadingPage />;
  }

 
  return user && user.role === "admin" ? children : null;
};

export default ProtectedRoute;

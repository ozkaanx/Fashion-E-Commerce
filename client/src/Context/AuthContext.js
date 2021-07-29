import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const authtStorageData = JSON.parse(localStorage.getItem('authorized')||"[]")
  const [authorized, setAuthorized] = useState(authtStorageData);

  return (
    <AuthContext.Provider value={[authorized, setAuthorized]}>
      {props.children}
    </AuthContext.Provider>
  );
}

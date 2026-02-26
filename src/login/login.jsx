import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!isLogin) {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (password.length < 4) {
        setError("Password must be at least 4 characters");
        return;
      }
      localStorage.setItem("currentUser", username);
      setCurrentUser(username);
      alert(`Account created for ${username}!`);
    } else {
      localStorage.setItem("currentUser", username);
      setCurrentUser(username);
    }

    navigate("/create");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  if (currentUser) {
    return (
      <main className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-lg">
              <div className="card-body p-4 text-center">
                <h2 className="card-title mb-3">Welcome back!</h2>
                <hr />
                <p className="my-4">
                  Logged in as: <strong>{currentUser}</strong>
                </p>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => navigate("/create")}
                  >
                    Create Mech Sheet
                  </button>
                  <button
                    className="btn btn-secondary btn-lg"
                    onClick={() => navigate("/browse")}
                  >
                    Browse Mech Sheets
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-lg">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-3">
                {isLogin ? "Login" : "Create Account"}
              </h2>
              <hr />
              <p className="text-center my-3">
                Welcome to Mech Designer!
                <br />
                {isLogin
                  ? "Sign in to access your mech sheets"
                  : "Create an account to start designing"}
              </p>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {!isLogin && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                )}

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    {isLogin ? "Login" : "Create Account"}
                  </button>
                </div>
              </form>

              <hr />
              <p className="text-center mb-0">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  className="btn btn-link p-0"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError("");
                  }}
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

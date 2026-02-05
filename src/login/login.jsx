import React from "react";

export function Login() {
  return (
    <main className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-lg">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-3">Welcome!</h2>
              <hr />
              <p className="text-center my-4">
                Welcome to Create Mech Sheets!
                <br />
                This will allow users to create an account
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="Enter your name"
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
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Enter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome!</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
            <a className="navbar-brand" href="login.html">Mech Designer</a>
            <div className="navbar-nav">
                <a className="nav-link" href="create.html">Create Mech Sheet</a>
                <a className="nav-link" href="browse.html">Browse Mech Sheets</a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div className="container">
        <div className="row justify-content-center align-items-center" style="min-height: 80vh;">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-lg">
                    <div className="card-body p-4">
                        <h2 className="card-title text-center mb-3">Welcome!</h2>
                        <hr>
                        <p className="text-center my-4">
                            Welcome to Create Mech Sheets!<br>
                            This will allow users to create an account
                        </p>
                        
                        <!-- Form -->
                        <form>
                            <div className="mb-3">
                                <label for="nameInput" className="form-label">Name</label>
                                <input type="text" className="form-control" id="nameInput" placeholder="Enter your name">
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password">
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary btn-lg">Enter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer className="footer mt-auto py-3 bg-light">
        <div className="container text-center">
            <p className="text-muted mb-0">
                Author: Bennet Hill. To see the full project, check out my 
                <a href="https://github.com/Toadhini/Mech_Designer_Startup" target="_blank">GitHub repository</a>
            </p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
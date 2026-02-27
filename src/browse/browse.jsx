import React, { useState } from 'react';

export function Browse() {
    // State to track which mech's details we're viewing (null = none selected)
    const [selectedMech, setSelectedMech] = useState(null);

    return (
        <main className="container py-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="display-5">Browse Mech Sheets</h2>
                    <p className="lead">Here you can browse existing mech sheets.</p>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card mech-card shadow">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">Placeholder Mech</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text"><strong>Username:</strong> Placeholder User</p>
                            
                            <table className="table table-sm table-bordered mt-3">
                                <tbody>
                                    <tr>
                                        <td><strong>Attack</strong></td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Armor</strong></td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Speed</strong></td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Weight</strong></td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Energy</strong></td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-primary btn-sm w-100">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
import React, { useState, useEffect } from 'react';
import { formatModifier } from '../services/pilotService';
import { getAllMechs } from '../services/mechService';

export function Browse() {
    // State to track which mech's details we're viewing (null = none selected)
    const [selectedMech, setSelectedMech] = useState(null);
    
    // State for mechs from database
    const [allMechs, setAllMechs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load mechs from database on component mount
    useEffect(() => {
        async function fetchMechs() {
            try {
                const mechs = await getAllMechs();
                setAllMechs(mechs);
            } catch (error) {
                console.error('Failed to load mechs:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchMechs();
    }, []);

    return (
        <main className="container py-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="display-5">Browse Mech Sheets</h2>
                    <p className="lead">Here you can browse existing mech sheets.</p>
                </div>
            </div>

            {loading && (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {!loading && allMechs.length === 0 && (
                <div className="alert alert-info">
                    No mechs have been created yet. Be the first to create one!
                </div>
            )}

            <div className="row g-4">
                {allMechs.map((mech) => (
                    <div key={mech._id || mech.id} className="col-12 col-md-6 col-lg-4">
                        <div className="card mech-card shadow">
                            <div className="card-header bg-primary text-white">
                                <h5 className="mb-0">{mech.name}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text"><strong>Username:</strong> {mech.username}</p>

                                <table className="table table-sm table-bordered mt-3">
                                    <tbody>
                                        <tr>
                                            <td><strong>Attack</strong></td>
                                            <td>{mech.stats.attack}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Armor</strong></td>
                                            <td>{mech.stats.armor}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Speed</strong></td>
                                            <td>{mech.stats.speed}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Weight</strong></td>
                                            <td>{mech.stats.weight}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Energy</strong></td>
                                            <td>{mech.stats.energy}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                <button
                                    className="btn btn-outline-primary btn-sm w-100"
                                    onClick={() => setSelectedMech(mech)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal - only shows when selectedMech is not null */}
            {selectedMech && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title">{selectedMech.name}</h5>
                                <button 
                                    type="button" 
                                    className="btn-close btn-close-white" 
                                    onClick={() => setSelectedMech(null)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Created by:</strong> {selectedMech.username}</p>
                                <hr />
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Parts Configuration</h6>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Head:</span>
                                                <span>{selectedMech.parts.head}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Left Shoulder:</span>
                                                <span>{selectedMech.parts.leftShoulder}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Right Shoulder:</span>
                                                <span>{selectedMech.parts.rightShoulder}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Left Hand:</span>
                                                <span>{selectedMech.parts.leftHand}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Right Hand:</span>
                                                <span>{selectedMech.parts.rightHand}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Body:</span>
                                                <span>{selectedMech.parts.body}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Core:</span>
                                                <span>{selectedMech.parts.core}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between">
                                                <span>Legs:</span>
                                                <span>{selectedMech.parts.legs}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h6>Statistics</h6>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td><strong>Attack</strong></td>
                                                    <td>{selectedMech.stats.attack}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Armor</strong></td>
                                                    <td>{selectedMech.stats.armor}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Speed</strong></td>
                                                    <td>{selectedMech.stats.speed}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Weight</strong></td>
                                                    <td>{selectedMech.stats.weight}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Energy</strong></td>
                                                    <td>{selectedMech.stats.energy}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Pilot Profile Section */}
                                {selectedMech.pilot && (
                                    <>
                                        <hr />
                                        <h6>Pilot Profile</h6>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="mb-1"><strong>{selectedMech.pilot.name}</strong></p>
                                                <span className="badge bg-primary">{selectedMech.pilot.pilotClass?.name}</span>
                                                <p className="text-muted small mt-2">{selectedMech.pilot.pilotClass?.description}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <table className="table table-sm table-bordered">
                                                    <tbody>
                                                        {Object.entries(selectedMech.pilot.stats).map(([stat, value]) => (
                                                            <tr key={stat}>
                                                                <td><strong>{stat}</strong></td>
                                                                <td>{value}</td>
                                                                <td className="text-muted">{formatModifier(value)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {selectedMech.pilot.apiSource && (
                                            <p className="text-success small mb-0">
                                                ✓ Pilot stats powered by D&D 5e API
                                            </p>
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-secondary" 
                                    onClick={() => setSelectedMech(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
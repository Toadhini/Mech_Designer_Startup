import React, { useState } from 'react';

// Mock data - later this will come from your database
const mockMechs = [
    {
        id: 1,
        name: "Shadow Striker",
        username: "MechPilot42",
        parts: {
            head: "Light Head",
            leftShoulder: "Light Left Shoulder",
            rightShoulder: "Light Right Shoulder",
            leftHand: "Machine Gun",
            rightHand: "Sword",
            body: "Light Body",
            core: "Energy Core",
            legs: "Medium Legs"
        },
        stats: { attack: 45, armor: 30, speed: 85, weight: 120, energy: 60 }
    },
    {
        id: 2,
        name: "Iron Guardian",
        username: "TankMaster",
        parts: {
            head: "Heavy Head",
            leftShoulder: "Heavy Left Shoulder",
            rightShoulder: "Heavy Right Shoulder",
            leftHand: "Rocket Launcher",
            rightHand: "Heavy Machine Gun",
            body: "Heavy Body",
            core: "Fusion Core",
            legs: "Heavy Legs"
        },
        stats: { attack: 80, armor: 95, speed: 25, weight: 250, energy: 45 }
    }
];

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
                {mockMechs.map((mech) => (
                    <div key={mech.id} className="col-12 col-md-6 col-lg-4">
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
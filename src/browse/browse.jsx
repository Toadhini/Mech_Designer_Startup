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
        </main>
    )
}
import React, { useState } from 'react';

export function Create() {
    return (
        <main className="container-fluid py-4">
        <div className="row g-4">
            <div className="col-lg-4 col-md-12">
                <div className="card shadow">
                    <div className="card-header text-center section-header">
                        Part List
                    </div>
                    <div className="card-body parts-list">
                        <div className="accordion accordion-flush" id="partsAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#headParts">
                                        Head
                                    </button>
                                </h2>
                                <div id="headParts" className="accordion-collapse collapse" data-bs-parent="#partsAccordion">
                                    <div className="accordion-body">
                                        <div className="d-grid gap-2">
                                            <button className="part-option">Light Head</button>
                                            <button className="part-option">Medium Head</button>
                                            <button className="part-option">Heavy Head</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#leftShoulder">
                                        Left Shoulder
                                    </button>
                                </h2>
                                <div id="leftShoulder" className="accordion-collapse collapse" data-bs-parent="#partsAccordion">
                                    <div className="accordion-body">
                                        <div className="d-grid gap-2">
                                            <button className="part-option">Light Left Shoulder</button>
                                            <button className="part-option">Medium Left Shoulder</button>
                                            <button className="part-option">Heavy Left Shoulder</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rightShoulder">
                                        Right Shoulder
                                    </button>
                                </h2>
                                <div id="rightShoulder" className="accordion-collapse collapse" data-bs-parent="#partsAccordion">
                                    <div className="accordion-body">
                                        <div className="d-grid gap-2">
                                            <button className="part-option">Light Right Shoulder</button>
                                            <button className="part-option">Medium Right Shoulder</button>
                                            <button className="part-option">Heavy Right Shoulder</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#leftHand">
                                        Left Hand
                                    </button>
                                </h2>
                                <div id="leftHand" className="accordion-collapse collapse" data-bs-parent="#partsAccordion">
                                    <div className="accordion-body">
                                        <div className="d-grid gap-2">
                                            <button className="part-option">Shotgun</button>
                                            <button className="part-option">Sword</button>
                                            <button className="part-option">Machine Gun</button>
                                            <button className="part-option">Sub-Machine Gun</button>
                                            <button className="part-option">Heavy Machine Gun</button>
                                            <button className="part-option">Rocket Launcher</button>
                                            <button className="part-option">Plasma Cannon</button>
                                            <button className="part-option">Sniper Rifle</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#rightHand">
                                        Right Hand
                                    </button>
                                </h2>
                                <div id="rightHand" className="accordion-collapse collapse" data-bs-parent="#partsAccordion">
                                    <div className="accordion-body">
                                        <div className="d-grid gap-2">
                                            <button className="part-option">Shotgun</button>
                                            <button className="part-option">Sword</button>
                                            <button className="part-option">Machine Gun</button>
                                            <button className="part-option">Sub-Machine Gun</button>
                                            <button className="part-option">Heavy Machine Gun</button>
                                            <button className="part-option">Rocket Launcher</button>
                                            <button className="part-option">Plasma Cannon</button>
                                            <button className="part-option">Grenade Launcher</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#legs">
                                        Legs
                                    </button>
                                </h2>
                                <div id="legs" className="accordion-collapse collapse" data-bs-parent="#partsAccordion">
                                    <div className="accordion-body">
                                        <div className="d-grid gap-2">
                                            <button className="part-option">Medium Legs</button>
                                            <button className="part-option">Reverse Joint</button>
                                            <button className="part-option">Heavy Legs</button>
                                            <button className="part-option">Quad Legs</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#body">
                                        Body
                                    </button>
                                </h2>
                                <div id="body" className="accordion-collapse collapse" data-bs-parent="#partsAccordion">
                                    <div className="accordion-body">
                                        <div className="d-grid gap-2">
                                            <button className="part-option">Light Body</button>
                                            <button className="part-option">Medium Body</button>
                                            <button className="part-option">Heavy Body</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#core">
                                        Core
                                    </button>
                                </h2>
                                <div id="core" className="accordion-collapse collapse" data-bs-parent="#partsAccordion">
                                    <div className="accordion-body">
                                        <div className="d-grid gap-2">
                                            <button className="part-option">Energy Core</button>
                                            <button className="part-option">Fusion Core</button>
                                            <button className="part-option">Plasma Core</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="card shadow">
                    <div className="card-header text-center section-header">
                        Overview
                    </div>
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center gap-2">
                            <div className="mech-box" style={{width: "80px", height: "80px"}}></div>
                            
                            <div className="d-flex gap-2">
                                <div className="mech-box" style={{width: "80px", height: "80px"}}></div>
                                <div className="mech-box" style={{width: "80px", height: "80px"}}></div>
                                <div className="mech-box" style={{width: "80px", height: "80px"}}></div>
                            </div>
                            
                            <div className="d-flex gap-2">
                                <div className="mech-box" style={{width: "60px", height: "80px"}}></div>
                                <div className="mech-box" style={{width: "80px", height: "80px"}}></div>
                                <div className="mech-box" style={{width: "60px", height: "80px"}}></div>
                            </div>
                            
                            <div className="mech-box" style={{width: "80px", height: "80px"}}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="card shadow">
                    <div className="card-header text-center section-header">
                        Statistics
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered stats-table">
                            <tbody>
                                <tr>
                                    <td>Attack</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Armor</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Speed</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Energy</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-4">
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <label htmlFor="mechName" className="form-label fw-bold">Mech Name:</label>
                                <input type="text" className="form-control" id="mechName" placeholder="Enter your mech name" />
                            </div>
                            <div className="col-md-4 text-end mt-3 mt-md-0">
                                <button id="saveMech" className="btn btn-primary btn-lg w-100">Save Mech Sheet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
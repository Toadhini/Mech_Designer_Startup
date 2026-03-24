import React, { useState } from "react";
import { calculateTotalStats } from "../data/partsData";
import { generatePilotProfile, formatModifier } from "../services/pilotService";
import { saveMech } from "../services/mechService";

export function Create() {
  // State for selected parts
  const [selectedParts, setSelectedParts] = useState({
    head: "",
    leftShoulder: "",
    rightShoulder: "",
    leftHand: "",
    rightHand: "",
    legs: "",
    body: "",
    core: "",
  });

  // State for mech name
  const [mechName, setMechName] = useState("");

  // State for pilot profile
  const [pilotProfile, setPilotProfile] = useState(null);
  const [pilotLoading, setPilotLoading] = useState(false);
  const [pilotName, setPilotName] = useState("");

  // Handler for part selection
  const handleSelect = (partType, partName) => {
    setSelectedParts((prev) => ({ ...prev, [partType]: partName }));
  };

  // Calculate total stats from selected parts
  const totalStats = calculateTotalStats(selectedParts);

  // Generate pilot profile using D&D API
  const handleGeneratePilot = async () => {
    setPilotLoading(true);
    const profile = await generatePilotProfile(pilotName || "Unknown Pilot");
    setPilotProfile(profile);
    setPilotLoading(false);
  };

  // Save mech to database
  const handleSave = async () => {
    if (!mechName.trim()) {
      alert("Please enter a mech name");
      return;
    }

    // Create mech object (username is added by the server from auth token)
    const newMech = {
      name: mechName,
      parts: selectedParts,
      stats: totalStats,
      pilot: pilotProfile,
    };

    try {
      // Call API to save mech to database
      await saveMech(newMech);
      alert(`"${mechName}" saved successfully!`);

      // Reset form
      setMechName("");
      setPilotProfile(null);
      setPilotName("");
      setSelectedParts({
        head: "",
        leftShoulder: "",
        rightShoulder: "",
        leftHand: "",
        rightHand: "",
        legs: "",
        body: "",
        core: "",
      });
    } catch (error) {
      // Show error if not logged in or save fails
      alert("Failed to save mech. Please make sure you are logged in.");
    }
  };

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
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#headParts"
                    >
                      Head
                    </button>
                  </h2>
                  <div
                    id="headParts"
                    className="accordion-collapse collapse"
                    data-bs-parent="#partsAccordion"
                  >
                    <div className="accordion-body">
                      <div className="d-grid gap-2">
                        <button
                          className={`part-option ${selectedParts.head === "Light Head" ? "selected" : ""}`}
                          onClick={() => handleSelect("head", "Light Head")}
                        >
                          Light Head
                        </button>
                        <button
                          className={`part-option ${selectedParts.head === "Medium Head" ? "selected" : ""}`}
                          onClick={() => handleSelect("head", "Medium Head")}
                        >
                          Medium Head
                        </button>
                        <button
                          className={`part-option ${selectedParts.head === "Heavy Head" ? "selected" : ""}`}
                          onClick={() => handleSelect("head", "Heavy Head")}
                        >
                          Heavy Head
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#leftShoulder"
                    >
                      Left Shoulder
                    </button>
                  </h2>
                  <div
                    id="leftShoulder"
                    className="accordion-collapse collapse"
                    data-bs-parent="#partsAccordion"
                  >
                    <div className="accordion-body">
                      <div className="d-grid gap-2">
                        <button
                          className={`part-option ${selectedParts.leftShoulder === "Light Left Shoulder" ? "selected" : ""}`}
                          onClick={() => handleSelect("leftShoulder", "Light Left Shoulder")}
                        >
                          Light Left Shoulder
                        </button>
                        <button
                          className={`part-option ${selectedParts.leftShoulder === "Medium Left Shoulder" ? "selected" : ""}`}
                          onClick={() => handleSelect("leftShoulder", "Medium Left Shoulder")}
                        >
                          Medium Left Shoulder
                        </button>
                        <button
                          className={`part-option ${selectedParts.leftShoulder === "Heavy Left Shoulder" ? "selected" : ""}`}
                          onClick={() => handleSelect("leftShoulder", "Heavy Left Shoulder")}
                        >
                          Heavy Left Shoulder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#rightShoulder"
                    >
                      Right Shoulder
                    </button>
                  </h2>
                  <div
                    id="rightShoulder"
                    className="accordion-collapse collapse"
                    data-bs-parent="#partsAccordion"
                  >
                    <div className="accordion-body">
                      <div className="d-grid gap-2">
                        <button
                          className={`part-option ${selectedParts.rightShoulder === "Light Right Shoulder" ? "selected" : ""}`}
                          onClick={() => handleSelect("rightShoulder", "Light Right Shoulder")}
                        >
                          Light Right Shoulder
                        </button>
                        <button
                          className={`part-option ${selectedParts.rightShoulder === "Medium Right Shoulder" ? "selected" : ""}`}
                          onClick={() => handleSelect("rightShoulder", "Medium Right Shoulder")}
                        >
                          Medium Right Shoulder
                        </button>
                        <button
                          className={`part-option ${selectedParts.rightShoulder === "Heavy Right Shoulder" ? "selected" : ""}`}
                          onClick={() => handleSelect("rightShoulder", "Heavy Right Shoulder")}
                        >
                          Heavy Right Shoulder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#leftHand"
                    >
                      Left Hand
                    </button>
                  </h2>
                  <div
                    id="leftHand"
                    className="accordion-collapse collapse"
                    data-bs-parent="#partsAccordion"
                  >
                    <div className="accordion-body">
                      <div className="d-grid gap-2">
                        <button className={`part-option ${selectedParts.leftHand === "Shotgun" ? "selected" : ""}`} onClick={() => handleSelect("leftHand", "Shotgun")}>Shotgun</button>
                        <button className={`part-option ${selectedParts.leftHand === "Sword" ? "selected" : ""}`} onClick={() => handleSelect("leftHand", "Sword")}>Sword</button>
                        <button className={`part-option ${selectedParts.leftHand === "Machine Gun" ? "selected" : ""}`} onClick={() => handleSelect("leftHand", "Machine Gun")}>Machine Gun</button>
                        <button className={`part-option ${selectedParts.leftHand === "Sub-Machine Gun" ? "selected" : ""}`} onClick={() => handleSelect("leftHand", "Sub-Machine Gun")}>Sub-Machine Gun</button>
                        <button className={`part-option ${selectedParts.leftHand === "Heavy Machine Gun" ? "selected" : ""}`} onClick={() => handleSelect("leftHand", "Heavy Machine Gun")}>
                          Heavy Machine Gun
                        </button>
                        <button className={`part-option ${selectedParts.leftHand === "Rocket Launcher" ? "selected" : ""}`} onClick={() => handleSelect("leftHand", "Rocket Launcher")}>Rocket Launcher</button>
                        <button className={`part-option ${selectedParts.leftHand === "Plasma Cannon" ? "selected" : ""}`} onClick={() => handleSelect("leftHand", "Plasma Cannon")}>Plasma Cannon</button>
                        <button className={`part-option ${selectedParts.leftHand === "Sniper Rifle" ? "selected" : ""}`} onClick={() => handleSelect("leftHand", "Sniper Rifle")}>Sniper Rifle</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#rightHand"
                    >
                      Right Hand
                    </button>
                  </h2>
                  <div
                    id="rightHand"
                    className="accordion-collapse collapse"
                    data-bs-parent="#partsAccordion"
                  >
                    <div className="accordion-body">
                      <div className="d-grid gap-2">
                        <button className={`part-option ${selectedParts.rightHand === "Shotgun" ? "selected" : ""}`} onClick={() => handleSelect("rightHand", "Shotgun")}>Shotgun</button>
                        <button className={`part-option ${selectedParts.rightHand === "Sword" ? "selected" : ""}`} onClick={() => handleSelect("rightHand", "Sword")}>Sword</button>
                        <button className={`part-option ${selectedParts.rightHand === "Machine Gun" ? "selected" : ""}`} onClick={() => handleSelect("rightHand", "Machine Gun")}>Machine Gun</button>
                        <button className={`part-option ${selectedParts.rightHand === "Sub-Machine Gun" ? "selected" : ""}`} onClick={() => handleSelect("rightHand", "Sub-Machine Gun")}>Sub-Machine Gun</button>
                        <button className={`part-option ${selectedParts.rightHand === "Heavy Machine Gun" ? "selected" : ""}`} onClick={() => handleSelect("rightHand", "Heavy Machine Gun")}>
                          Heavy Machine Gun
                        </button>
                        <button className={`part-option ${selectedParts.rightHand === "Rocket Launcher" ? "selected" : ""}`} onClick={() => handleSelect("rightHand", "Rocket Launcher")}>Rocket Launcher</button>
                        <button className={`part-option ${selectedParts.rightHand === "Plasma Cannon" ? "selected" : ""}`} onClick={() => handleSelect("rightHand", "Plasma Cannon")}>Plasma Cannon</button>
                        <button className={`part-option ${selectedParts.rightHand === "Grenade Launcher" ? "selected" : ""}`} onClick={() => handleSelect("rightHand", "Grenade Launcher")}>
                          Grenade Launcher
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#body"
                    >
                      Body
                    </button>
                  </h2>
                  <div
                    id="body"
                    className="accordion-collapse collapse"
                    data-bs-parent="#partsAccordion"
                  >
                    <div className="accordion-body">
                      <div className="d-grid gap-2">
                        <button className={`part-option ${selectedParts.body === "Light Body" ? "selected" : ""}`} onClick={() => handleSelect("body", "Light Body")}>Light Body</button>
                        <button className={`part-option ${selectedParts.body === "Medium Body" ? "selected" : ""}`} onClick={() => handleSelect("body", "Medium Body")}>Medium Body</button>
                        <button className={`part-option ${selectedParts.body === "Heavy Body" ? "selected" : ""}`} onClick={() => handleSelect("body", "Heavy Body")}>Heavy Body</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#core"
                    >
                      Core
                    </button>
                  </h2>
                  <div
                    id="core"
                    className="accordion-collapse collapse"
                    data-bs-parent="#partsAccordion"
                  >
                    <div className="accordion-body">
                      <div className="d-grid gap-2">
                        <button className={`part-option ${selectedParts.core === "Energy Core" ? "selected" : ""}`} onClick={() => handleSelect("core", "Energy Core")}>Energy Core</button>
                        <button className={`part-option ${selectedParts.core === "Fusion Core" ? "selected" : ""}`} onClick={() => handleSelect("core", "Fusion Core")}>Fusion Core</button>
                        <button className={`part-option ${selectedParts.core === "Plasma Core" ? "selected" : ""}`} onClick={() => handleSelect("core", "Plasma Core")}>Plasma Core</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#legs"
                    >
                      Legs
                    </button>
                  </h2>
                  <div
                    id="legs"
                    className="accordion-collapse collapse"
                    data-bs-parent="#partsAccordion"
                  >
                    <div className="accordion-body">
                      <div className="d-grid gap-2">
                        <button className={`part-option ${selectedParts.legs === "Light Legs" ? "selected" : ""}`} onClick={() => handleSelect("legs", "Light Legs")}>Light Legs</button>
                        <button className={`part-option ${selectedParts.legs === "Medium Legs" ? "selected" : ""}`} onClick={() => handleSelect("legs", "Medium Legs")}>Medium Legs</button>
                        <button className={`part-option ${selectedParts.legs === "Reverse Joint" ? "selected" : ""}`} onClick={() => handleSelect("legs", "Reverse Joint")}>Reverse Joint</button>
                        <button className={`part-option ${selectedParts.legs === "Heavy Legs" ? "selected" : ""}`} onClick={() => handleSelect("legs", "Heavy Legs")}>Heavy Legs</button>
                        <button className={`part-option ${selectedParts.legs === "Quad Legs" ? "selected" : ""}`} onClick={() => handleSelect("legs", "Quad Legs")}>Quad Legs</button>
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
                <div
                  className={`mech-box ${selectedParts.head ? "selected" : ""}`}
                  style={{ width: "80px", height: "80px" }}
                >
                  <span className="part-label">{selectedParts.head || "Head"}</span>
                </div>

                <div className="d-flex gap-2">
                  <div
                    className={`mech-box ${selectedParts.leftShoulder ? "selected" : ""}`}
                    style={{ width: "80px", height: "80px" }}
                  >
                    <span className="part-label">{selectedParts.leftShoulder || "L. Shoulder"}</span>
                  </div>
                  <div
                    className={`mech-box ${selectedParts.body ? "selected" : ""}`}
                    style={{ width: "80px", height: "80px" }}
                  >
                    <span className="part-label">{selectedParts.body || "Body"}</span>
                  </div>
                  <div
                    className={`mech-box ${selectedParts.rightShoulder ? "selected" : ""}`}
                    style={{ width: "80px", height: "80px" }}
                  >
                    <span className="part-label">{selectedParts.rightShoulder || "R. Shoulder"}</span>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <div
                    className={`mech-box ${selectedParts.leftHand ? "selected" : ""}`}
                    style={{ width: "60px", height: "80px" }}
                  >
                    <span className="part-label">{selectedParts.leftHand || "L. Hand"}</span>
                  </div>
                  <div
                    className={`mech-box ${selectedParts.core ? "selected" : ""}`}
                    style={{ width: "80px", height: "80px" }}
                  >
                    <span className="part-label">{selectedParts.core || "Core"}</span>
                  </div>
                  <div
                    className={`mech-box ${selectedParts.rightHand ? "selected" : ""}`}
                    style={{ width: "60px", height: "80px" }}
                  >
                    <span className="part-label">{selectedParts.rightHand || "R. Hand"}</span>
                  </div>
                </div>

                <div
                  className={`mech-box ${selectedParts.legs ? "selected" : ""}`}
                  style={{ width: "80px", height: "80px" }}
                >
                  <span className="part-label">{selectedParts.legs || "Legs"}</span>
                </div>
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
                    <td>{totalStats.attack}</td>
                  </tr>
                  <tr>
                    <td>Armor</td>
                    <td>{totalStats.armor}</td>
                  </tr>
                  <tr>
                    <td>Speed</td>
                    <td>{totalStats.speed}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{totalStats.weight}</td>
                  </tr>
                  <tr>
                    <td>Energy</td>
                    <td>{totalStats.energy}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pilot Profile Section */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-header text-center section-header">
              Pilot Profile
              <small className="d-block text-muted" style={{ fontSize: '0.7em' }}>
                Powered by D&D 5e API
              </small>
            </div>
            <div className="card-body">
              <div className="row align-items-center mb-3">
                <div className="col-md-8">
                  <label htmlFor="pilotName" className="form-label fw-bold">
                    Pilot Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pilotName"
                    placeholder="Enter pilot name (optional)"
                    value={pilotName}
                    onChange={(e) => setPilotName(e.target.value)}
                  />
                </div>
                <div className="col-md-4 text-end mt-3 mt-md-0">
                  <button
                    className="btn btn-secondary w-100"
                    onClick={handleGeneratePilot}
                    disabled={pilotLoading}
                  >
                    {pilotLoading ? "Generating..." : "Generate Pilot"}
                  </button>
                </div>
              </div>

              {pilotProfile && (
                <div className="pilot-profile-result mt-3">
                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="fw-bold">{pilotProfile.name}</h6>
                      <p className="mb-2">
                        <span className="badge bg-primary">{pilotProfile.pilotClass?.name}</span>
                      </p>
                      <p className="text-muted small">{pilotProfile.pilotClass?.description}</p>
                    </div>
                    <div className="col-md-6">
                      <table className="table table-sm table-bordered">
                        <tbody>
                          {Object.entries(pilotProfile.stats).map(([stat, value]) => (
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
                  {pilotProfile.apiSource && (
                    <p className="text-success small mb-0">
                      ✓ Stats generated using D&D 5e API ability scores
                    </p>
                  )}
                </div>
              )}
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
                  <label htmlFor="mechName" className="form-label fw-bold">
                    Mech Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mechName"
                    placeholder="Enter your mech name"
                    value={mechName}
                    onChange={(e) => setMechName(e.target.value)}
                  />
                </div>
                <div className="col-md-4 text-end mt-3 mt-md-0">
                  <button
                    id="saveMech"
                    className="btn btn-primary btn-lg w-100"
                    onClick={handleSave}
                  >
                    Save Mech Sheet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

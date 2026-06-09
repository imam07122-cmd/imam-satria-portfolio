const experiences = [
  { role: 'Specialist Instrumentation', company: 'PT Amman Mineral Nusa Tenggara', date: 'Apr 2024 – Present', points: ['Copper smelter commissioning, startup support, maintenance and troubleshooting.', 'Performed interlock logic testing, DCS diagnostics, instrument validation and reliability improvement.', 'Handled control valve, MOV, burner, analyzer, gas detector, flow, pressure, temperature, conveyor and weighing system cases.'] },
  { role: 'Instrumentation Technician', company: 'PT Bhimasena Power Indonesia', date: 'Mar 2022 – Mar 2024', points: ['Coal-fired power plant commissioning and O&M support.', 'Supported shutdown activities, control loop modification, field troubleshooting and contractor coordination.', 'Hands-on with pressure/DP transmitters, flowmeters, ultrasonic/radar/GWR level, pneumatic positioners, Allen Bradley PLC and HMI systems.'] },
  { role: 'Instrumentation & Control Staff (On-Job Trainee)', company: 'Pertamina EP & Refinery Unit IV', date: '2019 – 2021', points: ['Instrumentation and control engineering support for oil & gas facilities.', 'Supported maintenance, operation, functional safety awareness, SIL-related activities, and multidisciplinary coordination.'] }
];

const skills = [
  { group: 'Field Instrumentation', items: ['Pressure / DP Transmitter', 'Temperature / RTD / Thermocouple', 'Flowmeter', 'Radar / Ultrasonic / GWR Level', 'pH / ORP / Conductivity', 'SO₂ / O₂ / Gas Analyzer'] },
  { group: 'Control & Final Element', items: ['Control Valve', 'Pneumatic Positioner', 'Motorized Valve / MOV', 'Damper Actuator', 'Burner System', 'Flame Scanner / Flame Rod'] },
  { group: 'Automation & Systems', items: ['Netmation DCS', 'Allen Bradley PLC', 'HMI / SCADA', 'DCS-PLC Interface', 'Interlock Logic', 'Historian Awareness'] },
  { group: 'Testing & Tools', items: ['HART Communicator', 'AMS Trex', 'Loop Calibrator', 'Multimeter', 'Megger', 'Signal Simulation'] },
  { group: 'Reliability & Maintenance', items: ['Root Cause Analysis', 'Preventive Maintenance', 'Corrective Maintenance', 'Calibration', 'Loop Check', 'Troubleshooting Report'] },
  { group: 'Leadership', items: ['Field Leadership', 'Operation Coordination', 'Mechanical Coordination', 'Electrical Coordination', 'PIL / Engineering Coordination', 'Technical Recommendation'] }
];

const cases = [
  // ── PRESSURE ──────────────────────────────────────────────
  {id:'001', equipment:'111-SG01-PT003', category:'Pressure',
   title:'Pressure Transmitter Zero Validation',
   issue:'Zero indication deviation under atmospheric condition.',
   actions:['PV before -5.431 Pa, mA before 19.985 mA','Performed zero trim','Removed plastic cap on low side port','Installed temporary plastic cover and recommended elbow connector'],
   result:'PV after 0.188 Pa and output 20.000 mA.'},

  {id:'002', equipment:'111-SG01-PT004', category:'Pressure',
   title:'Pressure Transmitter Zero Validation',
   issue:'Low range pressure transmitter indication error.',
   actions:['PV before -0.004 kPa, mA before 3.950 mA','Performed zero trim','Drained liquid inside impulse pipe','Recommended elbow connector on low side port'],
   result:'PV normalized to 0.000 kPa and mA 4.004 mA.'},

  {id:'003', equipment:'111-MD01-PT5.1.02', category:'Pressure',
   title:'Atmospheric Verification',
   issue:'DCS showed -4.23 kPa.',
   actions:['Verified actual pressure by opening drain plug','Confirmed line was vacuum','Checked transmitter under atmospheric condition'],
   result:'PV -1 kPa and 4.00 mA, no zero adjustment required.'},

  {id:'004', equipment:'111-MD01-PT4.1.01', category:'Pressure',
   title:'Blocked Access for Zero Check',
   issue:'Zero check could not be performed.',
   actions:['Checked field access','Found block valve hindered by pipe insulation','Requested modification confirmation to PIL'],
   result:'Follow-up required for insulation modification under block valve.'},

  {id:'032', equipment:'111PS01-WE1001 A1/A2/B1/B2', category:'Pressure',
   title:'Pressure Switch Low Reading Investigation',
   issue:'Pressure switch reading low or below set point.',
   actions:['Checked A1 history leakage on sensor body','Swapped A1 with A2 to validate pressure','Compared inlet/outlet pressure on dome valve','Identified low outlet pressure to sensor on B1'],
   result:'Instrument A1 leakage and possible dome valve seal/dust issue identified.'},

  {id:'043', equipment:'111-TS01-PT009', category:'Pressure',
   title:'Plugged Nozzle Pressure Indication',
   issue:'Incorrect pressure indication.',
   actions:['Zero checked transmitter in atmosphere condition PV -1.87 Pa / error -0.143%','Removed impulse pipe nozzle flange','Found plugged nozzle','Deplugged nozzle','Vacuum checked good','Reinstalled flange'],
   result:'Pressure indication recovered to -132 Pa. Notification 110000689354.'},

  {id:'047', equipment:'Siemens SITRANS P320', category:'Pressure',
   title:'Pressure Transmitter Abnormal — Zero Error 1.2 kPa',
   issue:'Pressure transmitter indication abnormal, requiring verification. Zero error detected at atmospheric condition: 1.2 kPa (out of tolerable range).',
   actions:['Visual inspection of field indication','Checked transmitter range: LRV -10 kPa, URV 0 kPa','Removed diaphragm for visual check and cleaning (PTFE diaphragm, silicone oil filling)','Response check: pressed diaphragm, indication could increase — sensor mechanically OK','Zero check at atmospheric: error 1.2 kPa — out of tolerance','Performed zero trim at atmospheric condition','Terminal connection tightness verified','Monitored DCS indication post-trim'],
   result:'Zero trim successful. Post-trim reading 0.0452 kPa — within tolerance. DCS monitoring continued. Transmitter: 7MF0360-1GW01-5AM2-Z, IP66, range -25~250 mbar.',
   media:[{type:'image', src:'assets/case-sitrans-p320-zero-trim.jpg', caption:'Siemens SITRANS P320 — diaphragm, display before trim (1.2188 kPa), after trim (0.0452 kPa), and negative reading (-26.666 kPa)'}]},

  // ── TEMPERATURE ───────────────────────────────────────────
  {id:'005', equipment:'PO01-TT-151 / PO01-TT-149', category:'Temperature',
   title:'Thermocouple DCS Cross Assignment',
   issue:'New thermocouple showed ambient temperature while FCF was heating up.',
   actions:['Verified Type S thermocouple nameplate','Measured 4.0 mV output equivalent to approx. 500°C','Performed intermittent cable response test','Cross-checked tag plate and TT-149'],
   result:'Found cross assignment on DCS display; DCS engineering switching required.'},

  {id:'031', equipment:'111-TS01-TT007A/B & TT006A/B', category:'Temperature',
   title:'Multiple Thermoelement Replacement',
   issue:'Thermoelements required replacement.',
   actions:['Prepared site and material','Found need reducer coupling 1 inch to 1/2 inch','Prepared four reducer couplings','Sized new thermoelements','Replaced elements one by one','Changed transmitter element type from K to S','Checked site and DCS indication'],
   result:'Replacement completed; Type S cable and thermowell observations noted.'},

  {id:'035', equipment:'111-TS02-TT008A', category:'Temperature',
   title:'Transmitter and Thermoelement Failure',
   issue:'Temperature indication error.',
   actions:['Visual inspection','Checked terminal voltage 16.98 VDC','Checked marshalling voltage 17.07 VDC','Disconnected transmitter signal and voltage recovered to 22.77 VDC','Measured sensor output -115.2 mV'],
   result:'Temperature transmitter and thermoelement were bad; replacement required. WO 110000683395.'},

  {id:'044', equipment:'SG01-EP1001', category:'Temperature',
   title:'RTD Temperature Transmitter Check',
   issue:'Temperature transmitter verification.',
   actions:['Measured RTD resistance','Disconnected termination','Checked and ensured no crack','Measured sensor condition good','Reinstalled sensor'],
   result:'DCS reading confirmed normal.',
   media:[{type:'image', src:'assets/case-rtd-sg01-ep1001.jpg', caption:'RTD element and terminal inspection'}]},

  {id:'048', equipment:'RTD 3-Wire Circuit', category:'Temperature',
   title:'RTD 3-Wire Resistance & Continuity Verification',
   issue:'Troubleshooting and inspection of RTD 3-wire circuit. Verification needed from field device to marshalling cabinet and PLC termination.',
   actions:['Isolated RTD wiring from control system','Measured RTD element resistance using digital multimeter (Fluke 17B MAX)','Results: Wire 1–Wire 2: 116.9 Ω, Wire 1–Wire 3: 115.7 Ω, Wire 2–Wire 3: 0.4 Ω — confirmed correct 3-wire RTD configuration','Performed continuity check from field terminal to marshalling cabinet','Performed continuity verification from marshalling cabinet to PLC I/O termination','Checked terminal tightness and cable condition'],
   result:'RTD resistance within normal range. 3-wire configuration verified. Cable continuity from field to marshalling cabinet and PLC termination normal. No open circuit detected. Status: Normal / Continue Monitoring.',
   media:[{type:'image', src:'assets/case-rtd-3wire-resistance-check.jpg', caption:'Fluke 17B MAX measurements: 116.9Ω / 115.7Ω / 0.4Ω — RTD junction box wiring and marshalling cabinet continuity test'}]},

  {id:'049', equipment:'Temperature Element', category:'Temperature',
   title:'Temperature Fluctuation — Thermoelement & Thermowell Erosion',
   issue:'Temperature indication fluctuation reported. Initial check found terminal connection loose.',
   actions:['Visual inspection — found loose 3-wire terminal connection, retightened','Monitored indication after retightening — fluctuation persisted','Checked resistance with multimeter: fluctuating between 139–142 Ω (abnormal)','Removed thermoelement for inspection — found erosion on thermoelement body','Prepared spare: new thermowell DN25 ANSI 150, SS316, U-length 405 mm','New thermoelement U-length 1100 mm — bent to fit and resistance checked','Removed old thermowell — confirmed same size, same material, heavy erosion found','Re-installed new thermowell and thermoelement','Monitored indication after replacement'],
   result:'Indication stable after replacement of thermoelement and thermowell. Root cause: erosion on thermoelement causing unstable resistance. Status: Finished.',
   media:[{type:'image', src:'assets/case-temperature-thermoelement-erosion.jpg', caption:'New thermoelement measurement (±1100mm), eroded thermowell, and thermoelement head after new installation'}]},

  // ── CONTROL VALVE / MOV ───────────────────────────────────
  {id:'006', equipment:'111-AP03-DA1006', category:'Control Valve / MOV',
   title:'Damper Close Feedback Failure',
   issue:'No feedback on DCS when damper valve closed.',
   actions:['Checked 24 VDC in panel control box','Checked 24 VDC from PLC marshalling cabinet','Tested relay coil and continuity','Found bad continuity at relay pin 7/9','Swapped relay from DA1008'],
   result:'Close feedback appeared for DA1006; relay replacement recommended.'},

  {id:'030', equipment:'111-CG01-FV001A2', category:'Control Valve / MOV',
   title:'Control Valve Cannot Fully Close',
   issue:'Water supply to granulation valve could not fully close.',
   actions:['Found positioner bracket bolt loose','Found actuator bolts loose','Removed and fixed positioner','Retightened actuator bolts','Stroke checked 0–100%'],
   result:'Valve returned to normal; status finished.'},

  {id:'033', equipment:'111-TS01-HV002', category:'Control Valve / MOV',
   title:'New Control Valve Replacement Preparation',
   issue:'Preparation for new control valve installation.',
   actions:['Measured new valve flange-to-flange 340 mm','Measured old valve flange-to-flange 370 mm','Coordinated installation area with mechanical team','Prepared cable route sketch and BOM','Collected material','Fabricated roundbox support','Prepared instrument air line and cable pulling'],
   result:'Instrument side preparation finished; waiting valve installation and tie-in.'},

  {id:'046', equipment:'Masoneilan Control Valve Positioner', category:'Control Valve / MOV',
   title:'Masoneilan Positioner Calibration Documentation',
   issue:'Calibration and setup documentation for Masoneilan valve positioner.',
   actions:['Performed/observed positioner calibration workflow','Verified valve positioner response during calibration','Documented control valve calibration activity','Used as technical evidence for control valve and positioner exposure'],
   result:'Video documentation added as portfolio evidence for control valve positioner calibration activity.',
   media:[{type:'video', src:'assets/masoneilan-positioner-calibration.mp4', caption:'Masoneilan positioner calibration video'},{type:'image', src:'assets/case-masoneilan-photo.jpg', caption:'Masoneilan / Valve 4 reference documentation'}]},

  {id:'050', equipment:'111-TS02-HV002 (Steam Drum FCF Vent)', category:'Control Valve / MOV',
   title:'Engineering Modification — Replacement & Relocation HV002',
   issue:'Existing installation of HV002 inaccessible during maintenance and troubleshooting. Routing and installation arrangement created challenges for inspection, calibration, tubing maintenance, and electrical termination.',
   actions:['Conducted site survey and reviewed existing installation','Prepared engineering modification proposal with hand-drawn sketch and BOM','Proposed new support structure using Angle Bar 30×40 mm on existing conduit pipe','Designed new instrument air tubing routing (seamless tube, 1000 mm + 2000 mm runs)','Prepared BOM: roundbox (2 pcs), cable gland (6 pcs), signal cable 1.5 mm² (6 m), seamless tube (5 m), U-bolt M20 (4 pcs), male connectors, union connector','Scope of work: mechanical fabrication, instrument air line, signal cable pulling, continuity/insulation check, loop check, functional test, DCS verification'],
   result:'Modification proposal completed and signed. Material preparation in progress. Expected benefits: improved accessibility, better reliability, reduced maintenance duration, safer inspection activity. Status: Proposed for implementation.',
   media:[{type:'image', src:'assets/case-hv002-engineering-mod-sketch.png', caption:'Engineering modification sketch — support structure, instrument air routing, and BOM for HV002 relocation (July 10, 2025)'}]},

  // ── BURNER / COMBUSTION ───────────────────────────────────
  {id:'024', equipment:'111-PS01-BU1102', category:'Burner / Combustion',
   title:'Burner No Flame — Gas Pressure Issue',
   issue:'Burner no flame reported.',
   actions:['Checked NG pressure and supply','Adjusted regulator settings','Verified ignitor operation','Re-ignited burner'],
   result:'Flame restored; monitoring continued.'},

  {id:'026', equipment:'111-PS01-BU1104B', category:'Burner / Combustion',
   title:'220 VAC Short Circuit',
   issue:'220 VAC source for burner panel short circuit.',
   actions:['Found cable from local control panel to MOV power supply shorted','Tested using other cable simulation','Powered ON breaker with temporary cable'],
   result:'Breaker normal with replacement cable; permanent cable replacement and old cable investigation recommended.'},

  {id:'027', equipment:'111-PS01-BU1104B System', category:'Burner / Combustion',
   title:'LOP Short Circuit Isolation',
   issue:'Short circuit in Local Operation Panel.',
   actions:['Modified fuse to double 6A circuit breaker for troubleshooting','Separated 220 VAC source for DC power supply, relay and MOV','Connected loads one by one','Breaker tripped when MOV cable connected','Checked resistance and insulation','Pulled temporary cable'],
   result:'MOV operated from DCS and stroke check OK; permanent cable required.'},

  {id:'028', equipment:'Anode Furnace 2 Flame Detector', category:'Burner / Combustion',
   title:'Flame Indication Mismatch',
   issue:'HMI flame indication OFF while local flame indication ON.',
   actions:['Checked local flame indication','Checked flame relay ON','Verified PLC digital input lamp ON','Tried bypass indication from AF1/AF2 HMI graphic','Found AF1 bypass could operate AF2 control system'],
   result:'Pending internal HMI/PLC program check.'},

  {id:'036', equipment:'111-PF02-BU1001-BO04', category:'Burner / Combustion',
   title:'Burner Flame Rod Replacement',
   issue:'Flame off caused by broken flame rod.',
   actions:['Inspected rods','Removed old flame rod','Installed new flame rod','Set oxygen and natural gas pressure','Re-ignited burner'],
   result:'Flame ON and good. WO 110000683209.'},

  {id:'037', equipment:'111-PS01-BU1103C', category:'Burner / Combustion',
   title:'Flame Scanner Replacement',
   issue:'No flame signal at DCS and bypass condition.',
   actions:['Prepared spare flame scanner','Stopped NG and combustion line','Powered OFF local panel','Removed flame scanner','Disconnected and remarked cable','Installed new scanner','Re-ignited burner'],
   result:'Flame signal good; status done. WO 110000683651.'},

  {id:'039', equipment:'111-PS01-BU1102', category:'Burner / Combustion',
   title:'Ignitor Cable and Rod Failure',
   issue:'Ignitor cable broken and burner no spark.',
   actions:['Inspected ignitor cable','Removed old connector','Checked transformer 220 VAC source at 230 VAC','Checked relay operation','Removed ignitor rod','Found broken end bolt','Cleaned and reassembled rod','Re-ignited'],
   result:'Spark appeared in middle chamber but alarm remained; spare rod replacement and night shift handover required. WO 110000684224.'},

  {id:'041', equipment:'111-PS01-BU1105B', category:'Burner / Combustion',
   title:'No Flame Troubleshooting',
   issue:'Burner no flame.',
   actions:['Connected ignitor cable','Ignition failed due to NG pressure above 70 kPa','Regulator adjuster issue found','Throttled main NG block valve','Removed and inspected ignitor','Found broken and dirty ignitor end','Replaced ignitor','Flame OK but scanner did not read','Inspected scanner glass dust','Replaced flame scanner'],
   result:'Re-ignite successful; flame ON and status finished.'},

  // ── ANALYZER / GAS DETECTOR ───────────────────────────────
  {id:'029', equipment:'Oxygen Gas Detector CH2', category:'Analyzer / Gas Detector',
   title:'Oxygen Sensor Failure',
   issue:'Low alarm with oxygen indication 0.0%.',
   actions:['Inspected sensor','Tested CH2 transmitter with CH3 oxygen sensor','Tested CH2 sensor on CH3 transmitter'],
   result:'CH2 transmitter normal, CH2 sensor broken; replacement required.'},

  {id:'040', equipment:'111-AP03-AT001', category:'Analyzer / Gas Detector',
   title:'Analyzer Indication Stuck',
   issue:'DCS operator reported analyzer indication stuck.',
   actions:['Visual inspection with PIL instrument','Checked alarm and found concentration under range','Checked transmitter parameters','Ensured upstream and downstream block valves open','Reset 220 VAC power','Changed Inst Factor from 1.000 to 3.000 for test'],
   result:'PIL needed comparison with laboratory concentration and conductivity sampling. WO 110000686011.'},

  {id:'042', equipment:'111-SG03-AT002', category:'Analyzer / Gas Detector',
   title:'SO₂ Sampling System Maintenance',
   issue:'Replace metal filter and top sampling filter.',
   actions:['Recorded rotameter 1 L/min and SO₂ 0% before cleaning','Powered OFF blowback PLC','Opened cover flange','Replaced metal filter','Inspected sampling nozzle','Replaced teflon filter','Cleaned SO₂ dust','Normalized blowback PLC'],
   result:'Flowrate increased to 1.3 L/min and SO₂ indication stable at 0%; status finished.'},

  {id:'051', equipment:'111-SG03-AT002 SO₂ Analyzer', category:'Analyzer / Gas Detector',
   title:'SO₂ Reading Zero — Flange Cover Metal Filter Leakage',
   issue:'Operation team reported SO₂ measurement always zero. Suspected sampling system issue.',
   actions:['Checked analyzer room — flowrate still good, no obvious fault at analyzer unit','Performed backflush test — found leakage at flange body cover of metal filter','Removed flange and sent to workshop for welding repair','Inspection revealed filter plate was too thin due to corrosion','Workshop added new plate layer on top of existing plate','Re-installed flange after repair','Tested with backflush — no leakage detected','Monitored SO₂ measurement'],
   result:'SO₂ reading returned to normal at 15.66 vol%. Leakage fully sealed after flange repair and plate reinforcement. Status: Finished.',
   media:[{type:'image', src:'assets/case-so2-flange-leakage-repair.jpg', caption:'DCS SO₂ trend showing zero reading, flange leakage condition, workshop welding repair, and SO₂ display at 15.66 vol% after repair'}]},

  {id:'052', equipment:'O₂ Analyzer — Siemens OXYMAT 61', category:'Analyzer / Gas Detector',
   title:'Oxygen Reading Always High — Flange Leakage at Tapping Point',
   issue:'O₂ analyzer measurement consistently high. Suspected air ingress into sample line.',
   actions:['Checked tapping point at field','Performed backflush test — found leakage at flange connection near tapping point','Cleaned flange mating surface','Installed new gasket','Tightened flange bolts to proper torque','Monitored O₂ reading'],
   result:'O₂ measurement returned to normal at 2.934 %vol. DCS trend confirmed stable reading after flange repair. Status: Finished.',
   media:[{type:'image', src:'assets/case-o2-oxymat61-flange-leak.jpg', caption:'Flange leakage at tapping point (before/after cleaning), Siemens OXYMAT 61 display at 2.934% vol, and DCS trend showing reading normalisation'}]},

  {id:'053', equipment:'CEMS Opacity Analyzer — LDM-100', category:'Analyzer / Gas Detector',
   title:'CEMS Opacity High Reading — Inspection & Verification',
   issue:'Operation team reported opacity CEMS reading high. Potential measurement or sampling system fault.',
   actions:['Checked actual conditions at field — pressure within normal range','Verified flowmeter at transmitter and receiver side — normal','Checked all transmitter units — no abnormal condition found','Tightened all tube connections','Verified steady laser power (PD value: 1.028, normal range 0.95–1.05V)','Confirmed no issue at tapping point'],
   result:'All parameters verified normal. Opacity reading stabilized at 210.7 mg/m³, Status: Normal. Parameters checked: Opacity 44.22% → normal, Dust Den. 255.8 → 210.7 mg/m³, pressure 244.95 Pa, purge unit (GP-4000) rotameter normal, laser PD 1.028.',
   media:[{type:'image', src:'assets/case-cems-opacity-ldm100-a.jpg', caption:'LDM-100 display: Opacity 44.22%, Dust Den. 255.8 mg/m³, SMART pressure transmitter 244.95 Pa, GP-4000 purge unit rotameters'},{type:'image', src:'assets/case-cems-opacity-ldm100-b.jpg', caption:'GP-4000 purge panel, PM-2000 sensor status, LDM-100 Dust Den. 210.7 mg/m³ Normal, laser PD 1.028 verification from manual'}]},

  {id:'054', equipment:'321-WG01-AT002 DO Analyzer — Endress+Hauser CM442', category:'Analyzer / Gas Detector',
   title:'DO Analyzer Abnormal Reading — Sensor Electrolyte & Calibration',
   issue:'Dissolved Oxygen (DO) analyzer reading abnormal. Sensor condition suspected.',
   actions:['Checked sensor condition — found electrolyte depleted','Filled new electrolyte and cleaned sensor membrane','Waited for sensor polarization (stabilization period)','Performed span calibration: Air 100% RH method (Menu/Calibration/DO/Slope)','Raw measurement value during calibration: 321.20 nA @ 31.4°C — waiting for stable value','Accepted new calibration data: current slope 100.0% → new slope 93.3% @ 1013 hPa','Re-installed sensor into flow cell','Monitored until reading stable'],
   result:'DO reading normalized to 5.58 ppb @ 34.5°C. Calibration completed successfully. Status: Done.',
   media:[{type:'image', src:'assets/case-do-analyzer-calibration.jpg', caption:'Sensor electrolyte filling, flow cell installation, EH CM442 calibration menu (Air 100%RH, raw 321.20nA), new slope 93.3%, final reading CH1: 5.58 ppb @ 34.5°C'}]},

  {id:'055', equipment:'DURAG Dust Analyzer', category:'Analyzer / Gas Detector',
   title:'DURAG Dust Analyzer Fault — T-Connection Broken, Ratio Purge Too High',
   issue:'Dust analyzer showing fault. Inspection required to identify root cause.',
   actions:['Inspected analyzer at field','Performed cold purge to cool down gas sample temperature','Checked heater box — normal condition','Checked probe box — found broken T-connection at differential pressure module','Applied temporary fix: push-in fitting installed as replacement connector','Verified no leak at temporary connection','Cleaned probe tip to remove dust build-up','Ensured blowing and suction normal at probe tip','Performed leak test using plug — no leak detected','Control unit still showing fault: "ratio purge too high"','Coordinated with vendor for further action'],
   result:'Temporary repair completed — no leak at probe connection. Control unit fault "ratio purge too high" persists and requires vendor support. Status: Pending vendor coordination.',
   media:[{type:'image', src:'assets/case-durag-dust-analyzer-a.jpg', caption:'Broken T-connection (plastic fitting) at DP module and push-in fitting temporary replacement'},{type:'image', src:'assets/case-durag-dust-analyzer-b.jpg', caption:'Probe extraction at elevation (working with full body harness) and probe tip inspection'}]},

  // ── FLOWMETER ─────────────────────────────────────────────
  {id:'038', equipment:'111AG91-FT103', category:'Flowmeter',
   title:'Flow Reading with Valves Closed',
   issue:'Flowmeter showed flow while shutoff valve and control valve were closed.',
   actions:['Verified actual reading 186.46 Nm³/h','Closed manual valve before control valve and reading became zero','Forced close control valve from positioner','Adjusted stopper for closed control valve to 0%','Adjusted shutoff valve close stopper'],
   result:'Flowmeter reading became 0 Nm³/h and leakage monitoring normal.'},

  // ── CONVEYOR / INTERLOCK ──────────────────────────────────
  {id:'008', equipment:'111-US01-CV1001', category:'Conveyor / Interlock',
   title:'DCS Allow Signal Missing',
   issue:'Allow did not appear and Local/DCS mode did not change.',
   actions:['Tested local/remote at field control panel','Verified relay Z-KA68 and PLC DI I2.2','Bypassed relay Z-KA3 chute down to activate permissive'],
   result:'Allow appeared at DCS; telescopic chute permissive modification/testing required.'},

  {id:'056', equipment:'Conveyor Tripper — Pull Cord Switch', category:'Conveyor / Interlock',
   title:'Conveyor Tripper Cannot Run — Pull Cord Water Ingress',
   issue:'Operation request: conveyor tripper cannot run. Alarm from pull cord active but operation team confirmed all pull cords already released and reset.',
   actions:['Rechecked all pull cord positions — confirmed all released','Reset pull cord alarms','Inspected pull cord switches in open area','Found 2 pull cord switches with water ingress inside housing (exposed to outdoor environment)','Opened housing and inspected contact condition','Cleaned internal body and contact switches','Performed contact function test','Reset alarm'],
   result:'Pull cord contacts cleaned and functional test passed. Alarm reset OK. Root cause: water ingress into pull cord housing due to outdoor exposure. Recommendation: check sealing condition of all outdoor pull cord enclosures.',
   media:[{type:'image', src:'assets/case-conveyor-pullcord-water-ingress.jpg', caption:'Pull cord switch housing with water ingress and corroded contacts (left: condition found, right: after cleaning)'}]},

  {id:'057', equipment:'CM01-CV1001 — Blending Bin Tripper Car', category:'Conveyor / Interlock',
   title:'New Installation — VEGA VEGAMIP R61 & T61 Block Chute Detection',
   issue:'New blockage detection system required for blending bin tripper car chute to improve operational monitoring and prevent chute blockage.',
   actions:['Conducted site survey and reviewed VEGA VEGAMIP R61/T61 installation drawing','Coordinated with Operations and Mechanical teams for optimum sensor position','Agreed installation height: 400 mm from bottom of chute','Fabricated and welded sensor mounting supports on chute wall (M20×1.5 thread, Ø26 through hole)','Verified transmitter–receiver alignment (same level ±2mm)','Fabricated angle bar support for conduit routing','Installed conduit and cable support system (±100 m 4-core instrument cable)','Pulled cable along existing rail cable route','Terminated cables at sensors, junction box, and local panel','Installed cable glands and verified wiring','Performed continuity check and functional test','Confirmed blockage detection response with Operations and Mechanical teams'],
   result:'VEGA VEGAMIP R61 & T61 blockage detection system successfully installed, wired, and commissioned. Sensor status: ON (green LED). Functional test confirmed correct switching response. Status: COMPLETED.',
   media:[{type:'image', src:'assets/case-vegamip-blockchute-a.jpg', caption:'Junction box, conveyor overview, and VEGAMIP R61 installation drawing'},{type:'image', src:'assets/case-vegamip-blockchute-b.jpg', caption:'Cable pulling along conveyor, sensor installation, and VEGAMIP R61 (yellow) mounted on chute'},{type:'image', src:'assets/case-vegamip-blockchute-c.jpg', caption:'VEGAMIP R61 wiring — terminal connections, status LED: ON (green)'},{type:'image', src:'assets/case-vegamip-blockchute-d.jpg', caption:'Welded nozzle on chute wall (before and after), and VEGAMIP sensors installed on both sides'}]},

  // ── WEIGHING SYSTEM ───────────────────────────────────────
  {id:'007', equipment:'111CM01-WE1001F', category:'Weighing System',
   title:'Weight Feeder Remote Control Issue',
   issue:'Weight feeder could run from local but not remote from DCS.',
   actions:['Tested local/remote selector in main panel','Verified selector local cuts off 4–20 mA DCS signal to VSD AI2','Checked VSD I/O parameter','Verified local mode AI signal 0–10 VDC'],
   result:'Operation must ensure selector position; DCS mismatch indication recommended.'},

  {id:'058', equipment:'Dust Bin — Load Cell / Weighmeter', category:'Weighing System',
   title:'Dust Bin Weighmeter Showing -1300 kg — Load Cell Misalignment',
   issue:'Dust bin weighmeter showing abnormal reading of -1300 kg. Bin was empty (only slight dust residue inside).',
   actions:['Checked weighmeter reading at DCS: -1300 kg','Inspected load cell mounting at field','Found load cell misaligned with mounting bracket — physical contact between load cell and structure disturbing measurement','Load cell reading: 2064 kg (incorrect due to misalignment)','Replaced mounting bolt with new one','Repositioned load cell into correct mounting position','Verified no contact between load cell and surrounding structure','Monitored reading after re-alignment'],
   result:'Load cell realigned and reading normalized. Root cause: load cell misalignment with mounting bracket causing false compressive load reading. Recommendation: periodic inspection of load cell mounting condition.',
   media:[{type:'image', src:'assets/case-loadcell-misalignment-dustbin.jpg', caption:'Load cell misaligned on mounting bracket — bolt replacement and repositioning required'}]},

  // ── PNEUMATIC SYSTEM ──────────────────────────────────────
  {id:'045', equipment:'111PF02-FU1001B', category:'Pneumatic System',
   title:'Skimming Mouth Cannot Fully Open',
   issue:'Skimming mouth could not fully open.',
   actions:['Checked opening performance','Inspected and cleaned silencer','Tested without silencer and actuator could fully open','Found regulator pressure gauge not measuring','Replaced regulator','Observed silencer continuously venting air'],
   result:'Indicated pneumatic air cylinder leak; mechanical team requested operation without silencer. Notification 110000898477.',
   media:[{type:'image', src:'assets/case-pneumatic-skimming-mouth.jpg', caption:'Pneumatic regulator AIRTAC GAR60025S and silencer troubleshooting — anode furnace area'}]},

  {id:'059', equipment:'Skimming Mouth Actuator — Anode Furnace', category:'Pneumatic System',
   title:'Skimming Mouth Cannot Fully Open — Air Cylinder Leak via Silencer',
   issue:'Operation report: skimming mouth actuator cannot fully open. Previous case (045) showed silencer was root cause.',
   actions:['Checked and attempted to open skimming mouth — could not fully open','Cleaned silencer — tested open still could not fully open','Removed silencer — actuator could fully open (confirmed silencer restriction)','Checked pressure gauge at regulator (AIRTAC GAR60025S) — gauge not reading pressure','Replaced regulator with new one — retested open: still could not fully open with silencer installed','Mechanical team decision: operate without silencer','Identified air cylinder leak: silencer always venting air when connected'],
   result:'Root cause confirmed: internal air cylinder leakage causing continuous air exhaust through silencer, creating back pressure that prevents full stroke. Mechanical team to assess cylinder seal replacement. Status: Done — operating without silencer pending cylinder repair.',
   media:[{type:'image', src:'assets/case-skimming-mouth-pneumatic.jpg', caption:'Anode furnace area, AIRTAC GAR60025S regulator (before/after replacement), and two silencers showing continuous venting condition'}]},

  // ── ROTATING EQUIPMENT ────────────────────────────────────
  {id:'034', equipment:'111-PS01-FA1001AZ', category:'Rotating Equipment',
   title:'Fan Instrumentation Support',
   issue:'Mechanical support job for fan instrumentation.',
   actions:['Visual inspection of fan instrumentation','Installed two temperature elements at DE/NDE shaft','Installed two vibration sensors at DE/NDE shaft','Stroke checked damper actuator 0–100%'],
   result:'Instrumentation support completed; bent damper lever observed.'}
];

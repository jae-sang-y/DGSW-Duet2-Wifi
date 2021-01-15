; Prusa i3 config file for dc42 Duet firmware

; Prologue
M111 S1; Debug off
M550 DGSW-Duet2-WiFi                                  ; Machine name (can be anything you like)
M551 Preprap                                          ; Machine password
M540 P0xBE:0xEF:0xDE:0xAD:0xFE:0xED                   ; MAC Address
M555 P2                                               ; Set output to look like Marlin
M575 P1 B57600 S1                                     ; Serial comms parameters for PanelDue

; Movement section
M669 K1                                               ; Kinematic type is CoreXY
M569 P0 S1                                            ; Drive 0(X Motor) goes forwards
M569 P1 S1                                            ; Drive 1(Y Motor) goes forwards
M569 P2 S0                                            ; Drive 2(Z Motor) goes forwards
M569 P3 S0                                            ; Drive 3(E0 Motor) goes forwards

M574 X1 Y1 Z0 P"e0stop" S1                            ; Endstop configuration 
M906 X800 Y800 Z800 E1000                             ; Set motor currents (mA)
M201 X800 Y800 Z800 E800                              ; Accelerations (mm/s^2)
M203 X15000 Y15000 Z1000 E15000                       ; Maximum speeds (mm/min)
M566 X600 Y600 Z600 E600                              ; Minimum speeds (mm/min)
M208 X300 Y300 Z300                                   ; Axis maximum
M208 X0 Y20 Z-0.2 S1                                  ; Axis minimum (adjust to make X=0 and Y=0 the edge of the bed)
M92 X80 Y80 Z400                                      ; Set axis steps/mm
M92 E80:80                                            ; Set extruder steps per mm
G21                                                   ; Work in millimetres
G90                                                   ; Send absolute coordinates...
M83                                                   ; ...but relative extruder moves

; Heater and thermistor section
M305 P0 S"Bed" R4700 H0 L0                            ; Set temperature sensor parameters for bed
M305 P1 S"Extruder 0" R4700 H0 L0                     ; Set temperature sensor parameters for extruder 0
M570 H1 P5 S3                                         ; Heater fault detection for extruder 0

; Tool and Fan definition section
M563 P0 D0 H1                                         ; Define tool 0 to use extruder 0 and heater 1
G10 P0 S185 R120                                      ; Set tool 0 active and standby temperatures
M591 D0 P2 C3 S1                                      ; Filament out sensor connect to E0stop
M140 H0 S40 R40                                       ; Set bed active and standby temperature
M106 P1 S0.3 I0 H-1 L0.33                             ; Extruder 0 Fan

; Config Wifi module
M552 S-1                                              ; 1. Stop wifi module
M552 S0                                               ; 2. Idle wifi module
M588 S"3Dedu"                                         ; Delete previous wifi config
M587 S"3Dedu" P"3D56525256" I192.168.0.4              ; Set wifi config
M552 S1                                               ; 3. Start wifi module

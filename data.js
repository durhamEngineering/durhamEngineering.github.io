var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-entrance",
      "name": "Main Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.8405616170858075,
        "pitch": 0,
        "fov": 1.6077311675353059
      },
      "linkHotspots": [
        {
          "yaw": -0.05757269636998075,
          "pitch": 0.059599954152913526,
          "rotation": 4.71238898038469,
          "target": "7-thermo-fluids-research-laboratory"
        },
        {
          "yaw": 0.401702633029716,
          "pitch": 0.06832376076682856,
          "rotation": 0,
          "target": "4-lecture-theatre"
        },
        {
          "yaw": 1.3625165791618024,
          "pitch": 0.058868753688614106,
          "rotation": 7.0685834705770345,
          "target": "6-thermo-fluids-teaching-laboratory"
        },
        {
          "yaw": 2.2409722318736645,
          "pitch": -0.05142258799224386,
          "rotation": 0,
          "target": "1-christopherson-level-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-christopherson-level-1",
      "name": "Christopherson Level 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.013964133942837,
          "pitch": -0.2484850907747429,
          "rotation": 0,
          "target": "2-christopherson-level-2"
        },
        {
          "yaw": 2.0500512180368426,
          "pitch": 0.288358454071977,
          "rotation": 3.141592653589793,
          "target": "0-main-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.041864189160138565,
          "pitch": 0.06270847251125211,
          "title": "Lecture Theature",
          "text": "The Department of Engineering has a number of lecture theatres, including two on Level 1 that are suitable for teaching students in the 3rd and 4th years of their Engineering degrees, where the class sizes are around 60 students or less.&nbsp;"
        }
      ]
    },
    {
      "id": "2-christopherson-level-2",
      "name": "Christopherson Level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1379298981962513,
          "pitch": 0.43207590918238026,
          "rotation": 3.141592653589793,
          "target": "1-christopherson-level-1"
        },
        {
          "yaw": 1.7295440141980798,
          "pitch": 0.06453502565475233,
          "rotation": 0,
          "target": "5-open-access-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "title": "Sir Derman Christopherson",
          "text": "Sir Derman Guy Christopherson OBE FRS FREng founded the current Department of Engineering in Durham City in 1965.&nbsp;&nbsp;<br>"
        }
      ]
    },
    {
      "id": "3-electrical-engineering-teaching-laboratory",
      "name": "Electrical Engineering Teaching Laboratory",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.5016922144715013,
        "pitch": 0.1879808749733627,
        "fov": 1.6077311675353059
      },
      "linkHotspots": [
        {
          "yaw": -2.50640604575773,
          "pitch": 0.0965362472571556,
          "rotation": 1.5707963267948966,
          "target": "5-open-access-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lecture-theatre",
      "name": "Lecture Theatre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7363323952707823,
          "pitch": 0.16256043034879575,
          "rotation": 0,
          "target": "0-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-open-access-area",
      "name": "Open Access Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.725706658509443,
          "pitch": 0.025137660387866134,
          "rotation": 1.5707963267948966,
          "target": "2-christopherson-level-2"
        },
        {
          "yaw": 3.040323950202043,
          "pitch": 0.04273258016520742,
          "rotation": 4.71238898038469,
          "target": "3-electrical-engineering-teaching-laboratory"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-thermo-fluids-teaching-laboratory",
      "name": "Thermo-Fluids Teaching Laboratory",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.9770307899527282,
        "pitch": 0.05426695647577162,
        "fov": 1.6077311675353059
      },
      "linkHotspots": [
        {
          "yaw": -2.9910650787201725,
          "pitch": 0.21494665224937037,
          "rotation": 0,
          "target": "0-main-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7316243352196263,
          "pitch": 0.05646487174201731,
          "title": "Pipe Flow Experiment",
          "text": "The object of this experiment is to observe and describe the two types of flow (laminar and turbulent) which can occur in a pipe.&nbsp; The two different types of flow are to be described in terms of their usual appearance at the pipe outlet, their velocity profiles, the energy (or head) loss/unit length of pipe and the friction factor, occurring with each type of flow.&nbsp; Pipe line head losses directly influence the energy requirements of a number of important human activities such as water and fuel distribution.&nbsp;&nbsp;"
        },
        {
          "yaw": 0.7355012071105698,
          "pitch": 0.1338491283810086,
          "title": "Pressure measurement",
          "text": "In this experiment students will learn how different pressure measurement devices function.  This knowledge is essential when selecting an appropriate pressure measurement device for a specific application.&nbsp;"
        },
        {
          "yaw": 0.07420625997855623,
          "pitch": 0.2415288480389144,
          "title": "Flow rate measurement",
          "text": "Text"
        },
        {
          "yaw": -1.6023074264693058,
          "pitch": -0.01738680540678139,
          "title": "Open-channel Hydraulics",
          "text": "This experiment aims to illustrate the hydraulic jump in open channel flows, and to show that for fluids, as for solid bodies, changes of momentum are brought about by the action of forces.&nbsp;"
        },
        {
          "yaw": -2.3385854365009084,
          "pitch": 0.2270758762605034,
          "title": "Heat transfer",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-thermo-fluids-research-laboratory",
      "name": "Thermo-fluids Research Laboratory",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.11938734971091947,
        "pitch": -0.06054983466379582,
        "fov": 1.6077311675353059
      },
      "linkHotspots": [
        {
          "yaw": -2.902023886396041,
          "pitch": 0.06970274354161887,
          "rotation": 1.5707963267948966,
          "target": "0-main-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.03192456251818676,
          "pitch": -0.06335011918970856,
          "title": "Wind Tunnel",
          "text": "The Department of Engineering's largest wind tunnel."
        },
        {
          "yaw": 0.7153230776602193,
          "pitch": -0.2533686918128808,
          "title": "Blow-down facility",
          "text": "This large tank of pressurised air is used to run experiments on high flow velocity components, such as sealing on turbines and turbo-chargers.&nbsp;"
        }
      ]
    }
  ],
  "name": "Department of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

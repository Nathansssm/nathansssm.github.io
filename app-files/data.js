var APP_DATA = {
  "scenes": [
    {
      "id": "0-devanture-mdl",
      "name": "Devanture mdl",
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
          "yaw": -0.32088650086308945,
          "pitch": 0.05391383906964187,
          "rotation": 0,
          "target": "1-batiment-d"
        },
        {
          "yaw": -2.9481411202489696,
          "pitch": 0.0381129655013801,
          "rotation": 0,
          "target": "3-1er-hall-b"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1394806237901065,
          "pitch": 0.14544518167417664,
          "title": "MDL",
          "text": "Maison Des Lycéen"
        }
      ]
    },
    {
      "id": "1-batiment-d",
      "name": "Batiment D",
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
          "yaw": -3.0574836932183516,
          "pitch": 0.07697790681912409,
          "rotation": 0,
          "target": "0-devanture-mdl"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1611666510908236,
          "pitch": 1.1945196024183797,
          "title": "???",
          "text": "Ok."
        }
      ]
    },
    {
      "id": "2-2eme-hall-b",
      "name": "2eme hall B",
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
          "yaw": -0.01739428835602297,
          "pitch": 0.14945262600337728,
          "rotation": 0,
          "target": "1-batiment-d"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0057303490586955,
          "pitch": 0.11416591602699455,
          "title": "CDI",
          "text": "Centre de Documentation et d'Information du Lycée<div><br></div>"
        }
      ]
    },
    {
      "id": "3-1er-hall-b",
      "name": "1er hall B",
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
          "yaw": 1.9497794590975355,
          "pitch": -0.08578066330868594,
          "rotation": 0,
          "target": "2-2eme-hall-b"
        },
        {
          "yaw": -2.164349171679998,
          "pitch": 0.14027414490803558,
          "rotation": 0,
          "target": "0-devanture-mdl"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6865134757086775,
          "pitch": -0.09153491795277624,
          "title": "affiche informative",
          "text": "Cafés, thés, chocolats INTERDITS dans les couloirs"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

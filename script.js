tsParticles.load("brainparticles", {
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble" // OnHover Effect
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 80,
        duration: 2,
        opacity: 0.5, // OnHover Bubble Opacity
        color: {
          value: "rgb(200, 10, 73)" // OnHover Bubble Color 
        },
        size: 12 // OnHover Bubble Size
      }
    }
  },
  particles: {
    color: {
      value: "#D6D6D6" // Particle Color
    },
    links: {
      blink: true,
      color: "#D6D6D6", // Line Color
      consent: false,
      distance: 150, 
      enable: true,
      opacity: 1, // Line Opacity
      width: 0.7 // Line Width
    },
    move: {
      attract: {
        enable: true,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: false,
        area: 2000 // Particle Amount Value on Area
      },
      limit: 0,
      value: 43 // Particle Amount Value
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.5,
        speed: 2,
        sync: false
      },
      random: false,
      value: 1
    },
    shape: {
      type: "circle" // Particle Shape
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 2,
        speed: 40,
        sync: false
      },
      random: false,
      value: 4
    }
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "white",
      lineWidth: 1 // Polygon Shape Line Width
    },
    move: {
      radius: 13.5  // Particle Movement Radius
    },
    position: {
      x: 30,
      y: 30
    },
    inlineArrangement: "equidistant",
    scale: 5, // Total Particle Brain Shape Scale (Change the value to scale the Brain Shape). 
    type: "inline",
    data: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 110.33" style="enable-background:new 0 0 122.88 110.33" xml:space="preserve"><g><path d="M72,46.37l-18.62-1L59.11,29l-7.43-7.4L64.84,4.7m55.3,38.63M42.42,70.66.15,38.61l5.93,19,16,10.92,9.81-4,7.55,7.2,11.69,7.41,14,33.39L78.87,75.7h27l7-9-7-6,17.89-3.05,5.11-18.78L106.16,14.34,75.3.16,35.2,1.74,12.18,19l-11,17.36s4,1.63,6.06-1M39.09,6.87V21.7H16.87l-5,19M81,60.7H48.87L25.62,35.8,11.87,49.7m79,13,6-8,4.94-15.33L91.87,42.7,81,22.45l6.84-2.66,5.08,9.91,12.48-4.62M55.4,78.57,64.87,95.7,61.82,93l3.05,10.73,5-16m21-19-20,3v10m-23-13,11-2,6,7m-24-33,9-8-7.45-3.24L30.87,31.7m17-20.12-3,11.12m35-11.12L67.07,22.7l7.8,15,4-1.9,7,15.9m21.55-16.62,12.45,5.62-12,10"/></g></svg>` // change the "d=" value here to change the brain shape.
  }
});
// buttons-data.ts
export const buttonData = [
  {
    id: 1,
    title: "Neon Button",
    html: `<button class="neon-button">Click Me</button>`,
    css: `.neon-button {
      background: transparent;
      color: #00d9ff;
      border: 2px solid #00d9ff;
      padding: 12px 24px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.3s ease;
      box-shadow: 0 0 10px #00d9ff;
    }
    .neon-button:hover {
      background: #00d9ff;
      color: #111;
      box-shadow: 0 0 20px #00d9ff;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-[#00d9ff] border-2 border-[#00d9ff] 
               rounded-md shadow-[0_0_10px_#00d9ff] transition-all hover:bg-[#00d9ff] 
               hover:text-gray-900 hover:shadow-[0_0_20px_#00d9ff]`
  },
  {
    id: 2,
    title: "Gradient Button",
    html: `<button class="gradient-button">Get Started</button>`,
    css: `.gradient-button {
      background: linear-gradient(to right, #8b5cf6, #ec4899);
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 500;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    .gradient-button:hover {
      background: linear-gradient(to right, #7c3aed, #db2777);
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }`,
    tailwind: `px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white 
               font-medium rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 
               hover:shadow-lg hover:-translate-y-1 transition-all duration-300`
  },
  {
    id: 3,
    title: "Glass Button",
    html: `<button class="glass-button">Glass Effect</button>`,
    css: `.glass-button {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      color: white;
      padding: 12px 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .glass-button:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }`,
    tailwind: `px-6 py-3 bg-white/10 backdrop-blur-md text-white font-medium rounded-lg 
               border border-white/20 shadow-md hover:bg-white/20 hover:border-white/30 
               hover:-translate-y-1 transition-all duration-300`
  },
  {
    id: 4,
    title: "3D Button",
    html: `<button class="button-3d">Press Me</button>`,
    css: `.button-3d {
      background: #4f46e5;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 0 4px 0 #4338ca, 0 5px 10px rgba(0, 0, 0, 0.2);
      transition: all 0.1s ease;
    }
    .button-3d:active {
      transform: translateY(4px);
      box-shadow: 0 1px 0 #4338ca, 0 2px 5px rgba(0, 0, 0, 0.2);
    }`,
    tailwind: `px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg 
               shadow-[0_4px_0_#4338ca,0_5px_10px_rgba(0,0,0,0.2)] active:translate-y-1 
               active:shadow-[0_1px_0_#4338ca,0_2px_5px_rgba(0,0,0,0.2)] transition-all`
  },
  {
    id: 5,
    title: "Border Animation",
    html: `<button class="border-animation-button">Hover Me</button>`,
    css: `.border-animation-button {
      background: transparent;
      color: #f43f5e;
      padding: 12px 24px;
      border: 2px solid transparent;
      position: relative;
      font-weight: 600;
      overflow: hidden;
      transition: color 0.3s ease;
    }
    .border-animation-button::before, 
    .border-animation-button::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid #f43f5e;
      top: 0;
      left: 0;
      transition: all 0.3s ease;
    }
    .border-animation-button::before {
      border-width: 2px 0 2px 0;
      transform: scaleX(0);
    }
    .border-animation-button::after {
      border-width: 0 2px 0 2px;
      transform: scaleY(0);
    }
    .border-animation-button:hover::before, 
    .border-animation-button:hover::after {
      transform: scale(1);
    }
    .border-animation-button:hover {
      color: #f43f5e;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-rose-500 font-semibold relative 
               overflow-hidden before:content-[''] before:absolute before:w-full before:h-full 
               before:border-t-2 before:border-b-2 before:border-rose-500 before:top-0 before:left-0 
               before:scale-x-0 before:transition-all after:content-[''] after:absolute after:w-full 
               after:h-full after:border-l-2 after:border-r-2 after:border-rose-500 after:top-0 
               after:left-0 after:scale-y-0 after:transition-all hover:before:scale-x-100 
               hover:after:scale-y-100 transition-colors`
  },
  {
    id: 6,
    title: "Pulse Button",
    html: `<button class="pulse-button">Pulse Effect</button>`,
    css: `.pulse-button {
      background: #10b981;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .pulse-button:hover {
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
      }
    }`,
    tailwind: `px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg 
               hover:animate-[pulse_1.5s_infinite]`
  },
  {
    id: 7,
    title: "Retro Button",
    html: `<button class="retro-button">Retro Style</button>`,
    css: `.retro-button {
      background: #f59e0b;
      color: #1e293b;
      padding: 12px 24px;
      border: none;
      border-bottom: 4px solid #d97706;
      font-weight: bold;
      font-family: 'Courier New', monospace;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: all 0.2s ease;
    }
    .retro-button:hover {
      background: #d97706;
      border-bottom: 2px solid #b45309;
      transform: translateY(2px);
    }`,
    tailwind: `px-6 py-3 bg-amber-500 text-slate-800 font-bold font-mono tracking-wider 
               uppercase border-b-4 border-amber-600 hover:bg-amber-600 hover:border-b-2 
               hover:border-amber-700 hover:translate-y-0.5 transition-all`
  },
  {
    id: 8,
    title: "Skeuomorphic Button",
    html: `<button class="skeuomorphic-button">Click</button>`,
    css: `.skeuomorphic-button {
      background: linear-gradient(to bottom, #f5f5f5, #e5e5e5);
      color: #333;
      padding: 12px 24px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-weight: 600;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 
                  inset 0 1px 0 rgba(255, 255, 255, 0.8);
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
      transition: all 0.2s ease;
    }
    .skeuomorphic-button:hover {
      background: linear-gradient(to bottom, #e5e5e5, #d5d5d5);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 
                 inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }
    .skeuomorphic-button:active {
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 
                  inset 0 1px 0 rgba(255, 255, 255, 0.4);
      transform: translateY(1px);
    }`,
    tailwind: `px-6 py-3 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 
               font-semibold rounded-md border border-gray-300 shadow-sm shadow-gray-300/50 
               [text-shadow:0_1px_0_rgba(255,255,255,0.8)] hover:from-gray-200 hover:to-gray-300 
               active:shadow-inner active:translate-y-0.5 transition-all`
  },
  {
    id: 9,
    title: "Floating Button",
    html: `<button class="floating-button">Float</button>`,
    css: `.floating-button {
      background: #3b82f6;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 50px;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
      transition: all 0.3s ease;
    }
    .floating-button:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
    }`,
    tailwind: `px-6 py-3 bg-blue-500 text-white font-semibold rounded-full 
               shadow-lg shadow-blue-500/40 hover:-translate-y-1 hover:shadow-xl 
               hover:shadow-blue-500/50 transition-all`
  },
  {
    id: 10,
    title: "Underline Animation",
    html: `<button class="underline-animation-button">Hover Me</button>`,
    css: `.underline-animation-button {
      background: transparent;
      color: #8b5cf6;
      padding: 12px 24px;
      border: none;
      font-weight: 600;
      position: relative;
    }
    .underline-animation-button::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 8px;
      left: 50%;
      background: #8b5cf6;
      transition: all 0.3s ease;
    }
    .underline-animation-button:hover::after {
      width: 80%;
      left: 10%;
    }`,
    tailwind: `px-6 py-3 bg-transparent text-purple-500 font-semibold relative 
               after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-500 
               after:bottom-2 after:left-1/2 after:transition-all hover:after:w-4/5 hover:after:left-[10%]`
  },
  {
    id: 11,
    title: "Glow Button",
    html: `<button class="glow-button">Glow Effect</button>`,
    css: `.glow-button {
      background: #111;
      color: #fff;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      z-index: 1;
      overflow: hidden;
    }
    .glow-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
      background-size: 400%;
      z-index: -1;
      opacity: 0;
      transition: 0.5s;
      border-radius: 8px;
      filter: blur(5px);
    }
    .glow-button:hover::before {
      opacity: 1;
      animation: animate 20s linear infinite;
    }
    @keyframes animate {
      0% { background-position: 0 0; }
      50% { background-position: 400% 0; }
      100% { background-position: 0 0; }
    }`,
    tailwind: `px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg relative 
               overflow-hidden before:content-[''] before:absolute before:inset-0 
               before:bg-[linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)] 
               before:bg-[length:400%] before:opacity-0 before:transition-opacity before:duration-500 
               before:rounded-lg before:blur-[5px] hover:before:opacity-100 hover:before:animate-[animate_20s_linear_infinite]`
  },
  {
    id: 12,
    title: "Metallic Button",
    html: `<button class="metallic-button">Shine</button>`,
    css: `.metallic-button {
      background: linear-gradient(to bottom, #e0e0e0, #c0c0c0);
      color: #333;
      padding: 12px 24px;
      border: 1px solid #999;
      border-radius: 8px;
      font-weight: 600;
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5), 
                  0 2px 3px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
    }
    .metallic-button::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -60%;
      width: 50%;
      height: 200%;
      background: rgba(255, 255, 255, 0.2);
      transform: rotate(30deg);
      transition: all 0.3s;
    }
    .metallic-button:hover::after {
      left: 110%;
    }`,
    tailwind: `px-6 py-3 bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 
               font-semibold rounded-lg border border-gray-400 [text-shadow:0_1px_1px_rgba(255,255,255,0.8)] 
               shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_3px_rgba(0,0,0,0.2)] relative 
               overflow-hidden after:content-[''] after:absolute after:-top-1/2 after:-left-3/5 
               after:w-1/2 after:h-[200%] after:bg-white/20 after:rotate-30 after:transition-all 
               hover:after:left-[110%]`
  },
  {
    id: 13,
    title: "Ripple Button",
    html: `<button class="ripple-button">Click Me</button>`,
    css: `.ripple-button {
      background: #6366f1;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: background 0.4s;
    }
    .ripple-button:hover {
      background: #4f46e5;
    }
    .ripple-button span {
      position: absolute;
      background: rgba(255, 255, 255, 0.4);
      transform: translate(-50%, -50%);
      pointer-events: none;
      border-radius: 50%;
      animation: ripple 1s linear infinite;
    }
    @keyframes ripple {
      0% {
        width: 0;
        height: 0;
        opacity: 0.5;
      }
      100% {
        width: 500px;
        height: 500px;
        opacity: 0;
      }
    }`,
    tailwind: `px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg relative 
               overflow-hidden hover:bg-indigo-600 transition-colors duration-400`
  },
  {
    id: 14,
    title: "Cyberpunk Button",
    html: `<button class="cyberpunk-button">CYBERPUNK</button>`,
    css: `.cyberpunk-button {
      background: black;
      color: #00ff9d;
      padding: 12px 24px;
      border: 2px solid #00ff9d;
      font-family: 'Courier New', monospace;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      position: relative;
      box-shadow: 0 0 10px #00ff9d;
      transition: all 0.3s ease;
    }
    .cyberpunk-button::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border: 2px solid #ff00ea;
      z-index: -1;
      transition: all 0.3s ease;
    }
    .cyberpunk-button:hover {
      box-shadow: 0 0 20px #00ff9d, 0 0 20px #ff00ea;
    }
    .cyberpunk-button:hover::before {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }`,
    tailwind: `px-6 py-3 bg-black text-[#00ff9d] font-mono font-bold tracking-widest 
               uppercase border-2 border-[#00ff9d] shadow-[0_0_10px_#00ff9d] relative 
               before:content-[''] before:absolute before:-inset-1 before:border-2 
               before:border-[#ff00ea] before:z-[-1] before:transition-all hover:shadow-[0_0_20px_#00ff9d,0_0_20px_#ff00ea] 
               hover:before:inset-0 transition-all`
  },
  {
    id: 15,
    title: "Split Hover Button",
    html: `<button class="split-hover-button">Hover Effect</button>`,
    css: `.split-hover-button {
      background: transparent;
      color: #3b82f6;
      padding: 12px 24px;
      border: 2px solid #3b82f6;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .split-hover-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: #3b82f6;
      transform: translateX(-100%);
      transition: all 0.3s ease;
      z-index: -1;
    }
    .split-hover-button::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background: #3b82f6;
      transform: translateX(100%);
      transition: all 0.3s ease;
      z-index: -1;
    }
    .split-hover-button:hover {
      color: white;
    }
    .split-hover-button:hover::before {
      transform: translateX(0);
    }
    .split-hover-button:hover::after {
      transform: translateX(0);
    }`,
    tailwind: `px-6 py-3 bg-transparent text-blue-500 font-semibold border-2 border-blue-500 
               relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 
               before:w-1/2 before:h-full before:bg-blue-500 before:-translate-x-full before:transition-all 
               before:z-[-1] after:content-[''] after:absolute after:top-0 after:right-0 after:w-1/2 
               after:h-full after:bg-blue-500 after:translate-x-full after:transition-all after:z-[-1] 
               hover:text-white hover:before:translate-x-0 hover:after:translate-x-0 transition-colors`
  },
  {
    id: 16,
    title: "Bubble Button",
    html: `<button class="bubble-button">Bubble Effect</button>`,
    css: `.bubble-button {
      background: #ec4899;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 50px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .bubble-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transform: scale(0);
      transition: all 0.5s ease;
      pointer-events: none;
    }
    .bubble-button:hover::before {
      transform: scale(2);
      opacity: 0;
    }`,
    tailwind: `px-6 py-3 bg-pink-500 text-white font-semibold rounded-full relative 
               overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-white/10 
               before:rounded-full before:scale-0 before:transition-all before:duration-500 hover:before:scale-200 
               hover:before:opacity-0`
  },
  {
    id: 17,
    title: "Animated Gradient Border",
    html: `<button class="gradient-border-button">Border Effect</button>`,
    css: `.gradient-border-button {
      background: white;
      color: #333;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      position: relative;
      z-index: 1;
    }
    .gradient-border-button::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
      background-size: 400%;
      z-index: -1;
      border-radius: 10px;
      animation: animate-border 20s linear infinite;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .gradient-border-button:hover::before {
      opacity: 1;
    }
    @keyframes animate-border {
      0% { background-position: 0 0; }
      50% { background-position: 400% 0; }
      100% { background-position: 0 0; }
    }`,
    tailwind: `px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg relative z-[1] 
               before:content-[''] before:absolute before:-inset-0.5 before:bg-[linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)] 
               before:bg-[length:400%] before:rounded-xl before:animate-[animate-border_20s_linear_infinite] 
               before:opacity-0 before:transition-opacity before:z-[-1] hover:before:opacity-100`
  },
  {
    id: 18,
    title: "Text Fill Effect",
    html: `<button class="text-fill-button">Hover Me</button>`,
    css: `.text-fill-button {
      background: transparent;
      color: #333;
      padding: 12px 24px;
      border: 2px solid #333;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: color 0.3s ease;
    }
    .text-fill-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #333;
      z-index: -1;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }
    .text-fill-button:hover {
      color: white;
    }
    .text-fill-button:hover::before {
      transform: translateY(0);
    }`,
    tailwind: `px-6 py-3 bg-transparent text-gray-800 font-semibold border-2 border-gray-800 
               relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gray-800 
               before:translate-y-full before:transition-transform before:z-[-1] hover:text-white hover:before:translate-y-0 
               transition-colors`
  },
  {
    id: 19,
    title: "Neumorphic Button",
    html: `<button class="neumorphic-button">Neumorphism</button>`,
    css: `.neumorphic-button {
      background: #e0e5ec;
      color: #6d7587;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      box-shadow: 8px 8px 16px #b8b9be, 
                 -8px -8px 16px #ffffff;
      transition: all 0.2s ease;
    }
    .neumorphic-button:hover {
      box-shadow: inset 4px 4px 8px #b8b9be, 
                 inset -4px -4px 8px #ffffff;
    }
    .neumorphic-button:active {
      box-shadow: inset 6px 6px 12px #b8b9be, 
                 inset -6px -6px 12px #ffffff;
    }`,
    tailwind: `px-6 py-3 bg-[#e0e5ec] text-[#6d7587] font-semibold rounded-lg 
               shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] 
               active:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all`
  },
  {
    id: 20,
    title: "Magnetic Button",
    html: `<button class="magnetic-button">Magnetic Effect</button>`,
    css: `.magnetic-button {
      background: #3b82f6;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.2s ease;
      will-change: transform;
    }
    .magnetic-button:hover {
      transform: scale(0.95);
    }`,
    tailwind: `px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg 
               hover:scale-95 transition-transform will-change-transform`
  }
];
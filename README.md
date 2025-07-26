#⏰ Clock

A simple and elegant **Analog + Digital Clock** web application built by **Piyush Chaudhary**.  
This project demonstrates core JavaScript functionality like the `Date` object, `setInterval()`, and DOM manipulation to display real-time clocks in both analog and digital formats.

---

## 🔗 Live Demo
- 🌐 [Live Demo](https://piyushclock.netlify.app/)
- 
---

## 🛠️ Features

- 🕒 **Analog Clock**: Real-time rotating hour, minute, and second hands
- ⏱️ **Digital Clock**: Displays live time in `HH:MM:SS` format
- 🔁 **Live Time Sync**: Updates the clock every second using `setInterval()`
- 📅 **JavaScript Date Object**: Dynamically fetches and updates the current time

---

## 📁 Project Structure

clock/
├── src/
│   ├── index.html        # Main HTML file
│   ├── input.css         # Tailwind input CSS file
│   ├── output.css        # Compiled Tailwind CSS file
│   └── script.js         # JavaScript logic for clock
├── package.json          # npm project config
└── README.md             # Project documentation

---

## 🧠 JavaScript Concepts Used

- `new Date()` — to fetch the current time
- `setInterval()` — to update the clocks every second
- DOM manipulation — to rotate clock hands and update the digital time

---

## 🎨 Setting Up Tailwind CSS (CLI Method)

To use Tailwind CSS with this project, follow these steps:

### ⚙️ Installation Steps

> Requires [Node.js](https://nodejs.org/) and npm installed.

```bash
# Install Tailwind CSS
Install tailwindcss and @tailwindcss/cli via npm.



# Import Tailwind in your CSS
Add the @import "tailwindcss"; import to your main CSS file.

Run in Termnial: 
```npm install tailwindcss @tailwindcss/cli

# Start the Tailwind CLI build process
Run the CLI tool to scan your source files for classes and build your CSS.

Run in Terminal:
```npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch```

# Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

### 📄 Create the Tailwind input file

Inside `src/input.css`, add: // This file will not be needed as it will be provided in the src folder already within this project

```src/input.css
@import "tailwindcss";
```

### 🛠️ Build Tailwind Output

Run the following command to compile Tailwind CSS to `output.css`:

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

> This will continuously watch for changes and update the output CSS file.

---

## 🚀 How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/develo-oper-piyush/clock
cd clock
```

2. Compile Tailwind CSS (if using):

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

3. Open the `src/index.html` file in your browser:

```bash
open src/index.html
```

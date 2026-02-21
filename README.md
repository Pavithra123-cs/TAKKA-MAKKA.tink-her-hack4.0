<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

#Crisis-Connect 🎯

## Basic Details

### Team Name: [TAKKAA...MAKKAAAA]

### Team Members
- Member 1: [PAVITHRA N.P] - [ICCSCEM]
- Member 2: [SIFANA S] - [ICCSCEM]

### Hosted Project Link
[https://takka-makkahackathon.vercel.app/]

### Project Description[Crisis Connect is a web-based emergency reporting system that allows users to instantly report accidents, floods, fires, or other crises in their area. The platform supports anonymous reporting and optional photo uploads, ensuring quick and accessible participation from anyone. By collecting and displaying real-time incident data, the system helps communities stay informed, improve situational awareness, and respond faster during emergencies.
]

### The Problem statement
[What problem are you solving?:
✅ Problem Statement

During emergencies such as floods, accidents, fires, or local crises, people often struggle to:

Report incidents quickly to others nearby

Access real-time, location-specific alerts

Share information without creating accounts

Know what is happening around them immediately

Existing systems are either:

Too slow (official reporting channels)

Not location-focused for common people

Require login or complex steps

Not designed for community-driven alerts

This leads to delayed response, misinformation, and avoidable risks to public safety.]

### The Solution
[How are you solving it?:
✅ Proposed Solution – Crisis Connect

Crisis Connect is a real-time community crisis reporting platform where:

Any user can report emergencies instantly

Login is not mandatory (anonymous reporting allowed)

Users can optionally upload photos as proof

Reports include location, time, and description

Other nearby users get awareness about incidents

This creates a crowdsourced safety network that helps people stay informed and react faster.]

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used[
HTML
CSS
JavaScript
SQL]
- Frameworks used: [Node.js (backend runtime)]
- Libraries used: [mysql2 ]
- Tools used: [e.g., VS Code, Git, MYSQL]

**For Hardware:**
- Main components: [List main components]
- Specifications: [Technical specifications]
- Tools required: [List tools needed]

---

## Features
Feature 1: Real-Time Crisis Reporting – Users can report incidents like accidents, floods, fires, or other emergencies instantly through the website.

Feature 2: Anonymous Reporting Option – Logging in is not mandatory, and users can choose to remain anonymous while submitting reports.

Feature 3: Optional Photo Upload – Users can upload images related to the incident to provide visual evidence, enhancing the report’s credibility.

Feature 4: Easy-to-Use Interface – Mobile-first, responsive design with a clean UI allows quick reporting and smooth navigation for all users.


## Implementation

### For Software:

#### Installation
```bash
# Install Node.js dependencies
npm install

#### Run
```bash
`
# Start the server
node server.js

# Open the front-end HTML file in a browser (e.g., index.html)
# If using a live server extension, start it from VS Code or similar IDE
### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![https://drive.google.com/file/d/1KNoLp9czu5Ff0_BEdgLK6XpEpQ5bq_xk/view?usp=drive_link](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![https://drive.google.com/file/d/14YadwpJC10yNo2D8VGL_wZoMk5T4ai0p/view?usp=drive_link](Add screenshot 2 here with proper name)
comes to report

![https://drive.google.com/file/d/1AD6qKE4AV49h4YnxC2wFkqcXItkL61EY/view?usp=drive_link]
features
[https://drive.google.com/file/d/1PKmzc-yGtQTRh5FF2joutHG6vwXlOfiP/view?usp=drive_link]-report mandatory things
[https://drive.google.com/file/d/11xYNj0Vt0o73awV22zf42BZtmDaR8FMp/view?usp=drive_link]-report success
[https://drive.google.com/file/d/1E2qkcrZL5C-ndQtLLchQN07zxuIM9xhS/view?usp=drive_link]-db storage
#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**
Frontend (Client)

Built using HTML, CSS, and JavaScript.

Provides a responsive user interface for users to:

Select crisis type

Upload optional photos

Enter reporter details (optional anonymous mode)

Describe incident and location

Handles form validation and sends reports to the backend via HTTP POST requests.

Backend (Server)

Built using Node.js with Express.js framework.

Handles:

Receiving user reports

Storing report data in the database

Sending success responses with generated Report IDs

Implements CORS to allow communication with the frontend.

Database (Storage)

MySQL database stores all incident reports.

Table reports contains columns:

id (auto-increment primary key)

crisis_type

name

phone

description

incident_time

location

photo (optional)

anonymous flag

Ensures data persistence and enables future analytics.

Optional Extensions (Future)

WhatsApp notifications for users who install the app.

Real-time alerts to nearby residents or authorities.

Analytics dashboard for monitoring crisis trends.

Data Flow

User Interaction

User fills in the crisis report form → Clicks Submit.

Frontend Processing

Validates inputs

Sends a POST request to server.js endpoint /report.

Backend Processing

Receives the request

Inserts report data into MySQL database

Generates a Report ID

Sends a success response back to the frontend.

Database Storage

All report details are stored securely in MySQL.

Enables querying and future analytics.

User Feedback

Frontend displays success message with Report ID.

Anonymous users remain unidentified in the database.

Visual Architecture Diagram (Simplified)
+-------------------+          HTTP POST           +-------------------+
|    Frontend       |  ------------------------>  |     Backend       |
| (HTML/CSS/JS)     |                             | (Node.js/Express) |
|                   | <------------------------  |                   |
|  - Form inputs    |        Success/ID          | - DB operations   |
|  - Photo upload   |                             | - Generate ID     |
+-------------------+                             +-------------------+
                                                        |
                                                        | MySQL Queries
                                                        v
                                              +-------------------+
                                              |     Database      |
                                              |   MySQL Server    |
                                              |  - Reports table  |
                                              +-------------------+


---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[https://drive.google.com/file/d/1hnLe1HWhH7jQOWEYhxlH2nO0noLQNeKx/view?usp=drive_link]
The person can report the details of the crisis and then its saved in db is shown in the video 

### Additional Demos
[https://drive.google.com/file/d/1hnLe1HWhH7jQOWEYhxlH2nO0noLQNeKx/view?usp=drive_link.]

---

AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

Tool Used: ChatGPT, GitHub Copilot

Purpose: Assisted in code generation, debugging, and optimization.

Example: "Generated backend Express.js routes for crisis reporting"

Example: "Suggested MySQL table structure for storing reports"

Example: "Helped create responsive frontend components in HTML/CSS"

Key Prompts Used:

"Create a REST API endpoint for submitting crisis reports"

"Debug MySQL connection issues in Node.js"

"Write responsive HTML/CSS layout for a mobile-first reporting form"
**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [PAVITHRA N.P]: [Frontend development,Backend development, Database design , etc.]
- [SIFANA S]: [e.g., Frontend development]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub

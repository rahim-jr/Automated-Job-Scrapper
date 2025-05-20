#Job Scraper

A web application that scrapes job postings from various Bangladeshi job platforms and presents them in a modern, searchable interface.

## Features

- Scrapes jobs from multiple Bangladeshi job websites
- Modern, responsive UI built with React and Material-UI
- Real-time job updates
- Detailed job information including salary, location, and posting date

## Prerequisites

### System Requirements
- Ubuntu/Debian-based Linux system
- Python 3.8 or higher
- Node.js 14 or higher
- npm (Node Package Manager)

### Installing Dependencies

1. Install Python 3:
```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv
```

2. Install Node.js and npm:
```bash
sudo apt install nodejs npm
```

## Project Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd Automated-Job-Scrapper
```

2. Set up the Python virtual environment and install backend dependencies:
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
cd ..
```

## Running the Application

### Backend Server

1. Activate the virtual environment (if not already activated):
```bash
source venv/bin/activate
```

2. Start the FastAPI server:
```bash
cd backend
uvicorn main:app --reload
```
The backend server will run at `http://localhost:8000`

### Frontend Development Server

1. In a new terminal, navigate to the frontend directory:
```bash
cd frontend
```

2. Start the React development server:
```bash
npm start
```
The frontend application will run at `http://localhost:3000`

## API Documentation

Once the backend server is running, you can access:
- Interactive API documentation: `http://localhost:8000/docs`
- Alternative API documentation: `http://localhost:8000/redoc`

## Project Structure

```
Automated-Job-Scrapper/
├── backend/
│   ├── __init__.py
│   └── main.py
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
├── requirements.txt
├── run.py
└── README.md
```

## Troubleshooting

### Common Issues

1. **Python command not found**
   - Use `python3` instead of `python`
   - Install Python: `sudo apt install python3`

2. **npm command not found**
   - Install npm: `sudo apt install npm`

3. **Frontend build errors**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall:
     ```bash
     cd frontend
     rm -rf node_modules
     npm install
     ```

4. **Backend connection errors**
   - Ensure the backend server is running
   - Check if the port 8000 is available
   - Verify CORS settings in `backend/main.py`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

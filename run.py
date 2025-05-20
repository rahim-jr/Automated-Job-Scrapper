#!/usr/bin/env python3
"""
Run script for Bangladesh Job Scraper
"""
import uvicorn
import os
from pathlib import Path

def main():
    """Run the FastAPI application"""
    # Get the project root directory
    project_root = Path(__file__).parent
    
    # Set the working directory to the project root
    os.chdir(project_root)
    
    # Run the FastAPI application
    uvicorn.run(
        "backend.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        reload_dirs=["backend"]
    )

if __name__ == "__main__":
    main() 
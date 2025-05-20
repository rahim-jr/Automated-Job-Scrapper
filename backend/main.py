from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import requests
from bs4 import BeautifulSoup
import asyncio
import aiohttp
from datetime import datetime
import uvicorn

app = FastAPI(
    title="Bangladesh Job Scraper API",
    description="API for scraping job listings from Bangladeshi job platforms",
    version="0.1.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Job(BaseModel):
    title: str
    company: str
    location: str
    description: str
    salary: Optional[str] = None
    posted_date: Optional[str] = None
    source_url: str
    source_website: str

async def scrape_bdjobs():
    """Scrape jobs from bdjobs.com"""
    jobs = []
    async with aiohttp.ClientSession() as session:
        async with session.get('https://www.bdjobs.com/') as response:
            if response.status == 200:
                html = await response.text()
                soup = BeautifulSoup(html, 'html.parser')
                # Add scraping logic here
                # This is a placeholder - you'll need to implement the actual scraping logic
                # based on bdjobs.com's HTML structure
    return jobs

async def scrape_prothom_alo_jobs():
    """Scrape jobs from Prothom Alo jobs section"""
    jobs = []
    async with aiohttp.ClientSession() as session:
        async with session.get('https://jobs.prothomalo.com/') as response:
            if response.status == 200:
                html = await response.text()
                soup = BeautifulSoup(html, 'html.parser')
                # Add scraping logic here
    return jobs

@app.get("/")
async def root():
    return {"message": "Welcome to Bangladesh Job Scraper API"}

@app.get("/jobs", response_model=List[Job])
async def get_jobs():
    # TODO: Implement actual job scraping logic
    # For now, return mock data
    return [
        {
            "title": "Senior Software Engineer",
            "company": "Tech Solutions BD",
            "location": "Dhaka, Bangladesh",
            "description": "We are looking for an experienced software engineer to join our team.",
            "salary": "৳150,000 - ৳200,000",
            "posted_date": "2024-03-20",
            "source_url": "https://example.com/job1",
            "source_website": "BDJobs"
        }
    ]

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 
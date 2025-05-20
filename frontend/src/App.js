import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  AppBar,
  Toolbar,
  CircularProgress,
  Box,
  Chip,
  Link,
  TextField,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';

// Mock data for development
const mockJobs = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions BD",
    location: "Dhaka, Bangladesh",
    description: "We are looking for an experienced software engineer to join our team. The ideal candidate should have strong knowledge of Python, React, and cloud technologies.",
    salary: "৳150,000 - ৳200,000",
    posted_date: "2024-03-20",
    source_url: "https://example.com/job1",
    source_website: "BDJobs"
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations Ltd",
    location: "Chittagong, Bangladesh",
    description: "Join our team as a Frontend Developer. Experience with React, TypeScript, and modern web technologies required.",
    salary: "৳120,000 - ৳150,000",
    posted_date: "2024-03-19",
    source_url: "https://example.com/job2",
    source_website: "Prothom Alo Jobs"
  },
  {
    title: "DevOps Engineer",
    company: "Cloud Systems BD",
    location: "Dhaka, Bangladesh",
    description: "Looking for a DevOps Engineer with experience in AWS, Docker, and CI/CD pipelines.",
    salary: "৳180,000 - ৳220,000",
    posted_date: "2024-03-18",
    source_url: "https://example.com/job3",
    source_website: "BDJobs"
  }
];

function App() {
  const [jobs, setJobs] = useState(mockJobs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  // Filter jobs based on search criteria
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  return (
    <div>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          backgroundColor: 'white',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#1a237e',
              fontWeight: 600,
              letterSpacing: '-0.5px'
            }}
          >
            BD Jobs
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              color="inherit" 
              sx={{ 
                color: '#666',
                '&:hover': { color: '#1a237e' }
              }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              sx={{ 
                color: '#666',
                '&:hover': { color: '#1a237e' }
              }}
            >
              About
            </Button>
            <Button 
              color="inherit" 
              sx={{ 
                color: '#666',
                '&:hover': { color: '#1a237e' }
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: '#1a237e',
              mb: 3
            }}
          >
            Find Your Dream Job
          </Typography>
          
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search jobs, companies, or keywords"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#666' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e0e0e0',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1a237e',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon sx={{ color: '#666' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e0e0e0',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1a237e',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Job Type</InputLabel>
                <Select
                  value={jobType}
                  label="Job Type"
                  onChange={(e) => setJobType(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#e0e0e0',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#1a237e',
                    },
                  }}
                >
                  <MenuItem value="">All Types</MenuItem>
                  <MenuItem value="full-time">Full Time</MenuItem>
                  <MenuItem value="part-time">Part Time</MenuItem>
                  <MenuItem value="contract">Contract</MenuItem>
                  <MenuItem value="internship">Internship</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
            <CircularProgress sx={{ color: '#1a237e' }} />
          </Box>
        ) : error ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
            <Typography color="error">{error}</Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredJobs.map((job, index) => (
              <Grid item xs={12} key={index}>
                <Card 
                  elevation={0}
                  sx={{ 
                    border: '1px solid #e0e0e0',
                    '&:hover': {
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease-in-out'
                    }
                  }}
                >
                  <CardContent>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 600,
                        color: '#1a237e'
                      }}
                    >
                      {job.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <BusinessIcon sx={{ mr: 1, color: '#666' }} />
                      <Typography color="textSecondary">
                        {job.company} • {job.location}
                      </Typography>
                    </Box>

                    {job.salary && (
                      <Chip
                        label={job.salary}
                        sx={{ 
                          mr: 1, 
                          mb: 1,
                          backgroundColor: '#1a237e',
                          color: 'white'
                        }}
                        size="small"
                      />
                    )}

                    {job.posted_date && (
                      <Chip
                        label={`Posted: ${job.posted_date}`}
                        variant="outlined"
                        size="small"
                        sx={{ 
                          mr: 1, 
                          mb: 1,
                          borderColor: '#e0e0e0',
                          color: '#666'
                        }}
                      />
                    )}

                    <Typography 
                      variant="body2" 
                      color="textSecondary" 
                      sx={{ mt: 2, mb: 2, color: '#666' }}
                    >
                      {job.description}
                    </Typography>

                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                      <Link
                        href={job.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: '#1a237e',
                          textDecoration: 'none',
                          fontWeight: 500,
                          '&:hover': { 
                            textDecoration: 'underline',
                            color: '#000051'
                          }
                        }}
                      >
                        View Original Post
                      </Link>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ ml: 1, color: '#666' }}
                      >
                        (Source: {job.source_website})
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default App; 
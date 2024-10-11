import React, { useState } from 'react';
import { Briefcase, GraduationCap, Building2, Search } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

const initialJobs: Job[] = [
  { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA' },
  { id: 2, title: 'Data Analyst', company: 'Data Insights', location: 'New York, NY' },
  { id: 3, title: 'Marketing Specialist', company: 'Brand Builders', location: 'Chicago, IL' },
];

function App() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center">
            <GraduationCap className="mr-2" />
            College Placement System
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs..."
              className="py-2 px-4 pr-10 rounded-full text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" />
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Available Positions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 flex items-center mb-2">
                <Building2 className="mr-2" size={18} />
                {job.company}
              </p>
              <p className="text-gray-600 flex items-center mb-4">
                <Briefcase className="mr-2" size={18} />
                {job.location}
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
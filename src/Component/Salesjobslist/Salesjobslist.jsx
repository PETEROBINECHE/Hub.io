import "./Salesjobslist.css";

const jobData = [
  {
    title: "Senior Customer Success Manager (US East Coast)",
    company: "Kanpla",
    location: "Boston",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20240918111252-69f8f10a4a857bc65c209f49575c8658.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Financial Planner (100 %) – Fokus auf Customer Success – Remote (Zürich)",
    company: "Selma Finance",
    location: "London",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20250127160435-9f71266b0693a08d1d6d201e33ef97ca.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Director of Sponsorship Sales",
    company: "Blast",
    location: "London",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20200904121344-171003dd08f2a2c541afa08e34cc11f2.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Sales Specialist",
    company: "Too Good To Go",
    location: "Wroclaw",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20240906121746-87d7a2237b72931eafbe4f8e3a4a16de.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Partner Growth Specialist",
    company: "Too Good To Go",
    location: "London",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20240906121746-87d7a2237b72931eafbe4f8e3a4a16de.png?fit=crop&w=300&h=300&auto=format&q=60"
  }
];

const Salesjobslist = () => {
  return (
    <div className="Engineerjobslistsbody">
      <div className="Engineerjobspostion">
        {jobData.map((job, index) => (
          <div className="Engineerjobslist1" key={index}>
            <div className="Engineerjobslist11">
              <div className="jobslistlogo">
                <img src={job.logo} alt="company logo" className="jobslistlogo1" />
              </div>
              <div className="jobslisttextbody">
                <div className="jobslisttextbody2">
                  <div className="jobslisttext">
                    <span className="card-job-find-list__position">{job.title}</span>
                  </div>
                  <div className="jobslisttextsubtext">
                    <span>{job.company}</span>
                    <span> ○ {job.location}</span>
                    <span> ○ {job.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salesjobslist;

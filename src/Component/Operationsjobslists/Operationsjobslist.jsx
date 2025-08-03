import "./Operationsjobslist.css"

const jobData = [
  {
    title: "Operations Manager (m/f/d)",
    company: "Voi Technology",
    location: "Madrid",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20201123124339-d0de0a55a935220defc561d23153ac63.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Site Manager (m/w/d)",
    company: "Voi Technology",
    location: "Berlin",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20201123124339-d0de0a55a935220defc561d23153ac63.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Senior Customer Success Operations Specialist",
    company: "Supermetrics",
    location: "Berlin",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20241211142125-0a5b220e303c386c94ae97dbffbb4a38.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Commercial Operations Partner",
    company: "Too Good To Go",
    location: "Warsaw",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20240906121746-87d7a2237b72931eafbe4f8e3a4a16de.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Senior Marketing Business Partner",
    company: "Voi Technology",
    location: "London",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20201123124339-d0de0a55a935220defc561d23153ac63.png?fit=crop&w=300&h=300&auto=format&q=60"
  }
];

const Operationsjobslist = () => {
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

export default Operationsjobslist;

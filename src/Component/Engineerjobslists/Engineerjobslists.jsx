import "./Engineerjobslists.css";

const jobData = [
  {
    title: "Network Engineer",
    company: "BLAST",
    location: "Berlin",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20200904121344-171003dd08f2a2c541afa08e34cc11f2.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Backend Engineer, Backend Core",
    company: "Pleo Technologies",
    location: "Lisbon",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20201007082605-8d25acdb07bba9a61dee6f6c94c5e7be.jpg?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Staff Engineer",
    company: "Centra",
    location: "Wroclaw",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20210407123709-0c5b880cbaaf99bf572f9a6afacbd424.jpg?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Senior Backend Engineer, Backend Core",
    company: "Pleo Technologies",
    location: "Berlin",
    type: "Lisbon",
    logo: "https://thehub-io.imgix.net/files/s3/20201007082605-8d25acdb07bba9a61dee6f6c94c5e7be.jpg?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Junior .NETEngineer-Lithuania",
    company: "Relesys",
    location: "Kaunas",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20250129172452-60048fad4f821f74feec48e5ba400aa5.png?fit=crop&w=300&h=300&auto=format&q=60"
  }
];

const Engineerjobslists = () => {
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

export default Engineerjobslists;

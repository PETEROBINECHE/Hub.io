import "./Marketingjobslist.css";

const jobData = [
  {
    title: "Brand Marketing Specialist (Madrid)",
    company: "Lenus",
    location: "Madrid",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20220928131855-aaf53796764a2491f11c46a634e65dde.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Marketing Director - Germany (m/f/d)",
    company: "Ageras A/S",
    location: "Berlin",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20230628104555-e0f13e89b6c97a8a280e5866a24b7167.jpg?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Meewerkstage: Marketing/PR",
    company: "Podimo",
    location: "Berlin",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20250514121227-32293e0cc6ecebefe06ccddb05c78fff.jpg?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Senior Marketing Business Partner",
    company: "Supermetrics",
    location: "Warsaw",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20241211142125-0a5b220e303c386c94ae97dbffbb4a38.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Senior Marketing Business Partner",
    company: "Supermetrics",
    location: "London",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20241211142125-0a5b220e303c386c94ae97dbffbb4a38.png?fit=crop&w=300&h=300&auto=format&q=60"
  }
];

const Marketingjobslist = () => {
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

export default Marketingjobslist;

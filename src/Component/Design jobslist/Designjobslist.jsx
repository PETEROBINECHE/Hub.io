import "./Designjobslist.css";

const jobData = [
  {
    title: "Lead Product Designer",
    company: "Supermetrics",
    location: "Amsterdam",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20241211142125-0a5b220e303c386c94ae97dbffbb4a38.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Technical Associate to the CTO",
    company: "Synthesia",
    location: "London",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20220715111249-4298a4209b708e0afd8ebbee42ab3d4b.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Senior Product Manager",
    company: "Veo Technologies",
    location: "Berlin",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20201022065527-195790f3342601bbe8a89bbb640c9304.png?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Senior UX Designer (Research)",
    company: "Centra",
    location: "Wroclaw",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20210407123709-0c5b880cbaaf99bf572f9a6afacbd424.jpg?fit=crop&w=300&h=300&auto=format&q=60"
  },
  {
    title: "Lead Enterprise Product Marketing Manager",
    company: "Synthesia",
    location: "London",
    type: "Full-time",
    logo: "https://thehub-io.imgix.net/files/s3/20220715111249-4298a4209b708e0afd8ebbee42ab3d4b.png?fit=crop&w=300&h=300&auto=format&q=60"
  }
];

const Designjobslist = () => {
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

export default Designjobslist;

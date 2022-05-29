import React from 'react'

function ExploreTopics() {
  const contentTopics = [
    'See All Topics', 'Remote', 'Work from Home', 
    'Retirement', 'Internships',
    'Freelancer', 'Salary and Compensation', 'Starting a job'
  ];

  return (
    <section className='explore-topics'>
      <h1>Explore topics you are interested in</h1>

      <div className='suggested-searches'>
        <h4>CONTENT TOPICS</h4>
        <div className='search-pills'>
          {
            contentTopics.map((type, index) => {
              return <span key={index}>{type}</span>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ExploreTopics;
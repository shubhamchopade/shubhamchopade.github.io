import React from 'react'
import {Layout, P, H1, H2} from '../components/Layout/Layout'
import ProjectsComponent from '../components/Projects/ProjectsComponent'

const Projects = () => {
  return (
    <Layout>
      <H1>Projects</H1>
        <P>
          These are my personal projects.
        </P>
        <ProjectsComponent />
    </Layout>
  )
}

export default Projects

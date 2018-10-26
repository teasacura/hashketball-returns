import React from 'react'
import Team from './Team'

const TeamList = ({ teams }) => {

  const renderedTeams = teams.map(team => {
    return <Team key={team.id} team={team} />
  })

  return (
    <div className="team-list">
      {renderedTeams}
    </div>
  )
}

export default TeamList

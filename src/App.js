import React, { useState } from 'react'

// Next Anecdote 
const NextButton = ({handleNext}) => {
  return(
    <button onClick={handleNext}>next anecdote</button>
  )
}
// Vote Button Component 
const VoteButton = ({handleVote,largestVote}) => {
  return(
    <button onClick= {handleVote}>vote</button>
  )
}

const MostVoted = ({anecdotes,votes,largestVote}) => {
 
  return(
    <div>
      hi this is working  
    </div>
  )
  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  //States
  const [selected, setSelected] = useState(0)
  // intial array needs to be of a certain length rightttt
  const [votes,setVotes] = useState([0,0,0,0,0,0,0])

  const getRandomInt = () => {
    return Math.floor(0 + Math.random()*(6 + 1 - 0))
  }
 
  const handleNext = () => {
    let num = getRandomInt();
    setSelected(num);
  }

  const handleVote = () => {
    const num = [...votes]
    num[selected] = num[selected]+1
    setVotes(num)
  }

  const largestVote = () =>{
      const max = Math.max(...votes)
      console.log("the max votes are: ",max)
      const index = votes.indexOf(max);
      console.log("the index is: ", index)
      return index
  }
  
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}<br/>
      has {votes[selected]} votes. <br/><br/>
      <NextButton handleNext = {handleNext} />
      <VoteButton handleVote = {handleVote} />
      <br/><br/>
      {/* <button onClick={largestVote}>lar</button> */}
      <h1>Anecdote with the most votes</h1>
      {anecdotes[largestVote()]}
      <br />
      has {votes[largestVote()]} votes!
    </div>
  )
}
export default App


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/pol.css';

function Poll() {
  const [pollData, setPollData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [voted, setVoted] = useState(false);
  const [voteMessage, setVoteMessage] = useState('');

  useEffect(() => {
    // API ga GET so'rov yuborish
    axios.get('https://agentlik-backend.onrender.com/api/v1/polls/')
      .then(response => {
        setPollData(response.data[0]); // Faqat birinchi so'rovnoma olinyapti
      })
      .catch(error => {
        console.error("Xatolik yuz berdi:", error);
      });
  }, []);
  console.log(pollData);

  const handleVote = () => {
    if (selectedOption) {
      // PUT so'rov orqali ovozlar sonini yangilash
      axios.put(`https://agentlik-backend.onrender.com/api/v1/polls/${pollData.id}`, null, {
        params: {
          choice_id: selectedOption
        }
      })
      .then(() => {
        const updatedPollData = { ...pollData };
        const selectedChoice = updatedPollData.choices.find(choice => choice.id === parseInt(selectedOption));
        selectedChoice.clicks += 1;
        setPollData(updatedPollData);
        setVoted(true);
        setVoteMessage("Ovoz berganingiz uchun rahmat!");
      })
      .catch(error => {
        console.error("Ovoz berishda xatolik yuz berdi:", error);
        setVoteMessage("Ovoz berishda xatolik yuz berdi. Qayta urinib ko'ring.");
      });
    }
  };

  const calculatePercentage = (clicks) => {
    const totalClicks = pollData.choices.reduce((sum, choice) => sum + choice.clicks, 0);
    return totalClicks ? ((clicks / totalClicks) * 100).toFixed(2) : 0;
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  if (!pollData) return <p>Yuklanmoqda...</p>;

  return (
    <div className="poll-container">
      {!voted ? (
        <div className="poll">
          <h3>{pollData.question}</h3>
          <form>
            {pollData.choices.map(choice => (
              <div key={choice.id}>
                <input 
                  type="radio" 
                  id={`choice-${choice.id}`} 
                  name="poll" 
                  value={choice.id} 
                  onChange={handleOptionChange} 
                />
                <label htmlFor={`choice-${choice.id}`}>{choice.answer}</label>
              </div>
            ))}
            <button type="button" onClick={handleVote} disabled={!selectedOption}>Ovoz berish</button>
          </form>
        </div>
      ) : (
        <div className="results">
          <h3>{pollData.question}</h3>
          {pollData.choices.map(choice => (
            <div key={choice.id}>
              <p>{choice.answer}</p>
              <div className="progress-bar" style={{ width: `${calculatePercentage(choice.clicks)}%`, backgroundColor: 'blue' }}>
                {calculatePercentage(choice.clicks)}%
              </div>
            </div>
          ))}
          <p>Barcha ovozlar: {pollData.choices.reduce((sum, choice) => sum + choice.clicks, 0)}</p>
          <p>{voteMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Poll;

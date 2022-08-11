import axios from 'axios'
import Hero from './components/Hero/Hero';
import { FaLinkedin } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { publicIpv4 } from 'public-ip';
import './App.css';

function App() {
  const [ip,setIP] = useState('');
  const [votes,setVotes] = useState([]);
  const [voteCounts, setVoteCounts] = useState([]);
  const [fights,setFights] = useState([]);

  const BASE_URL = "https://misfitsboxing.herokuapp.com";
  const getFights = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getfights`);
      setFights(res.data?.fights);
    } catch (err) {
      console.log(err);
    }
  };

  const getVotes = async () => {
    const ipaddress = await publicIpv4();
    if(ipaddress === undefined || ipaddress === "") {
      console.log("Can not detect a IP from you.");
      return;
    }

    setIP(ipaddress);

    try {
      const res = await axios.get(`${BASE_URL}/getvotes`, {
        headers: {ipaddress}
      });
      
      setVotes(res.data?.votes);
      setVoteCounts(res.data?.voteCounts);
    } catch (err) {
      console.log(err);
    }
  }

  const placeVote = async (vote) => {
    try {
      const res = await axios.post(`${BASE_URL}/submitvote`,
      JSON.stringify({ip, vote}), 
      {
        headers: { 'Content-Type': 'application/json' }
      });

      setVotes(res.data?.votes);

      var updatedVoteCount = [];
      voteCounts.map(fighter => {
        if (fighter.fightername === vote) {
          fighter.votecount = fighter.votecount + 1;
        }

        updatedVoteCount.push(fighter);
      });

      updatedVoteCount.push(res.data?.updatedFighter);
      setVoteCounts(updatedVoteCount);
    } catch (err) {
      console.log(err);
    }
  }

  const runCallback = (cb) => {
    return cb();
  };
  
  useEffect(()=>{
    getVotes();
    getFights();
  }, []);

  return (
    <main className="main-wrapper">
      <Hero />
      <section className='fight-card-wrapper'>
        <div className='fight-card-background' />
        <div className='fight-card-container'>
          <h1 className='fight-card-header'>PICK YOUR FIGHTERS</h1>
          <div className='fight-cards'>
            { 
              fights.map((fight, index) => {
                return (
                  <div className='fight-card' key={index}>
                    {
                      runCallback(() => {
                        const row = [];
                        for (var index = 0; index < fight.length; index++) {
                          const fighter = fight[index];
                          var classname = 'fight-container';
              
                          if (votes.includes(fighter.name)) {
                            classname += "-voted";
                          } else {
                            if ((index === 0 && votes.includes(fight[1].name)) || (index === 1 && votes.includes(fight[0].name))) {
                              classname += "-disabled";
                            }
                          }
              
                          classname += index === 0 ? ' left' : ' right';
                          
                          var voteCountFilter = voteCounts.filter(filteredFigther => {
                            return filteredFigther.fightername === fighter.name;
                          });

                          var voteCount = voteCountFilter.length > 0 ? voteCountFilter[0]?.votecount : 0;

                          row.push(
                            <button className={classname} key={"fight_" + index} name={fighter.name} record={fighter.record} votecount={voteCount} onClick={() => placeVote(fighter.name)}>
                              <img className={(classname.includes('voted') || classname.includes('disabled')) ? 'fighter-image-nohover' : 'fighter-image'} src={fighter.image} alt={'Picture of ' + fighter.name} style={{left: fighter.position.left}}/>
                            </button>
                          );
              
                          index === 0 && row.push(<h1 key={"header_" + index}>vs.</h1>)
                        }
                        return row;
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <footer>
        <h1>Website by <a target='#' href='https://www.linkedin.com/in/travis-price-328519220/'><FaLinkedin className='linkedin-icon'/> Travis</a></h1>
      </footer>
    </main>
  );
}

export default App;

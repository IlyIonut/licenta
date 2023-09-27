import "./events.styles.scss"

import { EventsContext } from "../../context/events.context";
import { useEffect, useState, useContext } from "react";

import Popup from "reactjs-popup";
import { createEventDoc, uploadEventImage, uploadEventTerms, deleteEventDoc } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";
import { getUserData } from "../../utils/firebase/firebase.utils";
import { Link, useLocation } from "react-router-dom";



const Events = () => {
    const { eventsMap } = useContext(EventsContext) || {};
    const [loading, setLoading] = useState(true);
    const [newTitle,setNewTitle] = useState(eventsMap.eventName || '');
    const [newDescription,setNewDescription] = useState(eventsMap.description || '');
    const [newImage,setNewImage] = useState(eventsMap.eventImage || '');
    const [newDate,setNewDate] = useState(eventsMap.startDate || '');
    const [newJoin,setNewJoin] = useState(eventsMap.join || '');
    const [newTerms, setNewTerms] = useState('');
    const {currentUser} = useContext(UserContext);
    const [profileData, setProfileData] = useState("")
    const location = useLocation();
  
    useEffect(() => {
      // Check if events data is available before rendering
      if (eventsMap && Object.keys(eventsMap).length > 0) {
        setLoading(false);
      }
      console.log(eventsMap)
      const getUserProfile = async () => {
        try {
          const fetchedProfileData = await getUserData(currentUser);
          setProfileData(fetchedProfileData);
        } catch (error) {
          console.log('Error retrieving user profile:', error);
        }
      };
  
      getUserProfile();
    }, [eventsMap,currentUser]);

    const addEvent = async() => {
        try {
            
            if (!newTitle || !newDescription || !newDate || !newImage) {
              alert("Please fill all fields.");
              return;
            }

            const upImage = await uploadEventImage(newImage);
            const upTerms = newTerms? await uploadEventTerms(newTerms) : '';
        
            const eventData = {
              eventName: newTitle,
              description: newDescription,
              startDate: newDate,
              image:upImage,
              join:newJoin,
              terms:upTerms
            };
        
            await createEventDoc(eventData);
            window.location.reload();
        
          } catch (error) {
            console.error("Error adding event document: ", error);
            alert("Error adding event document: " + error.message);
          }
    }
    
    if (loading) {
      return <div>Loading...</div>;
    }
  
    const handleDeleteEvent = async (eventId, imageDownloadURL, termsDownloadURL) => {
      console.log(eventId, imageDownloadURL, termsDownloadURL);
      await deleteEventDoc(eventId, imageDownloadURL, termsDownloadURL);
      window.location.reload();
  };

    return (
      <>
      {location.pathname !== '/about'&& profileData?.role === "Board" && (
        <Popup trigger={
            <div className="p-5 mt-7">
            <button
              className="px-3 py-1 ml-2 text-white bg-green-500 rounded-md"
            >
              Add an Event
            </button>
            </div>
        } position={"bottom center"} >
            <div className='popUpContainer'>
                <div className='flex flex-col justify-between mx-3 my-3'>
                    <div className='flex p-2'>
                        <label className="block px-3 mb-2 text-lg font-bold">Title*:</label>
                        <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Insert Title"
                        className='px-3 mb-2'
                        />
                    </div>
                    <div className='flex p-2'>
                        <label className="block px-3 mb-2 text-lg font-bold">Description*:</label>
                        <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="Insert Description"
                        className='w-48 h-auto px-3 mb-2'
                        />
                    </div>
                    <div className='flex p-2'>
                        <label className="block px-3 mb-2 text-lg font-bold">Start Date*:</label>
                        <input
                        type="text"
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                        placeholder="Insert Start Date"
                        className='w-48 h-auto px-3 mb-2'
                        />
                    </div>
                    <div className='flex p-2'>
                        <label className="block px-3 mb-2 text-lg font-bold">Image*:</label>
                        <input
                        type="file"
                        onChange={(e) => setNewImage(e.target.files[0])}
                        placeholder="Insert Image"
                        className='w-48 h-auto px-3 mb-2'
                        />
                    </div>
                    <div className='flex p-2'>
                        <label className="block px-3 mb-2 text-lg font-bold">Link:</label>
                        <input
                        type="text"
                        value={newJoin}
                        onChange={(e) => setNewJoin(e.target.value)}
                        placeholder="Insert Link"
                        className='w-48 h-auto px-3 mb-2'
                        />
                    </div>
                    <div className='flex p-2'>
                        <label className="block px-3 mb-2 text-lg font-bold">Terms&Conditions:</label>
                        <input
                        type="file"
                        onChange={(e) => setNewTerms(e.target.files[0])}
                        placeholder="Insert Terms&Conditions"
                        className='w-48 h-auto px-3 mb-2'
                        />
                    </div>
                    <div className="px-2 py-3">
                        <button
                        onClick={addEvent}
                        className="px-3 py-1 ml-2 text-white bg-green-500 rounded-md"
                        >
                        Add the Event
                        </button>
                    </div>
                </div>
            </div>
        </Popup>
      )}
        
        {Object.keys(eventsMap).map((eventId) => {
        const event = eventsMap[eventId];
        if (!event) {
          // Skip rendering if event is undefined
          return null;
        }
        return(
        <div key={eventId} className="pageContainer">
          <div className='eventContainer'>
            <img className="image" src={event.image} alt='event' />
            <div className="line" />
            <div className="container">
              <h3>{event.eventName}</h3>
              <p>{event.description}</p>
            </div>
          </div>
          <div className="buttonContainer">
            <h2>Start Date:{event.startDate}</h2>
            <button
            onClick={() => window.open(event.join, '_blank', 'noopener noreferrer')}
            className="px-3 py-1 mx-5 text-white bg-green-500 rounded-md"
            >
              Join
          </button>
          <a 
          className="mx-5"
          href={event.terms}
          download={`TermsAndConditions.pdf`}
          target="_blank"
          rel="noreferrer">
            Terms&Conditions
          </a>
        {location.pathname !== '/about'&& profileData?.role === "Board" && (
          <button
            onClick={() => handleDeleteEvent(eventId, event.image, event.terms)}
            className="px-3 py-1 mx-5 text-white bg-red-500 rounded-md"
        >
            Delete Event
        </button>)}
          </div>
          
         
          </div>
        );
      })}
      </>
    );
  };
export default Events;
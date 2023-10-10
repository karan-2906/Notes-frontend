import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard'
import Search from '../components/search'
import QuickFilter from '../components/QuickFilter';
import { getNotes } from '../redux/notes/noteActions';
import { useDispatch, useSelector } from 'react-redux';
import BookCardSkeletion from '../components/skeletons/BookCardSkeletion';
import Alternate from '../components/Layout/Alternate' 

const Home = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state?.note?.notes)
  const noteLoading = useSelector((state) => state.note.noteLoading)
  const user = useSelector((state) => state?.user?.user)
  const [search, setSearch] = useState('')

  const searchedNotes = notes.filter((note) => {
    return note.name.toLowerCase().includes(search.toLowerCase())
  })


  const filteredNotes = searchedNotes ? searchedNotes : notes

  useEffect(() => {
    dispatch(getNotes())
  }, [])

  return (
    <>
    <Alternate>
      <div className=' w-full -mt-16 z-20 top-0 left-0 border border-5 border-solid ml-0 sm:ml-0  lg:ml-16 border-red-500 h-screen'>
        <div className='  container mx-auto mt-3'>
          <Search /><br />
          <QuickFilter />
          <div className='flex flex-wrap justify-center'>
            {
              noteLoading ? <BookCardSkeletion /> :
                filteredNotes.length === 0 ? <h1 className='text-white text-2xl'>No Notes To Display</h1> :

                  notes?.map((note, index) => (
                    <BookCard note={note} key={index} />
                  ))
              // < BookCardSkeletion />
            }
          </div>
        </div>
      </div>
      </Alternate>
    </>
  );
};

export default Home;

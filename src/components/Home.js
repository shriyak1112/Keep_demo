import React from 'react'
import SwiperDrawer from './SwiperDrawer'
import Notes from './notes/Notes'
import { Box } from '@mui/material'
import DeleteNotes from './delete/DeleteNotes'
import Archives from './archives/Archives'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = () => {
    return (
        <Box style={{ display: 'flex', width: '100%' }} >
            <Router>
                <SwiperDrawer />
                <Routes>
              <Route path = "/"  element={ <Notes />} />

              <Route path = "/archive"  element={ <Archives />} /> 
              
              <Route path = "/delete"  element={ <DeleteNotes />} /> 
                
                </Routes>
            </Router>

        </Box>
    )
}

export default Home
import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react'

const Main = () => {
    const [currentCategory, setCurrentCategory] = React.useState('cat1')

    const handleChange = (_, value) => {
        setCurrentCategory(value);
    }

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={currentCategory} aria-label="basic tabs example" onChange={handleChange}>
        <Tab label="Remeras" value={'cat1'}  />
        <Tab label="Zapatillas" value={'cat2'}  />
        <Tab label="Buzos" value={'cat3'}  />
      </Tabs>

    </Box>
    <Box>
        <Typography>
            {currentCategory}
        </Typography>
      </Box>
  </Box>
  )
}

export default Main;
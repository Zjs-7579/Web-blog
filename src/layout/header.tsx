import React, { useContext } from 'react'

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip,{ TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import AlarmIcon from '@mui/icons-material/Alarm';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import { setToken } from '@/utils/token';
import Link from 'next/link';

import Context from '@/context/global';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));



export default function Header() {

    const {setSearch,theme,setTheme}= useContext(Context)



    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
      React.useState<null | HTMLElement>(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
  
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };


    const handleDialogModel = ()=>{
      setSearch(true)
      setMobileMoreAnchorEl(null);
    }

  
    const handleIsThemes=()=>{
        let t = !theme
        setTheme(t)
        setToken("theme",t)
    }


    
      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id='primary-search-account-menu-mobile'
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
            <Link href="/">

            <MenuItem sx={{width:900,color:"#000"}} onClick={handleMobileMenuClose}>
            <IconButton size="large" aria-label="show 4 new home" color="inherit">
                <HomeIcon />
            </IconButton>
            <p>??????</p>
           
          </MenuItem>
          </Link>

          <Link href="/about">
          <MenuItem sx={{width:900,color:"#000"}} onClick={handleMobileMenuClose}>
         
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <AppsIcon />
            </IconButton>
            <p>??????</p>
           
          </MenuItem>
          </Link>


          <Link href="/time">

          <MenuItem sx={{width:900,color:"#000"}} onClick={handleMobileMenuClose}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <AlarmIcon />
            </IconButton>
            <p>??????</p>
          
          </MenuItem>
          </Link>

          {/* <Link href="/search"> */}
          <MenuItem sx={{width:900,color:"#000"}} onClick={handleDialogModel}>
          
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
            <p>??????</p>
          
          </MenuItem>
          {/* </Link> */}
        </Menu>
      );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"transparent"}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{fontWeight:"bold"}}
          >
            Zjs-7579
          </Typography>

         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


          <LightTooltip title="??????" enterDelay={500} leaveDelay={200}>
            <Link href="/">
          <IconButton size="large" aria-label="show 4 new home" color="inherit" >
                <HomeIcon />
            </IconButton>
            </Link>
            </LightTooltip>

            <LightTooltip title="??????" enterDelay={500} leaveDelay={200}>
            <Link href="/about">
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <AppsIcon />
            </IconButton>
            </Link>
            </LightTooltip>

            <LightTooltip title="??????" enterDelay={500} leaveDelay={200}>
            <Link href="/time">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                <AlarmIcon />
            </IconButton>
            </Link>
            </LightTooltip>

            <LightTooltip title="??????" enterDelay={500} leaveDelay={200} onClick={handleDialogModel}>
            <IconButton size="large" aria-label="show 4 new search" color="inherit">
                <SearchIcon />
            </IconButton>
            </LightTooltip>

            <LightTooltip title="??????" enterDelay={500} leaveDelay={200}>
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
              onClick={handleIsThemes}
            >
              {
                theme?<LightModeIcon />:
                <DarkModeIcon/>
              }
            </IconButton>
            </LightTooltip>


            <LightTooltip title="Github" enterDelay={500} leaveDelay={200}>
            <a href="http://github.com/Zjs-7579" target="_blank" rel="noreferrer">
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
             
            >
             <GitHubIcon/>
            </IconButton>
            </a>
            </LightTooltip>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
    </>
  )
}

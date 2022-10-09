import {Sheet} from "../core/Sheet";
import {Typography} from "../core/Typography";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

interface AppBarNavLinkInterface {
  children: React.ReactNode | React.ReactNode[],
  to: string
}

const AppBarNavLink = (props: AppBarNavLinkInterface) => {
  const { children, to } = props;

  const getLinkStyle = (isActive: boolean) => {
    return isActive ? {
      fontWeight: "bold",
      textDecoration: "none",
    } : {
      textDecoration: "none"
    }
  }

  return (
    <NavLink end={true} to={to} style={({ isActive }) => getLinkStyle(isActive)}>
      {children}
    </NavLink>
  );
}

export const MainAppBar = () => {
  return (
    <Sheet sx={{paddingLeft: 5, paddingTop: 2, width: "100%", height: 20, display: "flex", alignItems: "center"}}>
      <Typography typography={'h4'} textColor={'#0097e6'} fontWeight={"bold"}>
        NETFLOP
      </Typography>
      <Sheet sx={{
        marginLeft: 10,
        width: "40%",
        display: "flex",
        justifyContent: 'space-between'
      }}>
        <AppBarNavLink to={"/"}>
          <Typography typography={"body2"} sx={{color: "#fff"}}>Accueil</Typography>
        </AppBarNavLink>
        <AppBarNavLink to={"about"}>
          <Typography typography={"body2"} sx={{color: "#fff"}}>Séries</Typography>
        </AppBarNavLink>
        <Typography typography={"body2"} sx={{color: "#fff"}}>Film</Typography>
        <Typography typography={"body2"} sx={{color: "#fff"}}>Nouveautés</Typography>
        <Typography typography={"body2"} sx={{color: "#fff"}}>Ma Liste</Typography>
        <Typography typography={"body2"} sx={{color: "#fff"}}>Explorer par langue</Typography>
      </Sheet>
    </Sheet>
  );
}
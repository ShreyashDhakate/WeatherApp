import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    let RAIN_URL="https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg";
    let HOT_URL= "https://plus.unsplash.com/premium_photo-1681488104322-8bd081b57509?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1513002066671-74ea5914a6a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    

    return (
        <div className="InfoBox">
           
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={(info.humidity>80)? RAIN_URL: info.temp>20? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;{(info.humidity>80)? <ThunderstormIcon/>: info.temp>20? <WbSunnyIcon/>:  <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature= {info.temp}&deg;C</p>
            <p>Humidity= {info.humidity}</p>
            <p>Min. Temp= {info.tempMin}&deg;C</p>
            <p>Max. Temp= {info.tempMax}&deg;C</p>
            <p>weathe can be described as <b>{info.weather}</b>  and it feels-like <b>{info.feelsLike}&deg;C</b> </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}
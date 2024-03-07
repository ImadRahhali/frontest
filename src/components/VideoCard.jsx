import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

// Destructuring the api response
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(videoId, snippet);
  return (
    <Box >
      <Card
        sx={{
          width: { xs: "100%", sm: "358px", md: "320px" },
          boxShadow: "none",
          borderRadius: 0,
          maxWidth: "358px",
          paddingBottom:0
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            component="img"
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet.title}
            sx={{
              width: { xs: "100%", sm: "358px", md: "320px" },
              height: 180,
              maxWidth: "358px",
            }}
            object-fit="cover"
          />
          {/*Optional Chaining - Returns Undifined instead of error  */}
        </Link>
        <CardContent sx={{ backgroundColor: "#5D3587", height: "106px", paddingBottom: "0 !important" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFD1E3">
              {`${snippet?.title.slice(0, 57)}...` ||
                `${demoVideoTitle.slice(0, 57)}...`}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" color="#FFD1E3" >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "#392467", ml: "5px" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VideoCard;

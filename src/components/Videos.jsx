import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  console.log("Inside Videos Component", videos);

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="space-evenly"
      alignItems="start"
      gap={2}
      margin="auto"
    >
      {videos.map((item, index) => (
        <Box key={index} sx={{ width: "300px" }}>
          {/* Wrapping the thumbnail and title/channel information in a single box */}
          <Box
            sx={{
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Render thumbnail */}
            <Box>
              {item.id.videoId && (
                <VideoCard
                  video={item}
                  sx={{
                    width: "100%",
                    marginBottom: 0,
                    }}
                />
              )}
            </Box>
            {/* Render title and channel */}
            <Box >
              <Box >{/* Set paddingBottom to 0 */}
              {item.id.channelId && <ChannelCard channelDetail={item} />}</Box> 
            </Box>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

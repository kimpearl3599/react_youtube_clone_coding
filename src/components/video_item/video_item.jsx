import React from "react";
import styles from "./video_item.module.css";

//props를 반복하고 싶지 않으면 props => {video}로 지정 가능
const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="video_thumbnail"
      />
      <div className={styles.metaData}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;

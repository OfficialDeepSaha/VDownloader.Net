import React from "react";
import axios from "axios";
import { useState } from "react";
import styles from "./VideoDownloader.module.css";
import PulseLoader from "react-spinners/PulseLoader";
import { AiFillYoutube } from "react-icons/ai";
import { MdHighQuality } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VideoDownloader = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  const DownloadVideo = async (e) => {
    e.preventDefault();
    setLoading(true);
try {

    if (url.length > 0) {
      const response = await axios.get(BaseURL, {
        params: {
          url: url,
        },

        headers: {
          "X-RapidAPI-Key":
            "7736c41104msh789934f4e3c454ep1bb011jsn3369c6ab20ee",
          "X-RapidAPI-Host": "fb-video-reels.p.rapidapi.com",
        },
      });

      console.log(response.data);
      setResult([response.data]);
      setLoading(false);
    }}catch(error) {
      console.log(error);
    }
  };

  const handleDownload = () => {
    if (result.length > 0) {
      toast.success("Downloading Started👍");
    }
  };

  const BaseURL = "https://fb-video-reels.p.rapidapi.com/smvd/get/all";
  return (
    <div className={styles.VideoContainer}>
      <div>
        <h1 className={styles.text1}>Download All Video</h1>
        <p className={styles.text2}>
          Video download 480p - 1080p. Free. All devices
        </p>
      </div>

      <div>
        <input
          className={styles.text3}
          type="search"
          name="url"
          placeholder="Paste Video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          style={{ borderColor: isFocused ? "#00b887" : "" }}
        />
        <button className={styles.btn} onClick={DownloadVideo}>
          Generate
        </button>
      </div>
      <div>
        {loading && url.length > 0 ? (
          <PulseLoader color="#36d7b7" loading={loading} size={13} />
        ) : (
          ""
        )}
      </div>
      {result.length > 0 ? (
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <th style={{ color: "red" }}>
                <AiFillYoutube color="red" size={24} />
                Video
              </th>
              <th style={{ color: "red" }}>
                <MdHighQuality color="red" size={24} />
                Quality
              </th>
              <th style={{ color: "red" }}>
                <MdPendingActions color="red" size={24} /> Actions
              </th>
            </thead>
            <tbody>
              {result &&
                result.map((video, id) => (
                  <tr key={id}>
                    <img
                      src={video.picture}
                      alt="Video_Image"
                      width={70}
                      style={{ gap: "300px" }}
                    />
                    <td className={styles.quality}>480p</td>
                    <td>
                      <a
                        className={styles.text4}
                        href={video.links[4].link}
                        style={{ textDecoration: "none" }}
                        onClick={handleDownload}
                      >
                        <FaDownload size={15} />
                        Download
                      </a>
                      <ToastContainer />
                    </td>
                  </tr>
                ))}
              <th style={{ backgroundColor: "#ffffff" }}></th>
              {result &&
                result.map((video, id) => (
                  <tr key={id}>
                    <img src={video.picture} alt="Video_Image" width={70} />
                    <td className={styles.quality}>720p (HD)</td>
                    <td>
                      <a
                        className={styles.text4}
                        href={video.links[1].link}
                        style={{ textDecoration: "none" }}
                        onClick={handleDownload}
                      >
                        <FaDownload size={15} />
                        Download
                      </a>
                      <ToastContainer />
                    </td>
                  </tr>
                ))}
              <th style={{ backgroundColor: "#ffffff" }}></th>
              {result &&
                result.map((video, id) => (
                  <tr key={id}>
                    <img src={video.picture} alt="Video_Image" width={70} />
                    <td className={styles.quality}>1080p (FHD)</td>
                    <td>
                      <a
                        className={styles.text4}
                        href={video.links[3].link}
                        style={{ textDecoration: "none" }}
                        onClick={handleDownload}
                      >
                        <FaDownload size={15} />
                        Download
                      </a>
                      <ToastContainer />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default VideoDownloader;

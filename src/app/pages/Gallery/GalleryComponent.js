import React from "react";
import { useLocation } from "react-router-dom";

export default function GalleryComponent(props) {
  const location = useLocation();
  const section = location.state;
  console.log(section);

  return <div>Gallery {section}</div>;
}

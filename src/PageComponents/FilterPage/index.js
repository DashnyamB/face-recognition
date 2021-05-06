import React, { useEffect } from "react";
import "./style.scss";
import { useRef, useState } from "react/cjs/react.development";
import * as faceApi from "face-api.js";
import { withRouter } from "react-router";
import bg from "../../assets/video/Background.mp4"

const FilterPage = (props) => {
  const [width, setWidth] = useState(720);
  const [height, setHeight] = useState(560);
  const videoRef = useRef();
  const videoContaiterRef = useRef();

  const [expression, setExpression] = useState()
  const [ageAndGender, setAgeAndGender] = useState({
    age : 0,
    gender : "er",
  })

  useEffect(()=>{
    if(videoContaiterRef.current){
      run();
    }
  },[])


  const face_expressions = {
    angry : "Ууртай",
    disgusted : "Сэжиглэсэн",
    fearful : "Айсан",
    happy : "Жаргалтай",
    neutral : "Энгийн",
    sad : "Гунигтай",
    surprised : "Гайхсан"
  }

  useEffect(() => {
    
    const videoContaiter = document.querySelector(
      ".filtera-page__content__video"
    );
    const video = document.getElementById("filter__video");
    // const stream;
   
    function vidOff() {
      video.pause();
      video.src = "";
      video.srcObject = null;
  }

    startVideo();
    function aa() {
      setWidth(window.innerWidth);
    }
    window.onresize = aa;

    if (videoContaiter) {
      if (window.innerWidth < 520) {
        videoContaiter.style.width = `${
          window.innerWidth - window.innerWidth / 3
        }px`;
        videoContaiter.style.height = `${
          (window.innerWidth - window.innerWidth / 3) * 2
        }px`;
      } else if (window.innerWidth > 1200) {
        videoContaiter.style.width = `${
          window.innerWidth / 2 - window.innerWidth / 5
        }px`;
        videoContaiter.style.height = `${
          (window.innerWidth / 2 - window.innerWidth / 5) * 1.2
        }px`;
      }
    }
    return function(){
      vidOff()
    }
  }, [width]);

  useEffect(()=>{
    if(expression){
      console.log(face_expressions[expression.expression]);
    }
  },[expression])
 
  function startVideo() {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.log(err));
  }

  const run = async ()=>{
    try {
      Promise.all([
        faceApi.nets.tinyFaceDetector.load("../models/"),
        faceApi.nets.faceExpressionNet.load("../models/"),
        faceApi.nets.faceLandmark68Net.load("../models/"),
         faceApi.nets.ageGenderNet.load("../models/"),
         faceApi.loadFaceExpressionModel(`../models/`)
      ]).then(startVideo())
    
    } catch (e) {
      console.log(e.name, e.message, e.stack);
    }
 
    videoRef.current.addEventListener("play",  () => {
         const box = { x: 50, y: 50, width: 100, height: 100 }
    const drawOptions = {
      label: 'Hello I am a box!',
      lineWidth: 2
    }
    const canvas = faceApi.createCanvasFromMedia(videoRef.current);
      videoContaiterRef.current.append(canvas)
      const displaySize = {width : videoRef.current.width, height : videoRef.current.height}
      faceApi.matchDimensions(canvas, displaySize)
   
     
      setInterval(async()=>{
        const detections = await faceApi.detectAllFaces(videoRef.current, new faceApi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender();
        console.log(detections);
        const resizedDetections = faceApi.resizeResults(detections,displaySize);
        canvas.getContext("2d").clearRect(0,0, canvas.width, canvas.height)
        if(props.match.params.id === "103"){
          faceApi.draw.drawFaceLandmarks(canvas, resizedDetections)  
        }
        if(props.match.params.id === "102"){
          faceApi.draw.drawDetections(canvas, resizedDetections);
          if(detections[0]){
            setAgeAndGender({gender :detections[0].gender, age : Math.floor(detections[0].age) });
          }
        }
        
        
        if(props.match.params.id === "101"){
          faceApi.draw.drawDetections(canvas, resizedDetections);
          if(detections[0]){
            setExpression(detections[0].expressions.asSortedArray()[0]);
          }
        } 
   
      },100)
     
    })
  }

  return (
    <section className="filtera-page" ref={videoContaiterRef} style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/login-c6162.appspot.com/o/Base%20Files%2FSubfilter-background-picture-min.jpg?alt=media&token=79b0260b-7978-4e40-9dfe-e461e129745b")`, backgroundSize: "cover"}}>
        <video
            ref={videoRef}
              id="filter__video"
              style={{ backgroundColor: "green" }}
              width={width}
              height={height}
              autoPlay={true}
              muted
            ></video>
            {expression && <h1>{expression && face_expressions[expression.expression]}</h1>}
            {props.match.params.id === "102" && <article><h1>Нас : {ageAndGender.age}</h1><h1>Хүйс : {ageAndGender.gender === "male" ? "Эрэгтэй" :"Эмэгтэй"}</h1></article>}

    </section>
  );
};

export default withRouter(FilterPage);

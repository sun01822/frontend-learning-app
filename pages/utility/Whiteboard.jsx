import React, { useState, useRef, useEffect } from "react";
import {
  Stage,
  Layer,
  Line,
  Rect,
  Circle,
  RegularPolygon,
  Transformer,
} from "react-konva";
import { BsFillPenFill, BsCircle } from "react-icons/bs";
import {
  AiOutlineClear,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
} from "react-icons/ai";
import { BiRectangle, BiUndo } from "react-icons/bi";
import { BsTriangle } from "react-icons/bs";
import { FaEraser } from "react-icons/fa";
import { GiMoebiusTriangle, GiStraightPipe, GiClick } from "react-icons/gi";
import Logo from "../../public/images/logo.svg";
import { useRouter } from "next/router";
import TopLogo from "next/image";

const Whiteboard = () => {
  const [mode, setMode] = useState("pen");
  const [lines, setLines] = useState([]);
  const [color, setColor] = useState("#000000");
  const [strokeWidth, setStrokeWidth] = useState(5);
  const stageRef = useRef(null);
  const isDrawing = useRef(false);
  const [zoomPercentage, setZoomPercentage] = useState(100);
  //const [canvasImage, setCanvasImage] = useState("");
  // const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const [canvasSize, setCanvasSize] = useState({
    width: 1900 - 15,
    height: 1600,
  });
  const [scale, setScale] = useState(1); // Initialize scale to 1 (no zoom)

  const handleResetZoom = () => {
    setScale(1); // Reset the scale to 1 (default zoom)
  };

  const getPointerPosition = (stageRef, event, scale) => {
    const stage = stageRef.current;
    const pointerPosition = stage.getPointerPosition();

    if (!pointerPosition) {
      return { x: 0, y: 0 };
    }

    // Calculate the position adjusted for the scale
    const x = (pointerPosition.x - stage.x()) / scale;
    const y = (pointerPosition.y - stage.y()) / scale;

    return { x, y };
  };

  const handleZoomIn = () => {
    // Increase the scale factor by 0.1 when zooming in
    setScale((prevScale) => prevScale + 0.1);
  };

  const handleZoomOut = () => {
    // Decrease the scale factor by 0.1 when zooming out
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.1)); // Limit the minimum scale to 0.1
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener("wheel", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    const canvas = stageRef.current.content.getBoundingClientRect();
    const mouseY = e.clientY - canvas.top;
    const isMouseAtBottom = mouseY >= canvas.height - 15; // Considering a small threshold

    if (e.deltaY > 0 && isMouseAtBottom) {
      // Increase the canvas height whenever the user scrolls down and mouse is at the bottom
      setCanvasSize((prevSize) => ({
        ...prevSize,
        height: prevSize.height + 100, // You can adjust the increase value as needed
      }));
    }
  };

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = getPointerPosition(stageRef, e, scale);
    setLines([
      ...lines,
      { tool: mode, points: [pos.x, pos.y], color, strokeWidth },
    ]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const point = getPointerPosition(stageRef, e, scale);

    if (mode === "pen" || mode === "eraser") {
      const lastLine = lines[lines.length - 1];
      lastLine.points = lastLine.points.concat([point.x, point.y]);
      lines.splice(lines.length - 1, 1, lastLine);
      setLines([...lines]);
    } else if (mode === "rectangle") {
      const lastLine = lines[lines.length - 1];
      lastLine.points[2] = point.x;
      lastLine.points[3] = point.y;
      lines.splice(lines.length - 1, 1, lastLine);
      setLines([...lines]);
    } else if (mode === "triangle") {
      const lastLine = lines[lines.length - 1];
      lastLine.points[2] = lastLine.points[0]; // Right vertex x-coordinate
      lastLine.points[3] = point.y; // Right vertex y-coordinate
      lastLine.points[4] = point.x; // Top vertex x-coordinate
      lastLine.points[5] = lastLine.points[1]; // Top vertex y-coordinate

      lines.splice(lines.length - 1, 1, lastLine);
      setLines([...lines]);
    } else if (mode === "line") {
      const lastLine = lines[lines.length - 1];
      lastLine.points[2] = point.x;
      lastLine.points[3] = point.y;
      lines.splice(lines.length - 1, 1, lastLine);
      setLines([...lines]);
    } else if (mode === "circle") {
      const lastLine = lines[lines.length - 1];
      const radiusX = Math.abs(point.x - lastLine.points[0]);
      const radiusY = Math.abs(point.y - lastLine.points[1]);
      const radius = Math.max(radiusX, radiusY);
      lastLine.points[2] = radius;
      lines.splice(lines.length - 1, 1, lastLine);
      setLines([...lines]);
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleUndo = () => {
    setLines(lines.slice(0, -1));
  };

  const handleClearAll = () => {
    setLines([]);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleStrokeWidthChange = (e) => {
    setStrokeWidth(Number(e.target.value));
  };

  const handleEraserClick = () => {
    setMode("eraser");
  };

  const handleSaveCanvas = () => {
    const stage = stageRef.current.getStage();

    // Create a temporary white background layer
    const backgroundLayer = new window.Konva.Layer();
    const backgroundRect = new window.Konva.Rect({
      x: 0,
      y: 0,
      width: stage.width(),
      height: stage.height(),
      fill: "white",
    });
    backgroundLayer.add(backgroundRect);

    // Add the background layer to the bottom of the layer stack
    stage.add(backgroundLayer);
    backgroundLayer.moveToBottom();

    // Render the stage to a data URL with the white background
    const dataURL = stage.toDataURL({ mimeType: "image/png" });

    // Remove the background layer from the stage
    backgroundLayer.remove();

    // Create a new image object
    const img = new Image();

    // When the image is loaded, create a canvas, draw the image with a white background, and create a new data URL
    img.onload = () => {
      // Create a canvas element with the same dimensions as the image
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw a white background on the canvas
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the image on top of the white background
      ctx.drawImage(img, 0, 0);

      // Convert the modified canvas to a new data URL
      const newDataURL = canvas.toDataURL("image/png");

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = newDataURL;
      link.download = "canvas_with_white_background.png";

      // Programmatically trigger the download
      link.click();
    };

    // Set the image source to your dataURL
    img.src = dataURL;
  };

  useEffect(() => {
    // Calculate the zoom percentage when the scale changes
    const percentage = Math.round(scale * 100);
    setZoomPercentage(percentage);
  }, [scale]);

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener("wheel", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const router = useRouter();

  return (
    <div className="bg-white w-full h-screen overflow-hidden">
      <div className="w-[150px] absolute bg-white z-50 rounded-lg">
        <TopLogo
          onClick={() => router.back()}
          className="w-[150px] p-4 drop-shadow cursor-pointer"
          src={Logo}
          alt="Logo"
        />
      </div>
      <Stage
        width={canvasSize.width}
        height={canvasSize.height}
        scaleX={scale}
        scaleY={scale}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        ref={stageRef}
      >
        <Layer>
          {lines.map((line, i) => {
            if (line.tool === "pen" || line.tool === "eraser") {
              return (
                <Line
                  key={i}
                  points={line.points}
                  stroke={line.color}
                  strokeWidth={line.strokeWidth}
                  tension={0.5}
                  lineCap="round"
                  globalCompositeOperation={
                    line.tool === "eraser" ? "destination-out" : "source-over"
                  }
                />
              );
            } else if (line.tool === "rectangle") {
              const [x1, y1, x2, y2] = line.points;
              return (
                <Rect
                  key={i}
                  x={x1}
                  y={y1}
                  width={x2 - x1}
                  height={y2 - y1}
                  stroke={line.color}
                  strokeWidth={line.strokeWidth}
                />
              );
            } else if (line.tool === "triangle") {
              const [x1, y1, x2, y2] = line.points;
              return (
                <RegularPolygon
                  key={i}
                  sides={3}
                  x={x1}
                  y={y1}
                  radius={Math.sqrt(
                    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
                  )}
                  stroke={line.color}
                  strokeWidth={line.strokeWidth}
                />
              );
            } else if (line.tool === "line") {
              const [x1, y1, x2, y2] = line.points;
              return (
                <Line
                  key={i}
                  points={[x1, y1, x2, y2]}
                  stroke={line.color}
                  strokeWidth={line.strokeWidth}
                  tension={0.5}
                  lineCap="round"
                />
              );
            } else if (line.tool === "circle") {
              const [cx, cy, radius] = line.points;
              return (
                <Circle
                  key={i}
                  x={cx}
                  y={cy}
                  radius={radius}
                  stroke={line.color}
                  strokeWidth={line.strokeWidth}
                />
              );
            }
            return null;
          })}
        </Layer>
      </Stage>

      {/* last */}

      <div className=" border-2 bg-white fixed bottom-0 left-1/2 transform -translate-x-1/2 space-x-4 flex justify-center bg-grey p-0.5 shadow-lg shadow-neutral-950 rounded-lg">
        <div className="border-r-2 border-gray-60  h-8 p-2 mt-2  flex">
          <button className="" onClick={handleSaveCanvas}>
            {/* <BiSolidSave className="w-5 h-5" /> */}
            <span>Save</span>
          </button>
        </div>

        <div className=" border-r-2 border-gray-60 h-8 p-2 mt-2 flex">
          <button
            className=" flex items-center  rounded transition-colors duration-300 mr-2"
            onClick={handleZoomIn}
          >
            <AiOutlineZoomIn className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold flex items-center text-black py-2 px-1 rounded transition-colors duration-300">
            {zoomPercentage}%
          </span>
          <button
            className="text-xs font-bold flex items-center text-black py-2 px-1 rounded transition-colors duration-300 mr-2"
            onClick={handleZoomOut}
          >
            <AiOutlineZoomOut className="w-5 h-5" />
          </button>
          <button
            className="text-xs font-bold flex items-center text-black py-2 px-1 rounded transition-colors duration-300"
            onClick={handleResetZoom}
          >
            <GiClick className="w-5 h-5" />
          </button>
        </div>

        <button
          className={`flex items-center space-x-2 ${
            mode === "pen" ? "selectShape" : ""
          }`}
          onClick={() => handleModeChange("pen")}
        >
          <BsFillPenFill className="w-5 h-5" />
          {/* <span>Pen</span> */}
        </button>

        <button
          className={`flex items-center space-x-2 ${
            mode === "rectangle" ? "selectShape" : ""
          }`}
          onClick={() => handleModeChange("rectangle")}
        >
          <BiRectangle className="w-5 h-5" />
          {/* <span>Rectangle</span> */}
        </button>

        <button
          className={`flex items-center space-x-2 ${
            mode === "triangle" ? "selectShape" : ""
          }`}
          onClick={() => handleModeChange("triangle")}
        >
          <BsTriangle className="w-5 h-5" />
          {/* <span>Triangle</span> */}
        </button>

        <button
          className={`flex items-center space-x-2 ${
            mode === "line" ? "selectShape" : ""
          }`}
          onClick={() => handleModeChange("line")}
        >
          <GiStraightPipe className="w-5 h-5" />
          {/* <span>Line</span> */}
        </button>

        <button
          className={`flex items-center space-x-2 ${
            mode === "circle" ? "selectShape" : ""
          }`}
          onClick={() => handleModeChange("circle")}
        >
          <BsCircle className="w-5 h-5" />
          {/* <span>Circle</span> */}
        </button>
        <button
          className={`flex items-center space-x-2 ${
            mode === "eraser" ? "selectShape" : ""
          }`}
          onClick={handleEraserClick}
        >
          <FaEraser className="w-5 h-5" />
          {/* <span>Eraser</span> */}
        </button>

        {/* <button
          className="hover:bg-slate-200 active:bg-gray-300 text-xs font-bold flex items-center text-black py-2 px-1 rounded transition-colors duration-300"
          onClick={() => {
            const inputElement = document.getElementById("strokeWidth");
            inputElement.style.display = "block";
            inputElement.focus();
          }}
        >
          <GiResize className="w-5 h-5" />
        </button> */}
        <input
          className=""
          type="range"
          id="strokeWidth"
          min="1"
          max="50"
          value={strokeWidth}
          onChange={handleStrokeWidthChange}
        />
        <input
          className="rounded-lg mt-2 w-10 "
          type="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <span
          className="w-6 h-6 rounded-full mt-3 "
          style={{
            backgroundColor: color,
            transform: `scale(${strokeWidth / 50})`,
          }}
        ></span>

        <div className="border-l-2 border-gray-60 h-8  flex mt-2  ">
          <button
            className=" hover:bg-red-600	p-1   flex items-center   transition-colors duration-300"
            onClick={handleClearAll}
          >
            <AiOutlineClear className="w-8 h-6" />
          </button>
          <button
            className="hover:bg-slate-200	p-1   flex items-center    transition-colors duration-300"
            onClick={handleUndo}
          >
            <BiUndo className="w-8 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;

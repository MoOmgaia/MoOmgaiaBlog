import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@linard-y/paramatric-function";

function ParamatricFunction() {
  const chartRef = useRef();
  const viewofTimeRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart") return new Inspector(chartRef.current);
      if (name === "viewof time") return new Inspector(viewofTimeRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={chartRef} />
      <div ref={viewofTimeRef} />
      <p>Credit: <a href="https://observablehq.com/@linard-y/paramatric-function@1083">Paramatric function by linard-y</a></p>
    </>
  );
}

export default ParamatricFunction;

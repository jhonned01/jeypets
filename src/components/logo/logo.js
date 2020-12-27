import * as React from "react";
import { Svg } from "./styles";

function Logo(props) {
  return (
    <Svg
      width={281.077}
      height={117.24}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="109.461 16.38 281.077 117.24"
      style={{
        background: "#fff",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter
          id="prefix__editing-lego"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="#000" result="f1" />
          <feFlood floodColor="#001cff" result="f2" />
          <feMorphology operator="dilate" radius={3} in="SourceAlpha" />
          <feConvolveMatrix
            order="5,5"
            divisor={1}
            result="cm1"
            kernelMatrix="0 1 1 1 0 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 0 1 1 1 0"
          />
          <feComposite operator="in" in="f1" in2="cm1" result="c1" />
          <feMorphology operator="dilate" radius={3} />
          <feConvolveMatrix
            order="5,5"
            divisor={1}
            result="cm2"
            kernelMatrix="0 1 1 1 0 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 0 1 1 1 0"
          />
          <feComposite operator="in" in="f2" in2="cm2" result="c2" />
          <feMerge>
            <feMergeNode in="c2" />
            <feMergeNode in="c1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-lego)">
        <path
          d="M134.32 111.605q3.27-.38 5.32-4.61 2.11-4.28 4.03-14.14l6.21-32.32h13.88l-6.2 32.32q-2.37 12.54-6.28 17.47-2.04 2.56-4.64 3.59-2.59 1.02-5.4 1.02-2.82 0-4.64-1.02-1.83-1.03-2.28-2.31zm56.77-19.65q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.52 2.11-4.41 0-7-.96-2.6-.96-4.32-2.75-3.4-3.39-3.4-9.6 0-9.67 5.25-15.55 5.63-6.34 15.43-6.34 6.08 0 9.08 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07 1.32 1.12 3.75 1.12 2.43 0 5.02-1.12 2.59-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.16-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm41.53 10.56q-3.33 3.45-9.41 3.45-7.61 0-9.21-5.56-.51-1.67-.51-3.52 0-1.86.38-3.78l3.01-16 12.99-1.28-3.52 18.62q-.13.84-.32 1.73-.19.9-.19 1.83 0 .92.32 1.53t.77.99q.76.52 2.14.52 1.38 0 2.56-1.67 1.18-1.66 1.76-4.54l3.52-17.73 12.61-1.28-4.8 25.15q-2.37 12.29-7.23 17.15-2.5 2.5-5.73 3.49-3.23.99-7.39.99-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.62 1.98-4.13 1.98-1.5 5.06-1.5 2.68 0 4.73 1.15 1.22.7 1.79 1.6-1.47 1.28-1.47 3.39 0 2.82 2.56 2.82 4.23 0 6.66-9.73.7-2.88 1.34-5.95zm44.23-35.46q15.68 0 15.68 11.07 0 6.08-3.91 9.73-3.84 3.65-10.56 3.65-3.13 0-5.57-1.79-1.15-.77-1.92-1.79 4.68 0 7.14-2.85t2.46-8.42q0-5.57-5.5-5.57h-1.54q-.38 0-.7.07l-7.36 38.59h-13.89l7.87-41.92q6.85-.64 10.82-.7 3.97-.07 6.98-.07zm41.92 31.87q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.43 0 5.03-1.12 2.59-1.12 3.68-2.92zm-13.06-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm22.21 11.39q0-1.73.89-6.08l3.4-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.07l-1.53 6.98h4.99l-.58 2.88h-4.93l-3.26 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.95 3.46-2.3 1.28-5.57 1.28-3.26 0-5.12-2.05-1.85-2.05-1.85-5.63zm41.21-16.06q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44-1.32 1.44-1.32 3.24 0 1.28 1.03 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.24 2.37-3.48 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7z"
          fill="#fff"
        />
      </g>
      <style />
    </Svg>
  );
}

export default Logo;
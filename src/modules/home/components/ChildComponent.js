import React from "react";
// Emotion helps us write component scoped CSS
// This makes the component as a whole reusable
// If we write all the CSS of all the component, in a separate folder
// Then we can face the following challenges
// 1. If we delete the component, we cant confidently the CSS since those classess might be used by some other component,
//    that will make a lot of unmanageable and unsed CSS
// 2. That component is not reusable since have a common styling for it
// 3. In the first page load, we are serving a lot of unsed CSS even when the component is not being loaded
// 4. Huh! Performance
import { css } from "emotion";

const TextClass = css`
  font-size: 24px;
  color: aquamarine;
`;

// Name of the file should be same as that component
// There should be only one component per file
const ChildComponent = props => {
  return (
    <div>
      {/* We can even make classess separately and use them here, to make it more modular */}
      <span className={TextClass}>Child Component</span>

      {/* Using CSS directly inside the component */}
      <span
        className={css`
          /* Notice how we can write actual CSS here, not JS */
          font-size: 20px;
          color: blue;
        `}
      >
        Child Component with className
      </span>
    </div>
  );
};

// Component should be default exported at the end of the file
export default ChildComponent;

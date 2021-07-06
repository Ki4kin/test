import { useState } from 'react';
import formatProperty from './helpers/formatProperty';

function Component({ el }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {Array.isArray(el.value) 
        ? 
          <div className="parentRow">
            <div className="key" onClick={() => setIsOpen(!isOpen)}>
              &#128193; {el.name}
            </div>
            {el.value.map((el2) => isOpen && <Component el={el2} key={el2.id} />)}
          </div>
        : 
          <div className="row">
            <div className="key"> {el.name}</div>
            <div className="property"> {formatProperty(el)} </div>
          </div>
      }
    </>
  );
}

export default Component;

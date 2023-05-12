
/* This file contains Screen component */

export default function Screen({ sref, value }) {
    return (
        <input ref={sref} readOnly={true} className="screen" type="text" value={value} />
    );
}
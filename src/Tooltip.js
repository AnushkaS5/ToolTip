import React, { useState } from 'react';
import './Tooltip.css'; // Import CSS file for styling

const Tooltip = ({ position, content, children }) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            {visible && (
                <div className={`tooltip-box tooltip-${position}`}>
                    Thanks for Hovering ! i'm a tooltip
                </div>
            )}
        </div>
    );
};

export default Tooltip;

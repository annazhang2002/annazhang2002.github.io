import React from 'react';
import '../style.css';

import Tag from '../atoms/Tag';

const TagDiv = (props) => {
    return (
        <div className="my-container space">
            {props.tags.map(name => {
                return (
                    <Tag tag={name} />
                )
            })}
        </div>
    );
};

export default TagDiv;

import React from 'react';
import GroupCategoryContainer from './Container/GroupCategoryContainer';

const GroupCategoryPage = ({location}) => {
    return (
        <div>
            <GroupCategoryContainer location={location} />
        </div>
    );
};

export default GroupCategoryPage;
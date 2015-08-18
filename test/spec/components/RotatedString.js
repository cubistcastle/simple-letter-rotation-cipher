'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import RotatedString from 'components/RotatedString.js';

describe('RotatedString', () => {
    let RotatedStringComponent;

    beforeEach(() => {
        RotatedStringComponent = createComponent(RotatedString);
    });

    it('should have its component name as default className', () => {
        expect(RotatedStringComponent._store.props.className).toBe('RotatedString');
    });
});

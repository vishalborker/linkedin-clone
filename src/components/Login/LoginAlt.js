import React from 'react';

import OrSeparator from '../helper/OrSeparator';
import { IMAGES } from '../../constants/images';

function LoginAlt({ loading }) {
  return (
    <>      
        <OrSeparator />
        <button type='button' className={loading ? 'disabled' : ''}>
            <img src={IMAGES.SIGN_IN_APPLE} alt='sign in apple' />
            Sign in with Apple
        </button>
    </>
  )
}

export default LoginAlt
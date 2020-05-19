import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Loading, Heading, LaunchTile } from '../components';
import { RouteComponentProps } from '@reach/router';

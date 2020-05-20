import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Loading, Heading, LaunchTile } from '../components';
import { RouteComponentProps } from '@reach/router';
import { LAUNCH_TILE_DATA } FROM '@reach/router';
import * as GetMyTripsTypes from './__generated__/GetMyTrips';

export const GET_MY_TRIPS = gql`
  query GetMyTrips {
    me {
        id
        email
        trips {
            ...LaunchTile
        }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

interface ProfileProps extends RouteComponentProps {}

const Profile: React.FC<ProfileProps> = () => {
  const {
    data,
    loading,
    error
  } = useQuery<GetMyTripsTypes.GetMyTrips>(
      GET_MY_TRIPS,
      { fetchPolicy: "network-only" }
  );
  if ( loading ) return <Loading />;
  if ( error ) return <p>ERROR: {error.message}</p>;
  if ( data === undefined ) return <p>ERROR</p>;
  
  return (
    
  )
}





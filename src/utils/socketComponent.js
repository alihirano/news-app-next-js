import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import { connect } from 'react-redux';
import {
  setUpdatedTicketAction,
  setTotalNewTicketAction,
  setNewTicketDataAction,
  setUpdatedCompaniesAction,
  manipulationOneDataSocketAction,
} from '../actions/socket';

const socketComponent = props => {
  const [notif, setNotif] = useState(props.updated_notifications);
  useEffect(() => {
    const io = socketIOClient(API_URL, {
      transports: ['polling', 'websocket'],
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: props.token,
          },
        },
      },
    });

    io.on('model/tickets patched', data => {
      props.setUpdatedTicket(data);
    });
    io.on('model/tickets created', data => {
      props.setNewTicketData(data);
      props.setTotalNewTicket(1);
    });
    io.on('users patched', data => {
      props.setUpdatedCompanies(data);
    });
    io.on('model/notifications created', data => {
      props.manipulationOneDataSocket(data);
    });

    return () => io.disconnect();
  }, []);
  return <div />;
};

const mapStateToProps = state => {
  return {
    token: state.auth.data.access_token,
    updated_notifications: state.socket.updated_notifications,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUpdatedTicket: data => dispatch(setUpdatedTicketAction(data)),
    setTotalNewTicket: data => dispatch(setTotalNewTicketAction(data)),
    setNewTicketData: data => dispatch(setNewTicketDataAction(data)),
    setUpdatedCompanies: data => dispatch(setUpdatedCompaniesAction(data)),
    manipulationOneDataSocket: data => dispatch(manipulationOneDataSocketAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(socketComponent);

import { store } from 'react-notifications-component';

const Alert = (title, message, type) => {
  return store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

export default Alert;

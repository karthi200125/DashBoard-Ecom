import moment from 'moment';

export const formatDate = (dateString) => {
    return moment(dateString).format('MMM DD YYYY');
};
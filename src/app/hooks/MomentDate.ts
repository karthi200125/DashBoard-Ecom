import moment from 'moment';

export const formatDate = (dateString: string) => {
    return moment(dateString).format('MMM DD YYYY');
};

export const monthsAgo = (dateString: string) => {
    return moment(dateString).fromNow();
};
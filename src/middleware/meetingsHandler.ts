import {
	deleteUserMeeting,
	getArchivedMeetings,
	getUpcomingMeetings,
} from './apiHandler';

export const getMeetings = async (token: string, type: string) => {
	const response =
		type === 'upcoming'
			? await getUpcomingMeetings(token)
			: await getArchivedMeetings(token);
	if (response && response.ok) {
		return await response.json();
	} else {
		//throw new Error("Couldn't get user's meetings.");
		console.error("Couldn't get user's meetings.");
	}
};

export const deleteMeeting = async (id: string) => {
	const response = await deleteUserMeeting(id);
	if (response && response.ok) {
		console.log('ok!');
	} else {
		//throw new Error("Couldn't delete meeting.");
		console.error("Couldn't delete meeting.");
	}
};

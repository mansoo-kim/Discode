import * as MembershipApiUtil from '../utils/membership_api_utils';

export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';
export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';

export const removeMembership = (membership) => ({
  type: REMOVE_MEMBERSHIP,
  membership
});

export const receiveMembership = (membership) => ({
  type: RECEIVE_MEMBERSHIP,
  membership
});

export const deleteMembership = (membership) => (dispatch) => (
  MembershipApiUtil.deleteMembership(membership)
    .then(
      (membership) => dispatch(removeMembership(membership))
    )
);

export const createMembership = (membership) => (dispatch) => (
  MembershipApiUtil.createMembership(membership)
    .then(
      (membership) => dispatch(receiveMembership(membership))
    )
);

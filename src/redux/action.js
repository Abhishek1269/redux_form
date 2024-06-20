export const UPDATE_FORM = 'UPDATE_FORM';
export const RESET_FORM = 'RESET_FORM';

export const updateForm = (field, value) => ({
  type: UPDATE_FORM,
  payload: { field, value },
});

export const resetForm = () => ({
  type: RESET_FORM,
});
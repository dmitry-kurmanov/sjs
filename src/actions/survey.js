export function doComplete() {
  return (dispatch, getState) => {
    dispatch({
      type: "DO_COMPLETE",
      payload: {},
      event: "onComplete"
    });
  };
}

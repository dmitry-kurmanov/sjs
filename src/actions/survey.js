export function doComplete() {
  return (dispatch, getState) => {
    dispatch({
      type: "DO_COMPLETE",
      payload: {}
    });
    console.log("I am the side-effect !");
  };
}

export const initialState = {
  user: {
    displayName: "Hadi Tariq",
    email: "hadi.tariq02@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://lh3.googleusercontent.com/-51jQMCs0r2U/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucl7NNb_zb8yCtH-3QNzOXpNhVmi0g/photo.jpg",
    refreshToken: "AE0u-Ne_l_mRkG KukjiS0kESV9RHmEuwAL60obZmx9kR9hSkAymFcO6jMuG_zm9qspqmmDX0J1CQHIfivqDQApcFF9s9pBOPFpv0LYDCvPK8AwIbRvNx42oJnR5WmHSMIGti_oPwMxgeQXOdCSpoLQyMpfD-iMxyDxE2aFItzlqtZCj6rhoUIYVIvPPdKM2tKL4LaJv2C86K8CfAZDIO6vB6Mj8fsuhjAZv-qmWNlYpWxB6IzUlZkpWtf_lh29OSk2pAA6reXesGr6H2FwbTnuZYwsJt4glvoRns29rvuPVFgoQn1bsxzEg4jfeeByCRkBcpTvSUYoeTIUI1os6HtxBGelINM19Hw5js_1lafhsELrt_4LLsCVnkbOcODrZgM7JQ5yP9NYg18O7D1opTRaVbrGMJNBfk98uY7S-aHeylKKgKjslT-SM"
  }
};

export const actionTypes = {
  SET_USER: "SET_USER"
};

const reducer = (state, action) => {
  console.log({action})
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
